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

/* ---------- Background: bright pastel 3D-glass scene ---------- */

function GlassOrb({
  tint,
  className,
  delay = 0,
  duration = 7,
}: {
  tint: string;
  className: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -18, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className}`}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 24%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 6%, ${tint}66 30%, ${tint} 68%, ${tint}f2 100%)`,
          boxShadow:
            "inset -16px -20px 30px rgba(255,255,255,0.6), inset 12px 16px 20px rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.4), 0 30px 40px -10px rgba(70,100,150,0.35)",
        }}
      />
      {/* tight specular highlight */}
      <div
        className="absolute left-[20%] top-[16%] h-[22%] w-[22%] rounded-full bg-white"
        style={{ filter: "blur(2px)", opacity: 0.95 }}
      />
      {/* contact shadow grounding the object */}
      <div
        className="absolute left-1/2 top-full h-[18%] w-[70%] -translate-x-1/2 rounded-full bg-[#5b7ba8]"
        style={{ filter: "blur(10px)", opacity: 0.25, marginTop: "-4%" }}
      />
    </motion.div>
  );
}

function GlassRing({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className}`}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "conic-gradient(from 210deg, rgba(255,255,255,1) 0deg, rgba(210,228,250,0.85) 60deg, rgba(148,184,234,0.95) 160deg, rgba(210,228,250,0.85) 260deg, rgba(255,255,255,1) 360deg)",
          WebkitMask: "radial-gradient(circle, transparent 50%, black 54%)",
          mask: "radial-gradient(circle, transparent 50%, black 54%)",
          boxShadow: "0 24px 36px -8px rgba(70,100,150,0.3)",
        }}
      />
      <div
        className="absolute left-1/2 top-full h-[16%] w-[80%] -translate-x-1/2 rounded-full bg-[#5b7ba8]"
        style={{ filter: "blur(10px)", opacity: 0.2, marginTop: "-6%" }}
      />
    </motion.div>
  );
}

function GlassHex({
  tint,
  className,
  delay = 0,
}: {
  tint: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -16, 0], rotate: [0, -6, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${className}`}
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: `radial-gradient(circle at 32% 24%, rgba(255,255,255,0.95) 0%, ${tint}55 35%, ${tint} 75%)`,
        boxShadow:
          "inset -10px -12px 20px rgba(255,255,255,0.5), inset 8px 10px 16px rgba(255,255,255,0.25)",
      }}
    />
  );
}

function Background() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, #b7d5f6 0%, #a3c3ee 30%, #bcd6f4 62%, #dcebfa 100%)",
      }}
    >
      {/* soft color washes, kept subtle so objects stay crisp */}
      <div className="absolute left-1/2 top-[20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#e6d7f6] opacity-35 blur-[100px]" />
      <div className="absolute left-1/2 bottom-[10%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#f6dccf] opacity-30 blur-[110px]" />

      {/* floating glass / ceramic objects, clustered center */}
      <GlassRing className="left-[44%] top-[16%] h-32 w-32 md:left-[45%] md:top-[14%] md:h-48 md:w-48" delay={0.2} />
      <GlassOrb tint="#c9b4ef" className="left-[36%] top-[38%] h-24 w-24 md:h-36 md:w-36" delay={0.5} duration={8} />
      <GlassHex tint="#a9cdf4" className="right-[36%] top-[30%] h-20 w-20 md:h-28 md:w-28" delay={1} />
      <GlassOrb tint="#f2c4ae" className="left-[52%] top-[46%] hidden h-16 w-16 md:block" delay={1.4} duration={6.5} />
      <GlassOrb tint="#b8e4cd" className="right-[38%] bottom-[24%] h-16 w-16 md:h-28 md:w-28" delay={0.8} duration={9} />
      <GlassOrb tint="#f4d9b8" className="left-[47%] bottom-[16%] hidden h-14 w-14 md:block" delay={2} duration={7} />

      {/* floor glow to ground the whole cluster */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/40 to-transparent" />
    </div>
  );
}

/* ---------- Top-right navigation cards ---------- */

function NavCard({
  href,
  label,
  img,
  alt,
}: {
  href: string;
  label: string;
  img: string;
  alt: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-white/60 p-3 shadow-[0_12px_32px_rgba(90,120,170,0.18)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/80 group-hover:shadow-[0_18px_44px_rgba(90,120,170,0.28)]">
        <div className="flex flex-col justify-between">
          <span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-neutral-900 shadow-sm">
            {label}
          </span>
          <span
            aria-hidden
            className="pl-1 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
          >
            →
          </span>
        </div>
        <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-neutral-100 md:h-28 md:w-36">
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(min-width: 768px) 144px, 112px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <main
      className={`${roboto.className} relative flex min-h-[100svh] flex-col overflow-hidden`}
    >
      <Background />

      <div className="relative z-10 flex flex-1 flex-col gap-6 px-5 pb-5 pt-6 md:gap-8 md:px-8 md:pt-8">
        {/* Top row: email (left) + cards (right) */}
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="rounded-lg bg-white/85 px-4 py-2.5 text-sm font-bold uppercase tracking-[0.25em] text-neutral-900 shadow-[0_10px_28px_rgba(90,120,170,0.25)] backdrop-blur-md transition hover:bg-white"
            >
              Anna
            </Link>
            <a
              href={MAILTO}
              className="w-fit text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition hover:decoration-white"
            >
              annapark0828@gmail.com
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="flex w-full flex-col gap-4 md:w-[400px]"
          >
            <NavCard
              href="/about"
              label="About me"
              img="/images/profile.png"
              alt="Portrait of Anna Park"
            />
            <NavCard
              href="/works"
              label="Works"
              img="/images/pricesnap/thumbnail.png"
              alt="PriceSnap project thumbnail"
            />
          </motion.div>
        </div>

        {/* Hero — vertically centered on desktop, lower block on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex max-w-2xl flex-1 flex-col justify-end md:absolute md:left-8 md:top-[20%] md:flex-none md:justify-start"
        >
          <h1 className="text-4xl font-medium leading-[1.15] text-white [text-shadow:0_2px_28px_rgba(70,100,150,0.35)] md:text-6xl">
            Hi, I&apos;m Anna.
            <br />
            I design and build websites.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 md:text-base">
            Product designer &amp; front-end developer based in Vancouver,
            crafting bright, thoughtful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAILTO}
              className="rounded-lg bg-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-neutral-900 shadow-[0_10px_28px_rgba(90,120,170,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(90,120,170,0.4)]"
            >
              Let&apos;s talk →
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/70 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              View resume
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between gap-4 rounded-lg bg-white/65 px-5 py-3 text-xs text-neutral-800 backdrop-blur-md md:mt-auto md:text-sm">
          <span className="uppercase tracking-wide">
            Thank you for visiting my portfolio
          </span>
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
