"use client"

import { MotionSection } from "@/components/MotionSection";
import Image from "next/image";
import ImpactSummarySection from "../ui/ImpactSummarySection";
import { CaseImage, CaseSection, CaseParagraph, SubSection } from "../case-study/CaseStudy";

export default function KryoContent() {
  return (
    <>
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <ImpactSummarySection
            title="Designed and built a luxury e-commerce experience from scratch."
            description="KRYO is a fictional high-end sunglasses brand based in Vancouver.
                        I built this as a personal project to explore full e-commerce design and
                        development — from brand identity and visual design to a fully working
                        Webflow store with cart, checkout, and CMS-managed products."
            highlights={[
              {
                icon: "🛍️",
                text: "Built a complete Webflow Ecommerce store with cart, checkout flow, and CMS-driven product pages — no template, built from scratch.",
              },
              {
                icon: "🎨",
                text: "Developed a premium visual identity using dark tones, cinematic video backgrounds, and editorial typography to match a luxury brand feel.",
              },
            ]}
          />
        </div>

        {/* Right image */}
        <div>
          <img
            src="/images/kryo/mockup_home.png"
            alt="KRYO homepage mockup"
            className="rounded-2xl object-cover"
            
          />
        </div>
      </div>

      {/* Overview section */}
      <MotionSection className="px-4 py-16 mt-20 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
              
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Left label */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="block w-10 h-px bg-gray-600" />
                <h3 className="uppercase tracking-wide text-xl">Overview</h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-medium mb-4">What I built</h2>
                <p className="text-gray-600 leading-relaxed">
                  KRYO is a concept e-commerce brand I designed and developed entirely on my own.
                  The goal was to build something that felt like a real luxury brand — not a student
                  project. I handled everything: brand naming, visual identity, information architecture,
                  Webflow CMS structure, and the full shopping experience from product browse to checkout.
                </p>
              </div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* Pages & Features */}
      <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Left label */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="block w-10 h-px bg-gray-600" />
                <h3 className="uppercase tracking-wide text-xl">Pages & Features</h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-medium mb-4">What&apos;s inside</h2>
                <ul className="space-y-3 font-sans text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Home — hero video background, new edition carousel, sale countdown timer</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Shop — CMS-driven product grid with wishlist interaction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Product detail — variant selection, add to cart, full Webflow Ecommerce integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Cart & checkout — functional cart drawer and checkout flow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Contact page — fully responsive across all breakpoints</span>
                  </li>
                </ul>
              </div>

              <Image
                src="/images/kryo/kryo_features.png"
                alt="KRYO features overview"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>

          </div>
        </div>
      </MotionSection>

      {/* Visual identity */}
      <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Left label */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="block w-10 h-px bg-gray-600" />
                <h3 className="uppercase tracking-wide text-xl">Visual Identity</h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-medium mb-4">Brand & color system</h2>
                <p className="text-gray-600 leading-relaxed">
                  I built a visual identity around a dark, editorial aesthetic — near-black backgrounds,
                  high-contrast product photography, and restrained use of white and gold accents.
                  The goal was to feel premium without being over-designed.
                </p>
              </div>

              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/kryo/kryo_color.png"
                  alt="KRYO color system"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* UI design */}
      <CaseSection
        title="UI Design"
        subnav={[
          { id: "pb-responsive", label: "Responsive" },
        ]}
      >

        <SubSection id="pb-responsive" title="Responsive">
          <CaseParagraph>
            Most homeowners find contractors on their phone, so the mobile
            layout came first: full-width photography, thumb-reachable
            buttons, and a call link in the sticky header.
          </CaseParagraph>
          <CaseImage src="/images/kryo/mobile.png" alt="Kryo mobile layout" />
          <CaseImage src="/images/kryo/desktop.png" alt="Kryo desktop layout" />
          
        </SubSection>
      </CaseSection>

      {/* Tech stack */}
      <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Left label */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="block w-10 h-px bg-gray-600" />
                <h3 className="uppercase tracking-wide text-xl">Tech Stack</h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-medium mb-4">Built with</h2>
                <ul className="space-y-3 font-sans text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span><strong>Webflow Ecommerce</strong> — cart, checkout, order management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span><strong>Webflow CMS</strong> — product collection, structured content management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span><strong>Custom CSS</strong> — overriding Webflow&apos;s default ecommerce UI for a luxury feel</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span><strong>MP4 video embeds</strong> — cinematic hero and mid-page video sections</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span><strong>Figma</strong> — wireframes and design system before Webflow build</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </MotionSection>

      {/* Full site preview */}
      <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/kryo/kryo_screens.png"
              alt="KRYO all screens"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </MotionSection>
    </>
  );
}
