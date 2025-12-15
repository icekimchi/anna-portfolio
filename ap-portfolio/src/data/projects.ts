export interface Project {
  title: string;
  role: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  skills: string[];
  contentComponent: string;
}

export const projects: Project[] = [
  {
    title: "PriceSnap",
    role: "UI/UX Designer",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "pricesnap",
    image: "/images/pricesnap/pricesnap.png",
    date: "June 2025 (4 weeks)",
    skills: ["Figma", "Prototyping"],
    contentComponent: "PriceSnapContent",
  },
  {
    title: "The Black Bonds Redesign",
    role: "UX Design",
    description: "Redesign \"Black Bond Books\" website, where is a local, independent bookstore in the Vancouver",
    slug: "BlackBondBook",
    image: "/images/project2.png",
    date: "May 2024 (3 months)",
    skills: ["UX Design", "A/B Test", "Handoff"],
    contentComponent: "BlackBondBookContent",
  },
  {
    title: "Portfolio Site",
    role: "Full Stack Developer",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "portfolio",
    image: "/images/project3.png",
    date: "June 2025",
    skills: ["Figma", "Prototyping"],
    contentComponent: "PriceSnapContent",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );
}

