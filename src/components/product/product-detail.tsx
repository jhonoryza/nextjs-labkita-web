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
          className="mb-8 inline-flex items-center font-medium text-green-600 transition hover:text-green-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="relative h-60 sm:h-150">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={true}
              sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
              className="object-contain mx-auto min-h-60 sm:min-h-150"
            />
          </div>
          <div className="p-8">
            <h1 className="mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent">
              {product.name}
            </h1>
            <p className="mb-8 text-xl text-gray-600">{product.description}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-semibold">Installation</h2>
                  <div className="flex flex-wrap gap-2">
                    <a href={product.docs} target="_blank">
                      <span className="rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 hover:bg-green-200">
                        Download Here
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Badge className="text-white">
                    {product.is_opensource == true ? "open source" : "paid"}
                  </Badge>
                  {product.policy_url && (
                    <Link
                      className="hover:text-primary mb-4 text-sky-600 underline"
                      href={product.policy_url}
                    >
                      privacy and policy
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold">Pricing</h2>
                <div className="space-y-4">
                  {product.pricing.map((price, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-200 pb-2"
                    >
                      <span className="font-medium">{price.plan}</span>
                      <span className="text-green-600">{price.price}</span>
                    </div>
                  ))}
                </div>
                <h2 className="mt-8 mb-4 text-2xl font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800"
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
