import { leadDeliveryConfigured } from "@/lib/leads/config";
export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "syscore",
      intakeConfigured: leadDeliveryConfigured(),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
