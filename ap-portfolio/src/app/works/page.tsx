'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { projects } from "@/data/projects";
import SiteNav from "@/components/common/SiteNav";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Works() {
  return (
    <main
      className={`${roboto.className} relative min-h-screen bg-white text-neutral-900`}
    >
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:py-8">
        <SiteNav />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 md:mt-14"
        >
          <h1 className="text-5xl font-medium tracking-tight md:text-6xl">
            Works
          </h1>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            Explore my portfolio
          </p>
        </motion.div>

        {/* Project grid: 2 cols on mobile, 3 cols on desktop */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-14 md:grid-cols-3 md:gap-x-8 md:gap-y-12"
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-3 text-base font-medium md:text-lg">
                  {p.title}
                </h2>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 md:px-3 md:py-1 md:text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
                  {p.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
