"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto text-gray-900 pt-50 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="text-center items-center">
          <h2 className="text-gray-900 text-3xl mb-6 px-3 leading-snug">
            I aim to build digital products that make people’s lives easier and more meaningful.
            <br />
            Designer & Web Developer focused on usability and clarity.
            <br />
            Background in software engineering and UI/UX.
          </h2>
          <SocialLinks />
        </div>
      </motion.div>
    </section>

  );
}
