"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/styles/motionVariants";

export const MotionSection = ({ children, className = "" }) => {
  return (
    <motion.section
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};
