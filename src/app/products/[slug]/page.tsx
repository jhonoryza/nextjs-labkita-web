import { ProductProps } from "@/props/product";
import ProductDetail from "@/components/product/product-detail";

async function getProduct(params: Promise<{ slug: string }>): Promise<ProductProps | undefined> {
    const { slug } = await params;
    const apiUrl = process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/products/${slug}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const product = await getProduct(params)
  
  if (product === undefined) return <div className="flex-grow">Loading...</div>;
  
  return <ProductDetail product={product} />;
}
