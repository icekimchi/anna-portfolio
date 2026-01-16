'use client';

import Hero from "../components/common/Hero";
import Navbar from "../components/common/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Footer from "../components/common/Footer";
import CustomCursor from "@/components/ui/CustomerCursor";
import StickySection from "@/components/ui/StickySection";
import Link from "next/link";

const preloadProjectContent = (component: string) => {
  import(`@/components/project/${component}`);
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <CustomCursor/>
      <Navbar />
      <Hero />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto p-6 md:px-4 md:py-10"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 my-20">
          <div className="flex items-center gap-4">
            <span className="block w-12 h-px bg-gray-400" />
            <h2 className="text-2xl font-medium text-gray-600">
              Selected Works
            </h2>
          </div>

          <p className="max-w-xl text-right text-2xl text-bold leading-relaxed text-black">
            Discover curated works that inspire and deliver impact, showcasing
            creativity, functionality, and design excellence.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {projects.map((p) => (
            <div
              key={p.slug}
              onMouseEnter={() => preloadProjectContent(p.contentComponent)}
            >
              <Link
                href={`/projects/${p.slug}`}
                prefetch
                className="block h-full"
              >
                <ProjectCard
                  title={p.title}
                  role={p.role}
                  description={p.description}
                  slug={p.slug}
                  image={p.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      <StickySection/>

      <Footer />
    </main>
  );
}
