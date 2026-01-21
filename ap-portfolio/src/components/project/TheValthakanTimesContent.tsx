"use client"

import { MotionSection } from "@/components/MotionSection";
import Image from "next/image";

export default function TheValthakanTimesContent() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 1. Project Overview & Tech Stack */}
      <MotionSection className="px-6 py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 text-slate-500 mb-8">
            <span className="block w-12 h-px bg-slate-400" />
            <h3 className="uppercase tracking-widest text-sm font-bold">Project Overview</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-4xl font-bold leading-tight mb-6">
                Redesigning the Fantasy Digital Experience for Daniel Alexander
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Redesign and development of a content-driven platform with over 1.7M+ monthly social media reach. 
                The project focused on transforming high engagement into sustainable revenue by optimizing conversion paths 
                for Patreon and newsletter subscriptions.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Next.js (App Router)', 'React', 'TailwindCSS', 'Figma'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/*  */}
              <Image 
                src="/images/project-hero.png" 
                alt="Project Hero Thumbnail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 2. Key Challenges & Solutions (Problem-Solving) */}
      <MotionSection className="px-6 py-24 bg-slate-50 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 text-slate-500 mb-16">
            <span className="block w-12 h-px bg-slate-400" />
            <h3 className="uppercase tracking-widest text-sm font-bold">The Challenges & Solutions</h3>
          </div>

          <div className="space-y-32">
            {/* Challenge 1: Architecture */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <Image src="/images/thevalthakantimes/ia-structure.png" alt="Information Architecture" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">01. Architecture</span>
                <h4 className="text-3xl font-bold mt-2 mb-4">Content Prioritization</h4>
                <p className="text-slate-600 mb-6">
                  The existing site suffered from confusing navigation, leading to high churn. I reorganized the IA to prioritize 
                  high-value assets like the <strong>"Dear Crone"</strong> advice column, ensuring the sites biggest reader draw is front and center.
                </p>
              </div>
            </div>

            {/* Challenge 2: Mobile Optimization (Adaptive Nav) */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">02. Mobile-First Approach</span>
                <h4 className="text-3xl font-bold mt-2 mb-4">Adaptive Navigation System</h4>
                <p className="text-slate-600 mb-6">
                  With over 80% of traffic coming from mobile social platforms, I developed an <strong>Adaptive Navigation System</strong>. 
                  Instead of basic scaling, I built distinct structures for mobile and desktop to ensure seamless, thumb-friendly interactions.
                </p>
              </div>
              <div className="relative aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-xl border-[8px] border-slate-900">
                {/* [GIF of Mobile Navigation interaction showing bottom-tab or thumb-friendly menu] */}
                <Image src="/images/mobile-nav.gif" alt="Mobile Navigation GIF" fill className="object-cover" />
              </div>
            </div>

            {/* Challenge 3: Newsletter Filtering */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden shadow-lg">
                {/*  */}
                <Image src="/images/newsletter-filter.png" alt="Newsletter Filter UI" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">03. Conversion Engine</span>
                <h4 className="text-3xl font-bold mt-2 mb-4">Dynamic Filtering Feature</h4>
                <p className="text-slate-600 mb-6">
                  To solve the low click rate (5.86%), I built a custom filtering system using <strong>TypeScript</strong>. 
                  Users can now effortlessly browse through editions and paid collections, significantly reducing search friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 3. Design System (Brand Consistency) */}
      <MotionSection className="px-6 py-24 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 font-sans">Design System</h3>
            <h2 className="text-4xl font-serif font-bold mb-8">Fantasy-Modern Aesthetic</h2>
            <p className="text-lg text-slate-600 mb-12 italic">
              Friendly, Humorous, and Blunt
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Color Palette Samples */}
            <div className="p-8 rounded-xl bg-[#0B1145] text-white flex flex-col justify-end h-40 shadow-md">
              <span className="text-xs opacity-70">Deep Blue</span>
              <span className="font-mono text-sm">#0B1145</span>
            </div>
            <div className="p-8 rounded-xl bg-[#2E2C9A] text-white flex flex-col justify-end h-40 shadow-md">
              <span className="text-xs opacity-70">Royal Purple</span>
              <span className="font-mono text-sm">#2E2C9A</span>
            </div>
            {/*  */}
            <div className="md:col-span-2 p-8 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
               <div className="text-left">
                  <p className="text-4xl font-serif italic mb-2" style={{ fontFamily: 'var(--font-italianno)' }}>Sample Typography (Italianno)</p>
                  <p className="text-2xl font-serif" style={{ fontFamily: 'var(--font-eczar)' }}>Sample Headlines (Eczar)</p>
               </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* GIF Showcase Section: Full Width Focus */}
      <MotionSection className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Live Interaction</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Seamless Experience Across Devices</h2>
          </div>

          {/* Desktop GIF - Full Width Display */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl border border-slate-800">
            <Image 
              src="/images/thevalthakantimes/home_mob.gif" 
              alt="Desktop Navigation Interaction"
              width={1400} 
              height={875}  
              layout="responsive"
              className="object-contain"
              unoptimized 
            />
          </div>
          
          <p className="mt-6 text-center text-slate-500 font-mono text-sm uppercase tracking-tighter">
            Full-scale desktop interaction showcase
          </p>
        </div>
      </MotionSection>
    </div>
  );
}