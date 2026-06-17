import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";

const baseUrl = "https://labkita.my.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/engineers`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contacts`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/alquran`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/policies`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
