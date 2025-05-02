import { getProducts } from "@/app/products/page";
import HeroSlider from "./hero-slider";

export default async function HeroSection() {
  const products = await getProducts();

  return <HeroSlider products={products} />;
}