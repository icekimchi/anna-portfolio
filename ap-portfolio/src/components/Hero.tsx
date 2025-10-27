"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex items-center text-gray-900 pt-60 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row items-between"
      >
        {/* left : little bit of myself */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-gray-900 text-3xl mb-6 py-3">
            Hi, I'm Anna.
            I'm a Software Developer who loves designing and creating
            thoughtful digital experiences.
            With a background in software engineering and UX,
            I aim to build digital products that make people’s lives easier.
          </h2>
          <SocialLinks />
        </div>
      </motion.div>
    </section>
  );
}
