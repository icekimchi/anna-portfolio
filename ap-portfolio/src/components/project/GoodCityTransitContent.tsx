"use client";

import Image from "next/image";
import ImpactSummarySection from "../ui/ImpactSummarySection";
import ImageLightbox from "@/components/ImageLightbox";
import { useState, useEffect } from "react";
import {
  CaseSection,
  SubSection,
  CaseParagraph,
  CaseImage,
} from "../case-study/CaseStudy";

export default function GoodCityTransitContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxSrc) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [lightboxSrc]);

  return (
    <>
      <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />

      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 px-4 mb-16 sm:px-8 lg:px-20">
        <div className="relative order-1 lg:order-2 w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
          <Image
            src="/images/goodcitytransit/compass.png"
            alt="Good City Transit card mockup"
            fill
            className="rounded-2xl object-cover cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
            onClick={() => setLightboxSrc("/images/goodcitytransit/compass.png")}
          />
        </div>

        <div className="order-2 lg:order-1 lg:col-span-2">
          <ImpactSummarySection
            title="Designed Good City Transit Campaign"
            description="Public transit is a shared space. How we behave shapes the city we live in.
                        Good City Transit explores everyday manners and small actions that create a more respectful,
                        shared urban experience."
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

      {/* Mindmap */}
      <CaseSection title="Mindmap">
        <SubSection title="Summary">
          <CaseParagraph>
            Five keywords came to my mind, and I got more inspiration from
            Public and Vancouver. Instead of using new colors, I wanted to
            focus on respect and public space first.
          </CaseParagraph>
          <CaseImage src="/images/goodcitytransit/mindmap_1.png" alt="Mindmap sketch, page 1" />
          <CaseImage src="/images/goodcitytransit/mindmap_2.png" alt="Mindmap sketch, page 2" />
        </SubSection>
      </CaseSection>

      {/* Research Board */}
      <CaseSection title="Research Board">
        <SubSection title="Mood board">
          <CaseImage src="/images/goodcitytransit/moodboard.jpg" alt="Mood board" />
        </SubSection>
      </CaseSection>

      {/* Logo Development */}
      <CaseSection
        title="Logo Development"
        subnav={[
          { id: "gct-sketch", label: "Sketch" },
          { id: "gct-inspiration", label: "Inspiration" },
          { id: "gct-logo", label: "Logo" },
        ]}
      >
        <SubSection id="gct-sketch" title="Sketch">
          <CaseParagraph>
            I started by thinking about icons from the words &quot;Goods&quot;
            and &quot;City&quot;. Then I sketched ideas on my iPad, and when I
            looked at the SkyTrain map, I wanted to use the dot from the map.
          </CaseParagraph>
          <CaseImage src="/images/goodcitytransit/logodevelopment.png" alt="Logo sketch development" />
        </SubSection>

        <SubSection id="gct-inspiration" title="Inspiration">
          <CaseImage src="/images/goodcitytransit/logoinspiration.png" alt="Logo inspiration references" />
        </SubSection>

        <SubSection id="gct-logo" title="Logo">
          <CaseImage src="/images/goodcitytransit/logo.png" alt="Final Good City Transit logo" />
        </SubSection>
      </CaseSection>

      {/* Final mockups */}
      <CaseSection title="Final Mockups">
        <SubSection>
          <div className="space-y-6">
            <CaseImage
              src="/images/goodcitytransit/mockup1.png"
              alt="Good City Transit card held in hand"
              aspect="aspect-[3/2]"
            />
            <CaseImage
              src="/images/goodcitytransit/mockup2.png"
              alt="Good City Transit campaign placements across transit signage and bus wrap"
              aspect="aspect-[3/2]"
            />
          </div>
        </SubSection>
      </CaseSection>
    </>
  );
}
