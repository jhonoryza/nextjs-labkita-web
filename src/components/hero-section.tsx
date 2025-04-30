"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProductProps } from "@/props/product";

export default function HeroSection() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const products = await res.json();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

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
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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

          <div className="md:w-1/2 relative">
            <div className="relative flex justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-2xl shadow-xl object-contain"
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
          </div>
        </div>
      </div>
    </section>
  );
}
