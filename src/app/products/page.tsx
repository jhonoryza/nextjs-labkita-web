import ProductList from "@/components/product/product-list";
import { getProducts } from "@/lib/products";

export default async function Products() {
    const products = await getProducts();
    return <ProductList products={products} />;
}
