"use client";

import { MotionSection } from "@/components/MotionSection";
import Image from "next/image";
import ImpactSummarySection from "../ui/ImpactSummarySection";

export default function PriceSnapContents() {
  return (
    <>
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 px-4 sm:px-8">
        {/* Text */}
        <div className="lg:col-span-2">
          <ImpactSummarySection
            title="Designed Good City Transit Campaign"
            description={`Public transit is a shared space. How we behave shapes the city we live in.
                    Good City Transit explores everyday manners and small actions that create a more respectful,
                    shared urban experience.`}
            highlights={[
              {
                icon: "💡",
                text: "The color palette is inspired by vivid public colors commonly used in shared environments.",
              },
              {
                icon: "🎨",
                text: "Noise texture introduces a retro and contemporary aesthetic.",
              },
            ]}
          />
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
          <Image
            src="/images/goodcitytransit/compass.png"
            alt="Pricesnap Mockup"
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          />
        </div>
      </div>

      {/* Research Board */}
      <MotionSection className="px-4 py-12 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src="/images/goodcitytransit/researchboard.jpg"
              alt="Research Board"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
            />
          </div>
        </div>
      </MotionSection>

      {/* Mindmap */}
      <MotionSection className="px-4 py-12 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src="/images/goodcitytransit/mindmap_1.png"
              alt="Mindmap"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
            />
          </div>

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
            <Image
              src="/images/goodcitytransit/mindmap_2.png"
              alt="Research Board"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
            />
          </div>
        </div>
      </MotionSection>
    </>
  )
}