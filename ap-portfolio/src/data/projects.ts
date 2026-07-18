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
    title: "Sunglasses company landing page",
    role: "Webflow Development",
    description: "Modern Sunglasses company landing page design and development",
    slug: "KRYO",
    image: "/images/kryo/mainpage-ipad-mockup.png",
    date: "Oct ~ Nov 2026",
    skills: ["Webflow", "Figma"],
    contentComponent: "KryoContent",
    team: "Personal",
    tags: ["LANDING PAGE", "WEBFLOW", "2026"]
  },
  {
    title: "Painting Company Landing Page",
    role: "Webflow Development",
    description: "Vancouver based painting company landing page design and development",
    slug: "Probrush",
    image: "/images/probrush/mockup-mainpage.png",
    date: "Oct ~ Nov 2025",
    skills: ["Webflow", "Figma"],
    contentComponent: "ProBrushContent",
    team: "Personal",
    tags: ["LANDING PAGE", "WEBFLOW", "2025"]
  },
  {
    title: "The Valthakan Times",
    role: "Web Development",
    description: "Redesign client's Personal Newsletter page",
    slug: "The-Valthakan-Times",
    image: "/images/thevalthakantimes.png",
    date: "Oct ~ Nov 2025",
    skills: ["Next.js", "React", "Tailwind CSS"],
    contentComponent: "TheValthakanTimesContent",
    team: "5 UI/UX Designer",
    tags: ["FULL PROCESS", "CLIENT PROJECT", "2025"]
  },
  {
    title: "The Black Bond Book",
    role: "Website Redesign",
    description: "Vancouver local bookstore website redesign",
    slug: "The-Black-Bond-Book",
    image: "/images/project2.png",
    date: "Oct ~ Nov 2025",
    skills: ["Figma", "design systems"],
    contentComponent: "BlackBondBookContent",
    team: "Personal",
    tags: ["REDESIGN", "FIGMA", "2025"]
  },
  {
    title: "DayFlow - AI Schedule Management App",
    role: "UI/UX Design",
    description: "A productivity app that helps users manage their schedules and tasks more efficiently using AI.",
    slug: "DayFlow",
    image: "/images/thevalthakantimes.png",
    date: "Oct ~ Nov 2025",
    skills: ["Figma"],
    contentComponent: "DayFlowContent",
    team: "5 UI/UX Designer",
    tags: ["FULL PROCESS", "CLIENT PROJECT", "2025"]
  },
  {
    title: "PriceSnap",
    role: "UI/UX Design",
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
    title: "Good City Transit Campaign",
    role: "Visual Branding",
    description: "Redesign client's Personal Newsletter page",
    slug: "Good-City-Transit-Campaign",
    image: "/images/goodcitytransit.png",
    date: "Jan 2026",
    skills: ["Visual Branding", "Visual Identity"],
    contentComponent: "GoodCityTransitContent",
    team: "Personal",
    tags: ["VISUAL IDENTITY", "BRAND DESIGN", "2026"]
  },

];

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );
}

