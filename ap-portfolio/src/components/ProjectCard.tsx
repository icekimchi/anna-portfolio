"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer group"
    >
      <Link
        href={`/projects/${slug}`}
        className="block rounded-xl overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-4 pb-2 px-5">
          <h3 className="text-gray-900 text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-2 line-clamp-2">
            {description}
          </p>
          <span className="text-blue-600 text-sm font-medium hover:underline">
            View Project →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
