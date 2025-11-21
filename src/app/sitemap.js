import { getWorks } from "./_services/data-service";

export default async function sitemap() {
  const base = "https://gaberuseff.com";

  const staticRoutes = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/certificates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];

  let dynamicRoutes = [];
  try {
    const works = await getWorks();
    dynamicRoutes = works.map((w) => ({
      url: `${base}/projects/${w.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch {
    dynamicRoutes = [];
  }

  return [...staticRoutes, ...dynamicRoutes];
}