type PortfolioProps = {
  id: number;
  year: number;
  title: string;
  description: string;
  image: string;
  state: string;
  stacks: Array<string>;
  link: string;
};

export type ProfileProps = {
  id: number;
  name: string;
  role: string;
  image: string;
  skills: Array<string>;
  bio: string;
  education: string;
  projectsCount: number;
  social: Array<string>;
  projects: Array<PortfolioProps>;
};
