import ProductList from "@/components/product/product-list";
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

export default async function Products() {
    const products = await getProducts();
    return <ProductList products={products} />;
}
