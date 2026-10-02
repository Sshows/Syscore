// The previous prototype was not safe against DNS rebinding.
// Fail closed until a separately audited, isolated scanner is available.
export function POST() {
  return Response.json(
    { error: "Публичный сканер отключён. Обсудите проверку с SYSCORE." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
