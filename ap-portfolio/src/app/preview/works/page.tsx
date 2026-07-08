'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { projects } from "@/data/projects";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function WorksPreview() {
  return (
    <main
      className={`${roboto.className} relative -mt-[72px] min-h-screen bg-white text-neutral-900`}
    >
      {/* Preview-only: hide the global fixed navbar */}
      <style>{`header { display: none !important; }`}</style>

      <div className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:py-8">
        {/* Navigation bar */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-4 z-50 flex w-fit items-center gap-4 rounded-lg border border-neutral-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md md:top-6 md:gap-6"
        >
          <Link
            href="/preview"
            className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-900"
          >
            Anna
          </Link>
          <span aria-hidden className="h-4 w-px bg-neutral-200" />
          <Link
            href="/preview"
            className="text-xs font-medium uppercase tracking-widest text-neutral-500 transition hover:text-neutral-900"
          >
            Home
          </Link>
          <Link
            href="/preview/works"
            className="text-xs font-medium uppercase tracking-widest text-neutral-900"
          >
            Works
          </Link>
          <Link
            href="/about"
            className="text-xs font-medium uppercase tracking-widest text-neutral-500 transition hover:text-neutral-900"
          >
            About
          </Link>
        </motion.nav>

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
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-500">
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
