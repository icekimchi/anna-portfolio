'use client';

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF0F4] text-gray-900">
      <Navbar />
        <motion.section
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-12"
        >
        <Hero />
        <hr className="border-t border-gray-300" />
        Selected Project
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-12">
          <ProjectCard
            title="E-commerce application"
            description="Integrated app that allows users to conveniently compare prices across multiple drugstores."
            slug="pricesnap"
            image="/images/pricesnap.png"
          />
          <ProjectCard
            title="AI Agent Application"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            slug="#"
            image=""
          />
          <ProjectCard
            title="Seoul Public Bicycle Visualization"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            slug="#"
            image=""
          />
          <ProjectCard
            title="Sejong City 119 Visualization"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            slug="#"
            image=""
          />
        </div>
      </motion.section>
    </main>
  );
}
