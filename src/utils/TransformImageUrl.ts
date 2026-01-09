export function transformImageUrl(url?: string) {
  if (!url) return "";

  return url
    .replace("https://assets.suitdev.com", "https://suitmedia.static-assets.id")
    .replace("-small.", "-medium.");
}
