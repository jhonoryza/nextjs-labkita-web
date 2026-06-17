import { ProductProps } from "@/props/product";
import { localProducts } from "./local-products";

export async function getProducts(): Promise<ProductProps[]> {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/products`);
    const json = await res.json();
    const apiProducts: ProductProps[] = json.data ?? [];
    return [...apiProducts, ...localProducts];
  } catch (err) {
    console.log(err);
    return localProducts;
  }
}

export function getLocalProduct(id: number): ProductProps | undefined {
  return localProducts.find((p) => p.id === id);
}
