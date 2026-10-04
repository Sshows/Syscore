import "server-only";
import { createHmac } from "node:crypto";
import {
  httpsEndpoint,
  requestJson,
  IntegrationError,
} from "@/lib/server/http-client";
export { leadDeliveryConfigured } from "./config";
export async function allowLead(ip: string) {
  const key =
    "syscore:leads:" +
    createHmac("sha256", process.env.RATE_LIMIT_SALT!).update(ip).digest("hex");
  const script =
    "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n";
  const data = await requestJson<{ result?: number; error?: string }>(
    httpsEndpoint(process.env.RATE_LIMIT_REDIS_URL),
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RATE_LIMIT_REDIS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["EVAL", script, "1", key]),
    },
  );
  if (data.error || typeof data.result !== "number")
    throw new IntegrationError("response");
  return data.result <= 5;
}
