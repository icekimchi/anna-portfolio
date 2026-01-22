"use client"

import {MotionSection} from "@/components/MotionSection";
import Image from "next/image";
import ImpactSummarySection from "../ui/ImpactSummarySection";

export default function PriceSnapContents(){
    return(
    <>
    {/* Overview */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2">
        <ImpactSummarySection
          title="Improved Information Fragmentation in Vancouver’s Grocery Market."
          description="In Vancouver, the same product is often sold at different prices across stores.
                      When I first arrived in Vancouver, I was surprised by these price differences.
                      This application allows users to conveniently compare prices among different stores."
          highlights=
          {[
            {
            icon: "💡",
            text: "I designed a standardized UI Card System to harmonize inconsistent data formats from various retailers.",
            },
            {
              icon: "🎨",
              text: "Developed a clean, modern Visual Identity using a fresh color palette and SF Pro typography to establish credibility in a utility-focused product."
            }
          ]}
        />
      </div>

    {/* Right image */}
      <div>
        <img
          src="/images/pricesnap/mockup_home.png"
          alt="Pricesnap Mockup"
          className="rounded-2xl object-cover"
        />
      </div>
    </div>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/pricesnap/overview.png"
                alt="Overview of Project"
                fill
                className="object-contain"
                priority
              />
            </div>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/pricesnap/overview_2.png"
                alt="Overview of Project"
                fill
                className="object-contain"
                priority
              />
            </div>
      </div>
    </MotionSection>
    
    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Work Details
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2 space-y-10">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/pricesnap/pricesnap_problem.png"
                alt="Overview of Project"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-4">
                Understanding the challenge
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In Vancouver, the same product is often sold at different prices across stores.
                When I first arrived in Vancouver, I was surprised by these price differences.
                This application allows users to conveniently compare prices among different stores.
              </p>
            </div>
          </div>

        </div>
      </div>
    </MotionSection>

    {/* Problem & Solution */}
    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Problem & Solution
              </h3>
            </div>
          </div>

          {/*Right label */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-medium mb-4">Problem</h2>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>Users must visit each market’s website to check prices.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>The service cannot be used without creating an account.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>It is difficult to browse and compare across different markets.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-4">Solution</h2>
              <ul className="space-y-3  font-sans text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>Integrated into a single app</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>Quick search without the need to create an account</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>UI design for price comparison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Briefing
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/pricesnap/whypricesnap.png"
                alt="Overview of Project"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </MotionSection>
    </>
    )
}