"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ProductProps } from "@/props/product";

export default function ProductShowcase({ products }: { products: ProductProps[] }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  if (products.length === 0) {
    return (
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-2xl">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            Our Products
          </h1>
          <p className="text-lg text-foreground/70 font-medium text-center mb-12 max-w-2xl mx-auto">
            Explore our collection of software solutions we&apos;ve built
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="flex flex-col items-start text-left border-2 border-foreground bg-background shadow-neo hover:shadow-neo-lg transition-shadow hover:cursor-pointer"
              >
                <div className="relative w-full h-48 border-b-2 border-foreground">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 w-full">
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/70 font-medium line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogClose className="absolute top-4 right-4 p-1 border-2 border-foreground bg-background hover:bg-muted transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedProduct && (
            <>
              <div className="relative w-full h-64 sm:h-80 border-2 border-foreground bg-muted">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-black">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <p className="text-foreground/70 font-medium">
                {selectedProduct.description}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge>{selectedProduct.is_opensource ? "open source" : "paid"}</Badge>
                <span className="px-3 py-1 bg-muted text-foreground font-bold border-2 border-foreground text-xs">
                  {selectedProduct.category}
                </span>
              </div>
              <Link
                href={`/products/${selectedProduct.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-neo-sm hover:shadow-neo transition-shadow"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}