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
        <div className="text-center">
          <h2 className="text-gray-900 text-3xl mb-6 py-3 leading-snug">
            Designer & Web Development working
            <br />
            With a background in software engineering and UX,
            <br />
            I aim to build digital products that make people&apos;s lives easier.
          </h2>
          <SocialLinks />
        </div>
      </motion.div>
    </section>

  );
}
