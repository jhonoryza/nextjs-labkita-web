import HeroSection from "@/components/hero/hero-section";
import StatsSection from "@/components/stats-section";
import AppsSection from "@/components/apps/apps-section";
import CTASection from "@/components/cta-section";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex-grow">
      <StatsSection productCount={products.length} appsCount={4} />
      <AppsSection />
      <HeroSection />
      <CTASection />
    </main>
  );
}
