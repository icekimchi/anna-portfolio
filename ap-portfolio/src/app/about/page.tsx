'use client';

import CustomCursor from "@/components/ui/CustomerCursor";
import Navbar from "@/components/common/Navbar";
import StickySection from "@/components/ui/StickySection";
import Footer from "@/components/common/Footer";
import { MotionSection } from "@/components/MotionSection";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <CustomCursor/>

      <Navbar />

      <MotionSection className="px-6 lg:px-24 pb-28">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          

          {/* Body: portrait + story */}
          <div className="mt-20 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            {/* Portrait — sticky on desktop */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src="/images/Anna-about.png"
                  alt="Anna Park"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story */}
            <div className="space-y-14">

              <div className="max-w-3xl">
                <h1 className="mt-5 text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                  Hi, I&apos;m Anna Park.
                </h1>
                <p className="mt-6 text-xl lg:text-2xl font-light text-neutral-500 leading-relaxed">
                  I build digital experiences end to end
                </p>
              </div>

              <section>
                <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Background
                </h2>
                <p className="text-lg leading-relaxed text-neutral-700">
                  I started in Information Systems in South Korea, studying 5G
                  networks, telecommunications, and software. During a software
                  engineering internship at ETRI — South Korea&apos;s leading
                  government-funded ICT research institute — I worked on an
                  existing app, finding its problems and reworking everything
                  from the design to the algorithms. That process is where I
                  fell for UI/UX: I realized I cared about the user&apos;s entire
                  digital experience, not just the code underneath it.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Now
                </h2>
                <p className="text-lg leading-relaxed text-neutral-700">
                  So I came to Canada and studied UI/UX at Cornerstone College,
                  turning that instinct into a craft. I&apos;m currently a
                  Product &amp; Service Designer at CareerMind in Vancouver,
                  where I lead end-to-end design for information-architecture
                  projects and turn complex technical concepts into accessible
                  learning materials for non-technical students.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                  Today I sit comfortably between design and engineering — I
                  design an experience, then I build it myself, which means it
                  survives the journey from Figma to production intact.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Approach
                </h2>
                <p className="text-lg leading-relaxed text-neutral-700">
                  As you can probably tell from this site, I have a soft spot
                  for clean design — considered typography, a restrained color
                  palette, and interactions that feel smooth rather than flashy.
                </p>
                <p className="mt-6 text-2xl font-light tracking-tight text-neutral-900">
                  The details are the point.
                </p>
              </section>

              <section className="border-t border-neutral-200 pt-10">
                <p className="text-lg text-neutral-700">
                  Currently looking for the right opportunity in design and
                  development.
                </p>
                
                  <a href="mailto:annapark0828@gmail.com"
                  className="mt-4 inline-block text-lg font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-500"
                >
                  Get in touch →
                </a>
              </section>
            </div>
          </div>
        </div>
      </MotionSection>

      <StickySection/>

      <Footer />
    </main>
  );
}
