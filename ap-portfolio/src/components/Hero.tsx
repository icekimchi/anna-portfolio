"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-white text-gray-900 p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row items-center gap-8"
      >
        {/* left : little bit of myself */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-8xl font-bold mb-6">Anna Park</h1>
          <p className="text-lg mb-8 text-gray-700">
            Hi! I’m Anna — a Software Engineer who loves designing and creating
            thoughtful digital experiences.
          </p>
          <SocialLinks />
        </div>

        {/* right: my photo */}
        <div className="w-full md:w-2/5 flex justify-center">
          <Image
            src="/images/profile.png"
            alt="Anna Park Profile"
            width={400}
            height={400}
            className="rounded-2xl object-cover max-w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
