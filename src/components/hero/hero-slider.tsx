"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ProductProps } from "@/props/product";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ProductShowcase({ products }: { products: ProductProps[] }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  if (products.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Our Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of software solutions we&apos;ve built
              </p>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={item}>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="group flex flex-col items-start text-left rounded-lg border bg-card/80 backdrop-blur-sm hover:shadow-lg hover:bg-card transition-all hover:cursor-pointer overflow-hidden w-full"
                  >
                    <div className="relative w-full h-48 bg-muted/50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 w-full">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogClose className="absolute top-4 right-4 z-10">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedProduct && (
            <>
              <div className="relative w-full h-64 sm:h-80 rounded-lg bg-muted overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground">
                {selectedProduct.description}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge>{selectedProduct.is_opensource ? "open source" : "paid"}</Badge>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {selectedProduct.category}
                </span>
              </div>
              <Link href={`/products/${selectedProduct.id}`}>
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}