"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

/* ---------- Scroll reveal primitives ---------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Image slot: renders the image when src is given, otherwise a labeled
   placeholder box so photos can be dropped in later. Reveals with a
   subtle scale-down as it enters the viewport.
   Without an explicit `aspect`, the image fills the column width and its
   height follows the photo's natural ratio (nothing gets cropped).
   Pass `aspect` to force a fixed box with a cover crop instead. */
export function CaseImage({
  src,
  alt,
  label,
  aspect,
}: {
  src?: string;
  alt?: string;
  label?: string;
  aspect?: string;
}) {
  if (src && !aspect) {
    return (
      <div className="w-full overflow-hidden rounded-xl">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={src}
            alt={alt ?? label ?? ""}
            width={1600}
            height={1000}
            sizes="(min-width: 768px) 66vw, 100vw"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-gray-100 ${
        aspect ?? "aspect-[16/10]"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        {src ? (
          <Image src={src} alt={alt ?? label ?? ""} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center border border-dashed border-gray-300 rounded-xl">
            <span className="px-4 text-center text-sm uppercase tracking-widest text-gray-400">
              {label ?? "Image"}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ---------- Section shell: sticky left rail + scrolling right column ---------- */

export interface SubNavItem {
  id: string;
  label: string;
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function CaseSection({
  title,
  subnav = [],
  children,
}: {
  title: string;
  subnav?: SubNavItem[];
  children: React.ReactNode;
}) {
  const active = useScrollSpy(subnav.map((s) => s.id));

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Sticky rail */}
          <div className="md:col-span-1">
            <div className="md:sticky md:top-28">
              <Reveal>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="block h-px w-10 bg-gray-600" />
                  <h2 className="text-xl uppercase tracking-wide">{title}</h2>
                </div>
              </Reveal>

              {subnav.length > 0 && (
                <Reveal delay={0.1}>
                  <ul className="mt-8 hidden space-y-3 md:block">
                    {subnav.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById(item.id)
                              ?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className={`flex items-center gap-3 text-sm transition-colors duration-300 ${
                            active === item.id
                              ? "font-medium text-gray-900"
                              : "text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          <span
                            className={`block h-px transition-all duration-300 ${
                              active === item.id ? "w-6 bg-gray-900" : "w-3 bg-gray-300"
                            }`}
                          />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-16 md:col-span-3">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function SubSection({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 space-y-6">
      {title && (
        <Reveal>
          <h3 className="text-2xl font-medium">{title}</h3>
        </Reveal>
      )}
      {children}
    </div>
  );
}

export function CaseParagraph({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="leading-relaxed text-gray-600">{children}</p>
    </Reveal>
  );
}

/* ---------- Quote / comment block ---------- */

export function CaseQuote({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <blockquote className="text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200" />
            <div>
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Related projects ---------- */

export function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  const related = projects
    .filter((p) => p.slug.toLowerCase() !== currentSlug.toLowerCase())
    .slice(0, 2);

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-3xl font-medium md:text-4xl">
            You might also like
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-xl font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{p.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
