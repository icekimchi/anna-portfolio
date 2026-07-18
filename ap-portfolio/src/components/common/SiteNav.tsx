"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

/* Pill navigation extracted from the Works page. Highlights the link
   matching the current route. Place it as a direct child of the page's
   tall root element so `sticky` follows the whole scroll. */
export default function SiteNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-4 z-50 flex w-fit items-center gap-4 rounded-lg border border-neutral-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md md:top-6 md:gap-6 ${className}`}
    >
      <Link
        href="/"
        className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-900"
      >
        Anna
      </Link>
      <span aria-hidden className="h-4 w-px bg-neutral-200" />
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-xs font-medium uppercase tracking-widest transition ${
            isActive(link.href)
              ? "text-neutral-900"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  );
}
