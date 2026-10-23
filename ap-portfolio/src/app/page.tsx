'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const MAILTO = "mailto:annapark0828@gmail.com?subject=Hello%20Anna";

/* ---------- Page ---------- */

export default function Home() {
  return (
    <main
      className={`${roboto.className} relative flex h-[100svh] flex-col overflow-hidden bg-white md:flex-row`}
    >
      {/* Right: portrait photo */}
      <div className="relative order-1 h-[38svh] w-full shrink-0 md:order-2 md:h-full md:w-1/2">
        <Image
          src="/images/anna/profile.png"
          alt="Portrait of Anna Park"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Left: intro content */}
      <div className="relative z-10 order-2 flex flex-1 flex-col justify-between gap-3 overflow-hidden px-5 pb-3 pt-4 md:order-1 md:w-1/2 md:gap-8 md:px-12 md:py-10 lg:px-16">
        {/* Top row: brand + nav */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-bold uppercase tracking-[0.25em] text-white shadow-sm transition hover:bg-neutral-700"
          >
            Anna
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium uppercase tracking-wide text-neutral-600">
            <Link href="/about" className="transition hover:text-neutral-900">
              About
            </Link>
            <Link href="/works" className="transition hover:text-neutral-900">
              Works
            </Link>
          </nav>
        </div>

        {/* Hero text — vertically centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-1 flex-col justify-center"
        >
          <h1 className="font-sans text-3xl font-medium leading-[1.15] text-neutral-900 md:text-6xl">
            Anna Park
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-600 md:mt-5 md:text-lg">
            Vancouver-based, goal-driven multidisciplinary full-stack
            developer. I take web projects from the initial UI design all the
            way to backend API connections.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 md:mt-8">
            <a
              href={MAILTO}
              className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-700 md:px-6 md:py-3"
            >
              Let&apos;s talk →
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-100 md:px-6 md:py-3"
            >
              View resume
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between gap-4 rounded-lg bg-neutral-100 px-4 py-2.5 text-xs text-neutral-700 md:px-5 md:py-3 md:text-sm">
          <a
            href={MAILTO}
            className="truncate font-medium underline decoration-neutral-400 underline-offset-4 transition hover:decoration-neutral-900"
          >
            annapark0828@gmail.com
          </a>
          <a
            href={MAILTO}
            className="whitespace-nowrap font-medium uppercase tracking-wide transition hover:underline"
          >
            Let&apos;s chat →
          </a>
        </div>
      </div>
    </main>
  );
}
