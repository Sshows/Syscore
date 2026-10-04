import { cp, access } from "node:fs/promises";
import { join } from "node:path";
import { spawn } from "node:child_process";
const root = process.cwd(),
  destination = join(root, ".next", "standalone");
try {
  await access(join(destination, "server.js"));
} catch {
  console.error("Production build missing. Run npm run build first.");
  process.exit(1);
}
await Promise.all([
  cp(join(root, "public"), join(destination, "public"), { recursive: true }),
  cp(join(root, ".next", "static"), join(destination, ".next", "static"), {
    recursive: true,
  }),
]);
const child = spawn(process.execPath, [join(destination, "server.js")], {
  cwd: destination,
  stdio: "inherit",
  env: {
    ...process.env,
    HOSTNAME: process.env.HOSTNAME || "127.0.0.1",
    PORT: process.env.PORT || "3000",
  },
});
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 1));
