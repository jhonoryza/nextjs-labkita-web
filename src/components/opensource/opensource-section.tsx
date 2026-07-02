import Link from "next/link";
import { ProductProps } from "@/props/product";

export default function OpenSourceSection({ products }: { products: ProductProps[] }) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Products
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl">
            Semua produk dan proyek open source dari Labkita
          </p>
        </div>
        <div className="divide-y divide-border/50">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex items-center justify-between gap-6 py-5 -mx-4 px-4 rounded-lg transition-colors hover:bg-muted/40"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  {product.is_opensource && (
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
                      open source
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {product.description}
                </p>
                <div className="text-xs text-muted-foreground/40 mt-1">
                  {product.techStack.join(" \u00B7 ")}
                </div>
              </div>
              <span className="shrink-0 text-muted-foreground/30 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all text-lg leading-none">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
