import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductProps } from "@/props/product";
import Image from "next/image";

export default function ProductList({ products }: { products: ProductProps[] }) {
  if (products.length === 0) return <div className="flex-grow flex items-center justify-center font-bold text-2xl p-20">Loading...</div>;
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-black text-foreground border-b-2 border-foreground pb-4 inline-block w-full">
          Our Products
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`products/${product.id}`}
              key={product.id}
              className="flex flex-col border-2 border-foreground bg-background shadow-neo hover:shadow-neo-lg transition-shadow"
            >
              <div className="relative h-72 border-b-2 border-foreground">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain min-h-72 p-4"
                />
                <div className="absolute inset-0 flex items-end">
                  <span className="p-3 font-bold text-foreground bg-secondary border-t-2 border-r-2 border-foreground">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4 p-6">
                <h2 className="text-xl font-bold text-foreground">
                  {product.name}
                </h2>
                <p className="text-foreground/70 font-medium">{product.description}</p>
                <Badge className="text-xs">
                  {product.is_opensource == true ? "open source" : "paid"}
                </Badge>
                <div className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}