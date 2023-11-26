import { NAV_ITEMS } from "@/constants";

export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

export type NavItem = {
  name: (typeof NAV_ITEMS)[number]["name"];
  path: string;
};

export type NavItems = Expand<NavItem>[];

export type Experience = {
  companyName: string;
  position: string;
  roleType: "Full Time" | "Intern" | "Part time";
  startDate: Date;
  endDate: Date;
  description: string;
  points: { title?: string; description: string }[];
};

export type Project = {
  name: string;
  description: string;
  imageURL: string;
  overlayImageURL: string;
  technologies: string[];
};

type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "fullstack"
  | "language"
  | "cloud"
  | "versionControl";

export type Skill = {
  name: string;
  category: SkillCategory;
  skillLevel: number;
};
