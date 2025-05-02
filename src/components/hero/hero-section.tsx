import { getProducts } from "@/lib/products";
import HeroSlider from "./hero-slider";

export default async function HeroSection() {
  const products = await getProducts();

  return <HeroSlider products={products} />;
}