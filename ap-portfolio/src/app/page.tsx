'use client';

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF0F4] text-gray-900">
      <Navbar />
      <Hero />
        <motion.section
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-12"
        >
        <hr className="border-t border-gray-300" />
        Selected Project
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-12">
          <ProjectCard
            title="Camping Site Search Application"
            description="Integrated app that allows users to conveniently compare prices across multiple drugstores."
            link="#"
            image=""
          />
          <ProjectCard
            title="AI Agent Application"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
          <ProjectCard
            title="Seoul Public Bicycle Visualization"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
          <ProjectCard
            title="Sejong City 119 Visualization"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
        </div>
      </motion.section>
    </main>
  );
}
