import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductProps } from "@/props/product";
import Image from "next/image";

export default function ProductList({ products }: { products: ProductProps[] }) {
  if (products.length === 0) return <div className="flex-grow flex items-center justify-center text-muted-foreground p-20">Loading...</div>;
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-foreground">
          Our Products
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`products/${product.id}`}
              key={product.id}
              className="group flex flex-col rounded-lg border bg-card shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="relative h-48 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex h-full flex-col justify-between gap-3 p-5">
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <p className="text-muted-foreground text-sm">{product.description}</p>
                <Badge className="text-xs w-fit">
                  {product.is_opensource == true ? "open source" : "paid"}
                </Badge>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}