export default function robots() {
  const base = "https://gaberuseff.com";
  return {
    rules: [
      { userAgent: "*", allow: "/" }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}