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
  liveUrl?: string;
}

export const projects: Project[] = [
   {
    title: "The Valthakan Times - Full Stack Development",
    role: "Lead Developer & UI/UX Designer",
    description: "Redesigned and hand-coded a client's newsletter site, migrating it off Beehiiv's templates onto a custom Next.js build powered by the Beehiiv API",
    slug: "The-Valthakan-Times",
    image: "/images/thevalthakantimes.png",
    date: "3-week sprint · 2025",
    skills: ["HeadlessCMS", "Next.js", "Typescript", "Tailwind CSS", "Beehiiv API"],
    contentComponent: "TheValthakanTimesContent",
    team: "3 UI/UX Designers + 1 Developer (me)",
    tags: ["FULL PROCESS", "CLIENT PROJECT", "2025"],
    liveUrl: "https://the-valthakan-times.vercel.app/"
  },
  {
    title: "KRYO - Luxury Sunglasses",
    role: "Webflow Developer",
    description: "Modern Sunglasses company landing page design and development",
    slug: "KRYO",
    image: "/images/kryo/mainpage-ipad-mockup.png",
    date: "Oct ~ Nov 2026",
    skills: ["CMS", "E-Commerce", "ScalableDesign"],
    contentComponent: "KryoContent",
    team: "Personal",
    tags: ["CMS", "E-commerce", "ScalableDesign"],
    liveUrl: "https://kryo-anna.webflow.io/"
  },
  {
    title: "DayFlow - AI Schedule Management App",
    role: "UI/UX Designer",
    description: "A productivity app that helps users manage their schedules and tasks more efficiently using AI.",
    slug: "DayFlow",
    image: "/images/decode/decode-onboarding.png",
    date: "Oct ~ Nov 2025",
    skills: ["React Native", "TypeScript", "Figma"],
    contentComponent: "DayFlowContent",
    team: "2 UI/UX Designers + 2 Developers",
    tags: ["FULL PROCESS", "2025"]
  },
  {
    title: "Probrush - Painting Company based in Vancouver",
    role: "Webflow Developer",
    description: "Vancouver based painting company landing page design and development",
    slug: "Probrush",
    image: "/images/probrush/mockup-mainpage.png",
    date: "Oct ~ Nov 2025",
    skills: ["LandingPage", "Webflow", "ConversionFocused"],
    contentComponent: "ProBrushContent",
    team: "Personal",
    tags: ["LandingPage", "ConversionFocused", "ResponsiveDesign"],
    liveUrl: "https://probrush.webflow.io/"
  },
  {
    title: "PriceSnap",
    role: "UI/UX Designer",
    description: "Integrated app that allows users to conveniently compare prices across multiple drugstores in Vancouver.",
    slug: "pricesnap",
    image: "/images/pricesnap/thumbnail.png",
    date: "June 2025 (4 weeks)",
    skills: ["App Design", "Prototyping"],
    contentComponent: "PriceSnapContent",
    team: "Personal",
    tags: ["UI DESIGN", "DESIGN SYSTEMS"]
  },
  {
    title: "Good City Transit Campaign",
    role: "Product  Designer",
    description: "Good City Transit explores everyday manners and small actions that create a more respectful, shared urban experience.",
    slug: "Good-City-Transit-Campaign",
    image: "/images/goodcitytransit.png",
    date: "Jan 2026",
    skills: ["Figma","Visual Branding", "Visual Identity"],
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

