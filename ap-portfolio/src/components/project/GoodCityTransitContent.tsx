"use client";

import { MotionSection } from "@/components/MotionSection";
import Image from "next/image";
import ImpactSummarySection from "../ui/ImpactSummarySection";
import ImageLightbox from "@/components/ImageLightbox";
import { useState, useEffect } from "react";


export default function PriceSnapContents() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  
    useEffect(() => {
      if (lightboxSrc) {
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        
        return () => {
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          window.scrollTo(0, scrollY);
        };
      }
    }, [lightboxSrc]);
  
  return (
    <>
    <ImageLightbox
      src={lightboxSrc}
      onClose={() => setLightboxSrc(null)}
    />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 px-4 sm:px-8">

      {/* Image */}
      <div className="relative order-1 lg:order-2 w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
        <Image
          src="/images/goodcitytransit/compass.png"
          alt="Pricesnap Mockup"
          fill
          className="rounded-2xl object-cover cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          onClick={() => setLightboxSrc("/images/goodcitytransit/compass.png")}
        />
      </div>

      {/* Text  */}
      <div className="order-2 lg:order-1 lg:col-span-2">
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
    </div>

      <MotionSection className="px-4 py-16 mt-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Left label */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="block w-10 h-px bg-gray-600" />
                <h3 className="uppercase tracking-wide text-xl">
                  Mindmap
                </h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-medium mb-4">
                  Summary
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Five keywords came to my mind. And, I got more inspiration from Public and Vancouver.
                  Instead of using new colors, I wanted to focus on respsect and public space first.
                </p>
              </div>

              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/goodcitytransit/mindmap_2.png"
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

      <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Left label */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="block w-10 h-px bg-gray-600" />
                <h3 className="uppercase tracking-wide text-xl">
                  Research Board
                </h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-10">
              <div
                  className="relative w-full aspect-[4/3] cursor-zoom-in"
                  onClick={() =>
                    setLightboxSrc("/images/goodcitytransit/researchboard.jpg")
                  }
                >
                <Image
                    src="/images/goodcitytransit/researchboard.jpg"
                    alt="Research Board"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                />
              </div>
            </div>
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
                  Logo Development
                </h3>
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-medium mb-4">
                  Sketch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I started by thinking about icons from the word &quot;Goods&quot; and &quot;City&quot;.
                  And then I sketched ideas on my iPad.
                  Then, when I looked at the SkyTrain map, I wanted to use the dot from the map.
                </p>
              </div>

              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/goodcitytransit/logodevelopment.png"
                  alt="Overview of Project"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h2 className="text-2xl font-medium mb-4">
                Inspiration
              </h2>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/goodcitytransit/logoinspiration.png"
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