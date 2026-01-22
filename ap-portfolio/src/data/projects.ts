export interface Project {
  title: string;
  role: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  skills: string[];
  tags: string[];
  team: string;
  contentComponent: string;
}

export const projects: Project[] = [
  {
    title: "PriceSnap",
    role: "UI/UX Designer",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "pricesnap",
    image: "/images/pricesnap/thumbnail.png",
    date: "June 2025 (4 weeks)",
    skills: ["Figma", "Prototyping"],
    contentComponent: "PriceSnapContent",
    team: "Personal",
    tags: ["UI DESIGN", "DESIGN SYSTEMS"]
  },
  {
    title: "The Black Bonds Redesign",
    role: "UX Design",
    description: "Redesign \"Black Bond Books\" website, where is a local, independent bookstore in the Vancouver",
    slug: "BlackBondBook",
    image: "/images/project2.png",
    date: "May 2025",
    skills: ["UX Design", "A/B Test", "Handoff"],
    contentComponent: "BlackBondBookContent",
    team: "5 UI/UX Designer",
    tags: ["REDESIGN", "UX DESIGN"]
  },
  {
    title: "The Valthakan Times",
    role: "Full Stack Developer",
    description: "Redesign client's Personal Newsletter page",
    slug: "The-Valthakan-Times",
    image: "/images/project3.png",
    date: "Oct ~ Nov 2025",
    skills: ["Figma", "Prototyping"],
    contentComponent: "TheValthakanTimesContent",
    team: "5 UI/UX Designer",
    tags: ["FULL PROCESS", "CLIENT PROJECT", "2025"]
  },
  {
    title: "Good City Transit Campaign",
    role: "Visual Branding",
    description: "Redesign client's Personal Newsletter page",
    slug: "Good-City-Transit-Campaign",
    image: "/images/project3.png",
    date: "Jan 2026",
    skills: ["Visual Branding", "Visual Identity"],
    contentComponent: "TheValthakanTimesContent",
    team: "Personal",
    tags: ["VISUAL IDENTITY", "BRAND DESIGN", "2026"]
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );
}

