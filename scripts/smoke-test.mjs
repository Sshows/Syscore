import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://localhost:3000";
const origin = process.env.TEST_ORIGIN || "https://syscore-blond.vercel.app";
const responses = [];
const fetch = async (input, options) => {
  const response = await globalThis.fetch(input, options);
  responses.push(response);
  return response;
};
for (const path of [
  "/",
  "/services",
  "/audiences",
  "/founder",
  "/company",
  "/education",
  "/contact",
  "/privacy",
  "/personal-data",
  "/sitemap.xml",
  "/robots.txt",
]) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  const body = await response.text();
  assert.ok(body.length > 50, path);
  if (path === "/company") {
    assert.ok(body.includes("260940014470"));
    assert.ok(body.includes("62092"));
  }
  if (path === "/contact") {
    assert.ok(body.includes("tel:+77027776181"));
    assert.ok(!body.includes("mailto:"));
  }
  if (path === "/founder") {
    assert.ok(body.includes("PhD"));
    assert.ok(body.includes("Оригиналы не публикуются"));
    assert.ok(!body.includes("/certificates/"));
    assert.ok(!body.includes("Оригинал PDF"));
  }
  if (path === "/") assert.ok(!body.includes("/certificates/"));
  if (path === "/education") {
    for (const vendor of ["Cisco", "Fortinet", "MikroTik"])
      assert.ok(body.includes(vendor));
    assert.ok(body.includes("не действующая лаборатория"));
    assert.ok(!body.includes("6200") && !body.includes("6,200"));
  }
  console.log(`PASS GET ${path}`);
}
assert.equal((await fetch(`${base}/api/health`)).status, 200);
const first = await fetch(base);
const second = await fetch(base);
const csp = first.headers.get("content-security-policy");
assert.ok(csp.includes("'nonce-") && csp.includes("'strict-dynamic'"));
assert.ok(!csp.split("style-src")[0].includes("'unsafe-inline'"));
assert.notEqual(csp, second.headers.get("content-security-policy"));
assert.equal(first.headers.get("x-content-type-options"), "nosniff");
assert.equal(first.headers.get("x-frame-options"), "DENY");
assert.ok(
  (await fetch(base + "/opengraph-image")).headers
    .get("content-type")
    .startsWith("image/png"),
);
for (const id of [
  "phd",
  "ethical-hacking",
  "investigation",
  "communication",
  "ord",
  "ai",
  "digital-learning",
  "blended-learning",
  "disability-inclusion",
  "diversity",
  "managing-diversity",
]) {
  const response = await fetch(base + "/certificates/" + id + ".pdf");
  assert.equal(response.status, 410);
  assert.ok(response.headers.get("cache-control").includes("no-store"));
  assert.ok(response.headers.get("x-robots-tag").includes("noindex"));
  const preview = await fetch(base + "/certificates/" + id + ".webp");
  assert.equal(preview.status, 410);
}
for (const encoded of [
  "%2Fcertificates%2Fphd.webp",
  "%252Fcertificates%252Fphd.webp",
]) {
  for (const width of [640, 3840]) {
    for (const quality of [75, 85]) {
      const response = await fetch(
        `${base}/_next/image?url=${encoded}&w=${width}&q=${quality}`,
      );
      assert.ok(response.headers.get("content-type")?.startsWith("text/plain"));
      if (response.status === 410) {
        assert.ok(response.headers.get("cache-control")?.includes("no-store"));
        assert.ok(response.headers.get("x-robots-tag")?.includes("noindex"));
      } else {
        // Vercel's managed optimizer rejects the retired source before Next proxy.
        // Accept only its explicit protective error, not an arbitrary 4xx/5xx.
        assert.equal(response.status, 400);
        assert.equal(
          response.headers.get("x-vercel-error"),
          "INVALID_IMAGE_OPTIMIZE_REQUEST",
        );
      }
    }
  }
}
assert.equal(
  (await fetch(base + "/certificates/phd.pdf", { method: "HEAD" })).status,
  410,
);
assert.equal(
  (await fetch(base + "/brand/syscore-logo-on-navy.png")).status,
  200,
);
console.log(
  "PASS original scans, previews and legacy optimized image routes retired; brand asset unaffected",
);
assert.equal((await fetch(`${base}/not-a-real-page`)).status, 404);
assert.equal(
  (await fetch(`${base}/api/security-check`, { method: "POST" })).status,
  503,
);
const payload = {
  name: "Smoke Test",
  phone: "+77000000000",
  topic: "security",
  message: "Local verification only",
  consent: true,
  website: "",
  captchaToken: "synthetic-local-test-only",
};
const post = (data, customOrigin = origin, contentType = "application/json") =>
  fetch(`${base}/api/leads`, {
    method: "POST",
    headers: { Origin: customOrigin, "Content-Type": contentType },
    body: JSON.stringify(data),
  });
assert.equal((await post({})).status, 400);
assert.equal((await post(payload, "https://untrusted.example")).status, 403);
assert.equal((await post(payload, origin, "text/plain")).status, 415);
assert.equal(
  (await post({ ...payload, message: "x".repeat(9000) })).status,
  413,
);
assert.equal((await post({ ...payload, consent: false })).status, 400);
assert.equal(
  (await post({ ...payload, password: "not-accepted" })).status,
  400,
);
assert.equal((await post({ ...payload, files: [] })).status, 400);
assert.equal((await post({ ...payload, captchaToken: "" })).status, 400);
assert.equal((await post({ ...payload, website: "spam.example" })).status, 200);
// Only run the delivery-off assertion with an explicitly unconfigured test server.
if (process.env.TEST_DELIVERY_DISABLED === "true")
  assert.equal((await post(payload)).status, 503);
// Release unread error / HTML streams too, so a remote run doesn't keep TLS
// connections alive after its assertions. Do not log or download their contents.
await Promise.all(
  responses
    .filter((response) => response.body && !response.bodyUsed)
    .map((response) => response.body.cancel()),
);
console.log(
  "PASS API validation, origin, body limit and scanner fail-closed checks",
);
