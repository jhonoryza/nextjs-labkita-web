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
          className="mb-8 inline-flex items-center gap-2 font-bold text-foreground border-2 border-foreground px-4 py-2 bg-background shadow-neo-sm hover:shadow-neo transition-shadow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
        <div className="border-2 border-foreground bg-background shadow-neo">
          <div className="relative h-60 sm:h-150 border-b-2 border-foreground">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={true}
              sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
              className="object-contain mx-auto min-h-60 sm:min-h-150 p-4"
            />
          </div>
          <div className="p-8">
            <h1 className="mb-4 text-4xl font-black text-foreground border-b-2 border-foreground pb-4">
              {product.name}
            </h1>
            <p className="mb-8 text-xl text-foreground/70 font-medium">{product.description}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Installation</h2>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={product.docs}
                      target="_blank"
                      className="inline-flex px-4 py-2 bg-secondary text-secondary-foreground font-bold border-2 border-foreground shadow-neo-sm hover:shadow-neo transition-shadow"
                    >
                      Download Here
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold">Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 font-medium">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Badge className="text-xs">
                    {product.is_opensource == true ? "open source" : "paid"}
                  </Badge>
                  {product.policy_url && (
                    <Link
                      className="font-bold text-accent underline underline-offset-4 hover:text-accent/80"
                      href={product.policy_url}
                    >
                      privacy and policy
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Pricing</h2>
                <div className="space-y-4">
                  {product.pricing.map((price, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-2 border-foreground p-3 bg-background shadow-neo-sm font-bold"
                    >
                      <span>{price.plan}</span>
                      <span className="text-primary">{price.price}</span>
                    </div>
                  ))}
                </div>
                <h2 className="mt-8 mb-4 text-2xl font-bold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-foreground font-bold border-2 border-foreground text-sm"
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