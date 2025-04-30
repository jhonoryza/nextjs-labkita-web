export type ProductPricingProps = {
  plan: string;
  price: string;
};

export type ProductProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  features: Array<string>;
  pricing: Array<ProductPricingProps>;
  techStack: Array<string>;
  docs: string;
  policy_url: string | null;
  is_opensource: boolean;
};
