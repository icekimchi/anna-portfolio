'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-stone-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl text-semibold">
            Anna
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Contact →
            </Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 border-t pt-6">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block border px-4 py-2 mt-2 w-fit"
                  onClick={() => setIsOpen(false)}
                >
                  Contact →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
