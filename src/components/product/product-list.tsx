import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductProps } from "@/props/product";
import Image from "next/image";

export default function ProductList({ products }: { products: ProductProps[] }) {
  if (products.length === 0) return <div className="flex-grow">Loading...</div>;
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-center text-4xl font-bold text-transparent">
          Our Products
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`products/${product.id}`}
              key={product.id}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md hover:opacity-90"
            >
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover min-h-72"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                  <span className="p-4 font-medium text-white">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="z-30 flex h-full flex-col justify-between gap-4 bg-white p-6 opacity-90">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.description}</p>
                <Badge className="text-white">
                  {product.is_opensource == true ? "open source" : "paid"}
                </Badge>
                <div className="inline-flex items-center font-medium text-green-600 transition hover:text-green-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
