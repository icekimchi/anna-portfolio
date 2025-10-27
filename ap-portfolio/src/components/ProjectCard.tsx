"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  slug: string;
  image: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group">
    {/* Image */}
    <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-gray-300 bg-gray-100">
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
      <div className="pt-4 pb-2 px-1">
        <p className="text-gray-700 font-sans">{role}</p>
        <h3 className="text-gray-900 text-2xl font-semibold py-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-black font-sans leading-relaxed mb-2 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>  
  );
}
