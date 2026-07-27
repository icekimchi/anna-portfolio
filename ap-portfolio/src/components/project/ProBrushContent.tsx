"use client";

import {
  CaseSection,
  SubSection,
  CaseParagraph,
  CaseImage,
  CaseQuote,
  RelatedProjects,
} from "@/components/case-study/CaseStudy";
import ImpactSummarySection from "../ui/ImpactSummarySection";

export default function ProBrushContent() {
  return (
    <>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 mb-16 sm:px-8 lg:px-20">
      <div className="lg:col-span-2">
        <ImpactSummarySection
        title="A landing page that turns visitors into quote requests."
        description="Designed and developed a conversion-focused landing page for a fictional Vancouver painting contractor.
        The project explores how thoughtful UX, visual hierarchy, and responsive design can help local service businesses generate more qualified leads."
        highlights={[
          {
            icon: "🏠",
            text: "Designed two pages with a clear purpose — a landing page that builds trust through service breakdown, an always-reachable quote form.",
          },
          {
            icon: "🖌️",
            text: "Built a warm, trustworthy visual identity that feels professional.",
          },
        ]}
        />
        </div>
      <div>
        <CaseImage
        src="/images/probrush/painting.avif"
        aspect="aspect-[4/5]"
        />
        </div>
      </div>
      
      {/* Goals */}
      <CaseSection title="Goals">
        <SubSection title="What the page needed to do">
          <CaseParagraph>
            Create a professional landing page that establishes trust,
            communicates services clearly, and encourages visitors to request a quote.
          </CaseParagraph>
        </SubSection>
      </CaseSection>

      {/* Target Audience */}
      <CaseSection title="Target Audience">
        <SubSection title="Who the site needed to reach">
          <CaseParagraph>
            - Homeowners looking for interior or exterior painting services,
            <br/>- property managers maintaining rental properties, and small
            <br/>- businesses requiring commercial painting.
          </CaseParagraph>
        </SubSection>
      </CaseSection>

      <div className="max-w-8xl mx-auto px-4 mt-16 mb-16 sm:px-8 lg:px-20">
        <CaseImage src="/images/probrush/painting.png" alt="painting preview" />
      </div>

      {/* Process */}
      <CaseSection
        title="Process"
        subnav={[
          { id: "pb-research", label: "Research" },
          { id: "pb-identity", label: "Visual identity" },
          { id: "pb-wireframing", label: "Wireframing" },
        ]}
      >
        <SubSection id="pb-research" title="Research">
          <CaseParagraph>
            I reviewed local Vancouver painting companies and larger franchise
            sites to map what homeowners see when they shop around. The
            pattern was clear: pages that showed real project photos and a
            transparent process felt far more credible than pages that led
            with slogans.
          </CaseParagraph>
          <CaseParagraph>
            These findings shaped the content hierarchy and reinforced the importance of showing real work before asking users to request a quote.
          </CaseParagraph>
          <CaseImage src="/images/probrush/research.png" alt="research - findings image" />
        </SubSection>

        <SubSection id="pb-identity" title="Visual identity">
          <CaseParagraph>
            The identity pairs a deep, dependable base color with warm accents
            drawn from paint swatches. The visual system balances professionalism with warmth,
            helping the brand feel approachable and trustworthy without looking overly corporate.
            franchise.
          </CaseParagraph>
          <CaseImage src="/images/probrush/visual-identity.png" alt="ProBrush visual identity" />
        </SubSection>

        <SubSection id="pb-wireframing" title="Wireframing">
          <CaseParagraph>
            Each section answers the question a visitor would naturally ask
            next.
          </CaseParagraph>
          <CaseImage src="/images/probrush/wireframe.png" alt="ProBrush wireframes in Figma" />
        </SubSection>
      </CaseSection>

      {/* UI design */}
      <CaseSection
        title="UI Design"
        subnav={[
          { id: "pb-hero", label: "Hero & services" },
          { id: "pb-gallery", label: "Project gallery" },
          { id: "pb-quote", label: "Quote form" },
          { id: "pb-responsive", label: "Responsive" },
        ]}
      >
        <SubSection id="pb-hero" title="Hero & services">
          <CaseParagraph>
            The hero states what the company does and where, over photography
            of real work — no stock images. Directly below, service cards
            break down interior, exterior, and commercial painting so
            visitors can self-qualify within the first scroll.
          </CaseParagraph>
          <CaseImage src="/images/probrush/hero.png" alt="ProBrush hero section" />
        </SubSection>

        <SubSection id="pb-quote" title="Quote form">
          <CaseParagraph>
            The quote form asks only for what is needed to start a
            conversation: name, contact, and a short project description.
            Every call-to-action on the page anchors to this form, and a
            sticky button keeps it one tap away on mobile.
          </CaseParagraph>
          <CaseImage src="/images/probrush/contact.png" alt="ProBrush quote form" />
        </SubSection>

        <SubSection id="pb-responsive" title="Responsive">
          <CaseParagraph>
            Most homeowners find contractors on their phone, so the mobile
            layout came first: full-width photography, thumb-reachable
            buttons, and a call link in the sticky header.
          </CaseParagraph>
          <CaseImage src="/images/probrush/mobile.png" alt="ProBrush mobile layout" />
          <CaseImage src="/images/probrush/desktop.png" alt="ProBrush desktop layout" />
          
        </SubSection>
      </CaseSection>

      {/* Related projects */}
      <RelatedProjects currentSlug="Probrush" />
    </>
  );
}
