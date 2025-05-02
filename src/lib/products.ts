import { ProductProps } from "@/props/product";

export async function getProducts(): Promise<ProductProps[]> {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/products`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
