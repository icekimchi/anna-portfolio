"use client";

import ImpactSummarySection from "../ui/ImpactSummarySection";
import {
  CaseSection,
  SubSection,
  CaseParagraph,
  CaseImage,
  CaseQuote,
  RelatedProjects,
} from "@/components/case-study/CaseStudy";

export default function ProBrushContent() {
  return (
    <>
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 mb-16 sm:px-8 lg:px-20">
        <div className="lg:col-span-2">
          <ImpactSummarySection
            title="A landing page that turns visitors into quote requests."
            description="A two-page concept site for a local painting company.
                        ProBrush is a fictional Vancouver-based residential painting company
                        I created as a personal project.
                        I designed and built a two-page Webflow site focused on one goal:
                        making it effortless for homeowners to trust the company and request a quote."
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
            label="ProBrush — hero mockup image"
            aspect="aspect-[4/5]"
          />
        </div>
      </div>

      {/* Goals */}
      <CaseSection title="Goals">
        <SubSection title="What the page needed to do">
          <CaseParagraph>
            ProBrush is a Vancouver-based local painting company that I designed.
            For a local painting company, the website has exactly one job:
            convince a homeowner that this crew is reliable, then get them to
            ask for a quote. The goal was a landing page where trust signals —
            finished projects, services, process — lead naturally to the
            contact form.
          </CaseParagraph>
          <CaseParagraph>
            The page also had to be easy for the owner to maintain, so the
            build needed to stay simple and content-editable in Webflow.
          </CaseParagraph>
          <CaseImage src="/images/probrush/about-overview.png" alt="About ProBrush" />
        </SubSection>
      </CaseSection>

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
          <CaseImage src="/images/probrush/research.png" alt="research - findings image" />
        </SubSection>

        <SubSection id="pb-identity" title="Visual identity">
          <CaseParagraph>
            The identity pairs a deep, dependable base color with warm accents
            drawn from paint swatches. Rounded corners, soft shadows, and
            generous photography keep the page approachable — professional,
            but unmistakably a local business rather than a faceless
            franchise.
          </CaseParagraph>
          <CaseImage src="/images/probrush/visual-identity.png" alt="ProBrush visual identity" />
        </SubSection>

        <SubSection id="pb-wireframing" title="Wireframing">
          <CaseParagraph>
            In Figma I wireframed the page as a single persuasive sequence:
            hero with an immediate call-to-action, services, before-and-after
            gallery, process steps, testimonials, and finally the quote form.
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

      {/* Development process */}
      <CaseSection
        title="Development"
        subnav={[
          { id: "pb-webflow", label: "Webflow development" },
          { id: "pb-interactions", label: "Interactions" },
        ]}
      >
        <SubSection id="pb-webflow" title="Webflow development">
          <CaseParagraph>
            The page is built in Webflow with a clean class system so the
            owner can swap photos and edit text without breaking the layout.
            The gallery and testimonials are structured for easy updates as
            new projects are completed.
          </CaseParagraph>
          <CaseImage label="Webflow build — structure image" />
        </SubSection>

        <SubSection id="pb-interactions" title="Interactions">
          <CaseParagraph>
            Scroll-triggered reveals pace the page section by section, and the
            before-and-after slider invites visitors to interact with the
            work itself. Motion is kept subtle — enough to feel modern, never
            enough to distract from the projects.
          </CaseParagraph>
          <CaseImage label="Interactions — animation detail image" />
        </SubSection>
      </CaseSection>

      {/* Comment */}
      <CaseQuote
        quote="Designing for a trades business sharpened my instincts about hierarchy — every section had to earn its place by moving a visitor one step closer to requesting a quote."
        name="Anna Park"
        role="Designer & Developer"
      />

      {/* Related projects */}
      <RelatedProjects currentSlug="Probrush" />
    </>
  );
}
