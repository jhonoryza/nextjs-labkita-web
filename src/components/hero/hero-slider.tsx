"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProductProps } from "@/props/product";

export default function HeroSlider({ products }: { products: ProductProps[] }) {
  const [currentProduct, setCurrentProduct] = useState(0);

  if (products.length === 0) return <div className="flex-grow flex items-center justify-center font-bold text-2xl p-20">Loading...</div>;

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const product = products[currentProduct];

  return (
    <section className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-foreground">
              {product.name}
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg font-medium">
              {product.description}
            </p>
            <div className="hidden flex-col sm:flex-row gap-4 sm:flex">
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-neo hover:shadow-neo-sm transition-shadow"
              >
                Learn More
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-bold border-2 border-foreground shadow-neo hover:shadow-neo-sm transition-shadow"
              >
                View All Products
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex flex-col gap-4">
            <div className="relative flex justify-center h-72 w-72 sm:w-full mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                priority={true}
                fill
                sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                className="border-2 border-foreground shadow-neo object-contain min-h-72 w-fit bg-background p-4"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <button
                  onClick={prevProduct}
                  className="p-2 border-2 border-foreground bg-background shadow-neo-sm hover:shadow-neo transition-shadow hover:cursor-pointer"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                <button
                  onClick={nextProduct}
                  className="p-2 border-2 border-foreground bg-background shadow-neo-sm hover:shadow-neo transition-shadow hover:cursor-pointer"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:hidden">
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-neo hover:shadow-neo-sm transition-shadow"
              >
                Learn More
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-bold border-2 border-foreground shadow-neo hover:shadow-neo-sm transition-shadow"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}