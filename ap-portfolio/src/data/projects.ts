export interface Project {
  title: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    title: "PriceSnap",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "pricesnap",
    image: "/images/pricesnap.png",
    date: "June 2025",
    skills: ["Figma", "Prototyping"],
  },
  {
    title: "Redesign BLACK BOND BOOKDS",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "weatherly",
    image: "/images/project2.png",
    date: "June 2025",
    skills: ["Figma", "Prototyping"],
  },
  {
    title: "Portfolio Site",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "portfolio",
    image: "/images/project3.png",
    date: "June 2025",
    skills: ["Figma", "Prototyping"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );
}

