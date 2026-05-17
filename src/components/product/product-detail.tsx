import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ProductProps } from "@/props/product";

export default function ProductDetail({ product }: { product: ProductProps }) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <Link
          href={"/products"}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <div className="relative h-60 sm:h-96 bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={true}
              sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
              className="object-contain p-6"
            />
          </div>
          <div className="p-8">
            <h1 className="mb-3 text-3xl font-bold text-foreground">
              {product.name}
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">{product.description}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Installation</h2>
                  <a
                    href={product.docs}
                    target="_blank"
                    className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Download Here
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Badge className="text-xs w-fit">
                    {product.is_opensource == true ? "open source" : "paid"}
                  </Badge>
                  {product.policy_url && (
                    <Link
                      className="text-sm font-medium text-primary hover:underline"
                      href={product.policy_url}
                    >
                      privacy and policy
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Pricing</h2>
                <div className="space-y-2">
                  {product.pricing.map((price, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border rounded-lg p-3 bg-muted/50"
                    >
                      <span className="font-medium text-sm">{price.plan}</span>
                      <span className="text-primary font-semibold">{price.price}</span>
                    </div>
                  ))}
                </div>
                <h2 className="mt-6 mb-3 text-lg font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-1.5">
                  {product.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}