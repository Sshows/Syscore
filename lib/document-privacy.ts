// Covers legacy direct files and image-optimizer URLs, without serving private bytes.
export function isRetiredDocumentPath(value: string) {
  let decoded = value;
  for (let i = 0; i < 3; i++) {
    try {
      const next = decodeURIComponent(decoded);
      if (next === decoded) break;
      decoded = next;
    } catch {
      break;
    }
  }
  try {
    const path = new URL(
      decoded,
      "https://local.invalid",
    ).pathname.toLowerCase();
    return path === "/certificates" || path.startsWith("/certificates/");
  } catch {
    return false;
  }
}
