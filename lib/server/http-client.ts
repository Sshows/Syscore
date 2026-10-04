import "server-only";
export class IntegrationError extends Error {
  constructor(
    public code: "configuration" | "timeout" | "upstream" | "response",
  ) {
    super("Integration unavailable");
  }
}
export function httpsEndpoint(value: string | undefined): URL {
  try {
    const url = new URL(value?.trim() || "");
    if (url.protocol !== "https:" || url.username || url.password)
      throw new Error();
    return url;
  } catch {
    throw new IntegrationError("configuration");
  }
}
export async function requestJson<T>(
  url: URL,
  init: RequestInit = {},
  options: { timeoutMs?: number; retries?: number; idempotent?: boolean } = {},
): Promise<T> {
  const attempts = options.idempotent
    ? Math.min(options.retries ?? 1, 2) + 1
    : 1;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      const response = await fetch(url, {
        ...init,
        redirect: "error",
        cache: "no-store",
        signal: AbortSignal.timeout(options.timeoutMs ?? 5000),
      });
      if (!response.ok) throw new IntegrationError("upstream");
      // Never include body, secret-bearing URL or upstream response text in an error.
      return (await response.json()) as T;
    } catch (error) {
      if (attempt + 1 < attempts) {
        await new Promise((resolve) =>
          setTimeout(resolve, 150 * (attempt + 1)),
        );
        continue;
      }
      if (error instanceof IntegrationError) throw error;
      if (
        error instanceof Error &&
        (error.name === "TimeoutError" || error.name === "AbortError")
      )
        throw new IntegrationError("timeout");
      throw new IntegrationError("response");
    }
  }
  throw new IntegrationError("upstream");
}
