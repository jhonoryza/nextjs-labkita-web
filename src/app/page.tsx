import HeroSection from "@/components/hero/hero-section";
import AppsSection from "@/components/apps/apps-section";

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AppsSection />
    </main>
  );
}