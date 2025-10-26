'use client';

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
        <motion.section
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto py-12"
        >
        <hr className="border-t border-gray-300" />
        <h2 className="text-xl font-semibold mt-8">Selected Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-12">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              description={p.description}
              slug={p.slug}
              image={p.image}
            />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
