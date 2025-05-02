"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProductProps } from "@/props/product";

export default function HeroSlider({ products }: { products: ProductProps[] }) {
  const [currentProduct, setCurrentProduct] = useState(0);

  if (products.length === 0) return <div>Loading...</div>;

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const product = products[currentProduct];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center sm:text-start">
              {product.name}
            </h1>
            <div className="hidden flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Link
                href={`/products/${product.id}`}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:shadow-lg transition text-center"
              >
                Learn More
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg border border-green-200 text-green-600 font-medium hover:bg-green-50 transition text-center"
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
                className="rounded-2xl shadow-xl object-contain min-h-72 w-fit"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <button
                  onClick={prevProduct}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-green-100 transition hover:cursor-pointer"
                >
                  <ArrowLeft className="h-6 w-6 text-green-600" />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                <button
                  onClick={nextProduct}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-green-100 transition hover:cursor-pointer"
                >
                  <ArrowRight className="h-6 w-6 text-green-600" />
                </button>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:hidden">
              <Link
                href={`/products/${product.id}`}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:shadow-lg transition text-center"
              >
                Learn More
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg border border-green-200 text-green-600 font-medium hover:bg-green-50 transition text-center"
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
