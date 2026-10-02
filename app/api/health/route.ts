export function GET() {
  return Response.json(
    { status: "ok", service: "syscore" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
