// import StatsSection from "@/components/stats-section";
import AppsSection from "@/components/apps/apps-section";
import OpenSourceSection from "@/components/opensource/opensource-section";
import CTASection from "@/components/cta-section";
import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex-grow">
      <AppsSection />
      <OpenSourceSection products={products} />
      {/*<StatsSection productCount={products.length} appsCount={6} />*/}
      <CTASection />
    </main>
  );
}
