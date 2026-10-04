import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
const require = createRequire(import.meta.url);
// Compile the actual source in-memory. No fixtures are sent to external services.
async function load(path, overrides = {}, env = {}) {
  const source = await readFile(path, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const testModule = { exports: {} };
  vm.runInNewContext(compiled, {
    module: testModule,
    exports: testModule.exports,
    process: { env },
    console,
    URL,
    URLSearchParams,
    AbortSignal,
    setTimeout,
    require: (name) =>
      name === "server-only" ? {} : (overrides[name] ?? require(name)),
  });
  return testModule.exports;
}
const { leadSchema } = await load("lib/leads/schema.ts");
const { certificates } = await load("content/certificates.ts");
assert.equal(certificates.length, 11);
for (const item of certificates) {
  assert.ok(item.title && item.issuer && item.year);
  assert.ok(
    (await readFile("public/certificates/" + item.pdf)).byteLength > 100,
  );
  assert.ok(
    (await readFile("public/certificates/" + item.image)).byteLength > 100,
  );
}
const lead = {
  name: "Test\u0000 User",
  phone: "+77000000000",
  topic: "osint",
  message: "\u0000Example",
  consent: true,
  website: "",
  captchaToken: "local-fixture",
};
const parsed = leadSchema.parse(lead);
assert.equal(parsed.name, "Test  User");
assert.equal(parsed.message, "Example");
for (const extra of [
  { password: "x" },
  { files: [] },
  { consent: false },
  { phone: "bad" },
  { captchaToken: "" },
  { topic: "unknown" },
])
  assert.equal(leadSchema.safeParse({ ...lead, ...extra }).success, false);
let deliveries = [];
let allowed = true,
  verification = {
    success: true,
    action: "contact",
    hostname: "fixture.example",
  };
class IntegrationError extends Error {}
const { acceptLead } = await load(
  "lib/leads/service.ts",
  {
    "./delivery": { allowLead: async () => allowed },
    "./adapters": {
      leadAdapter: () => ({
        deliver: async (value, id) => deliveries.push({ value, id }),
      }),
    },
    "@/lib/server/http-client": {
      requestJson: async () => verification,
      IntegrationError,
    },
  },
  {
    TURNSTILE_SECRET_KEY: "fixture",
    TURNSTILE_EXPECTED_HOSTNAME: "fixture.example",
  },
);
assert.equal(await acceptLead(parsed, "fixture", "test-1"), "accepted");
assert.equal(deliveries.length, 1);
assert.equal("captchaToken" in deliveries[0].value, false);
assert.equal("website" in deliveries[0].value, false);
allowed = false;
assert.equal(await acceptLead(parsed, "fixture", "test-2"), "limited");
assert.equal(deliveries.length, 1);
allowed = true;
verification = { success: false };
assert.equal(await acceptLead(parsed, "fixture", "test-3"), "captcha");
verification = { success: true, action: "other", hostname: "fixture.example" };
assert.equal(await acceptLead(parsed, "fixture", "test-4"), "captcha");
verification = {
  success: true,
  action: "contact",
  hostname: "untrusted.example",
};
assert.equal(await acceptLead(parsed, "fixture", "test-5"), "captcha");
assert.equal(deliveries.length, 1);
const { resolveSiteUrl } = await load("config/site.ts");
for (const input of ["", " ", "invalid", "javascript:alert(1)"])
  assert.equal(resolveSiteUrl(input), "https://syscore-blond.vercel.app");
assert.equal(
  resolveSiteUrl(" https://example.com/path "),
  "https://example.com",
);
const lum = (hex) => {
  const rgb = hex
    .match(/\w\w/g)
    .map((value) => parseInt(value, 16) / 255)
    .map((n) => (n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};
for (const pair of [
  ["EAF2FF", "0A1020"],
  ["A6B7D0", "17243B"],
  ["FFB224", "0A1020"],
  ["0A1020", "FFB224"],
]) {
  const [a, b] = pair.map(lum);
  const contrast = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  assert.ok(contrast >= 4.5);
  console.log(`PASS contrast ${pair.join("/")} ${contrast.toFixed(2)}:1`);
}
console.log(
  "PASS schema, sanitization, service branches, captcha boundaries, URL fallback; no external delivery",
);
