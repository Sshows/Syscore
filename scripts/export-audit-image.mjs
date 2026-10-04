import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";
const audit = JSON.parse(
  await readFile(process.argv[2] || "tmp/lighthouse-mobile-final.json", "utf8"),
);
const data = audit.audits["final-screenshot"].details.data;
if (!data.startsWith("data:image/jpeg;base64,"))
  throw new Error("Unexpected screenshot format");
const output = resolve(process.argv[3] || "tmp/preview");
await mkdir(output, { recursive: true });
const target = join(output, "SYSCORE-mobile.jpg");
await writeFile(target, Buffer.from(data.split(",")[1], "base64"));
console.log(target);
