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

      <MotionSection className="px-6 py-24 bg-slate-50 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              <Image src="/images/Anna.png" alt="Anna Profile" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">01. Architecture</span>
              <h4 className="text-3xl font-bold mt-2 mb-4">Content Prioritization</h4>
              <p className="text-slate-600 mb-6">
                The existing site suffered from confusing navigation, leading to high churn. I reorganized the IA to prioritize 
                high-value assets like the <strong>"Dear Crone"</strong> advice column, ensuring the site&apos;s biggest reader draw is front and center.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      <StickySection/>

      <Footer />
    </main>
  );
}
