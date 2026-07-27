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

export default function TheValthakanTimesContent() {
  return (
    <>
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 mb-16 sm:px-8 lg:px-20">
        <div className="lg:col-span-2">
          <ImpactSummarySection
            title="Moving a creator off a newsletter template and onto a site built entirely by hand."
            description="Daniel Alexander runs The Valthakan Times, a fantasy-themed newsletter
                        with over 1.7M+ monthly social media reach. The site was previously built
                        on Beehiiv, which meant the design was boxed in by the platform's templates.
                        I led a team of three UI/UX designers through the redesign, then
                        hand-coded the entire result in Next.js and Tailwind CSS — connecting
                        Beehiiv's API so every past newsletter edition and paid collection carried
                        over automatically. The whole project ran in three weeks."
            highlights={[
              {
                icon: "🧵",
                text: "Migrated off Beehiiv's template system to a fully custom Next.js + Tailwind build, while keeping the client's entire archive intact via the Beehiiv API.",
              },
              {
                icon: "👥",
                text: "Led design direction across a 3-person UI/UX team and was the sole developer who implemented every screen — from Figma to shipped code.",
              },
            ]}
          />
        </div>
        <div>
          <CaseImage label="The Valthakan Times — hero mockup image" aspect="aspect-[4/5]" />
        </div>
      </div>

      {/* Goals */}
      <CaseSection title="Goals">
        <SubSection title="What the redesign needed to do">
          <CaseParagraph>
            Daniel had outgrown what Beehiiv&apos;s built-in themes could offer.
            The goal was a site that felt like his own brand rather than a
            newsletter template — while still functioning as a newsletter
            platform underneath: browsing past editions, reading the paid
            content, and converting readers into Patreon and newsletter
            subscribers.
          </CaseParagraph>
          <CaseParagraph>
            Because the entire archive already lived in Beehiiv, nothing
            could be manually re-uploaded. Every past edition needed to
            surface automatically in the new site through Beehiiv&apos;s
            API.
          </CaseParagraph>
          <CaseImage label="Goals — original Beehiiv site vs. goals image" />
        </SubSection>
      </CaseSection>

      {/* The challenge */}
      <CaseSection title="The Challenge">
        <SubSection title="Three weeks, three designers, one developer">
          <CaseParagraph>
            The timeline was tight — three weeks from kickoff to launch-ready
            build — for a project that involved both a full redesign and a
            full custom build. With three UI/UX designers working in
            parallel and me as the only person turning designs into code, the
            biggest risk was designs arriving faster than they could be
            built.
          </CaseParagraph>
          <CaseParagraph>
            On the technical side, the previous site&apos;s low click-through
            rate (5.86%) on newsletter editions meant the new information
            architecture and browsing experience had real conversion pressure
            behind it — this wasn&apos;t just a visual refresh.
          </CaseParagraph>
          <CaseImage
            src="/images/thevalthakantimes/competitors.png"
            alt="Competitor and reference site research"
          />
        </SubSection>
      </CaseSection>

      {/* Process */}
      <CaseSection
        title="Process"
        subnav={[
          { id: "tvt-ia", label: "Information architecture" },
          { id: "tvt-api", label: "Beehiiv API integration" },
          { id: "tvt-system", label: "Design system" },
        ]}
      >
        <SubSection id="tvt-ia" title="Information architecture">
          <CaseParagraph>
            The existing site buried its most-read content — the Dear Crone
            advice column — under generic navigation. I reorganized the IA to
            put the site&apos;s biggest reader draw front and center, and
            planned the page structure around what the Beehiiv API could
            actually return: editions, tags, and paid vs. free content.
          </CaseParagraph>
          <CaseImage
            src="/images/thevalthakantimes/ia-structure.png"
            alt="Information architecture structure"
          />
        </SubSection>

        <SubSection id="tvt-api" title="Beehiiv API integration">
          <CaseParagraph>
            Instead of a CMS, the site pulls directly from Beehiiv&apos;s API:
            every edition, tag, and paid-content flag Daniel already had in
            Beehiiv appears on the new site without any manual re-entry. This
            was the piece that made a full platform switch possible inside a
            three-week timeline — no content migration, just a new front end
            reading live data.
          </CaseParagraph>
          <CaseImage label="Beehiiv API — data flow / integration diagram image" />
        </SubSection>

        <SubSection id="tvt-system" title="Design system">
          <CaseParagraph>
            With three designers working across different pages at once, we
            locked a shared system early: a Deep Blue and Royal Purple color
            pair, Italianno for display type, and Eczar for headlines — a
            &ldquo;fantasy-modern&rdquo; look that stayed friendly, humorous,
            and blunt, matching Daniel&apos;s own voice.
          </CaseParagraph>
          <CaseImage label="Design system — color & typography image" />
        </SubSection>
      </CaseSection>

      {/* UI design */}
      <CaseSection
        title="UI Design"
        subnav={[
          { id: "tvt-nav", label: "Adaptive navigation" },
          { id: "tvt-filtering", label: "Edition filtering" },
          { id: "tvt-responsive", label: "Responsive" },
        ]}
      >
        <SubSection id="tvt-nav" title="Adaptive navigation">
          <CaseParagraph>
            Over 80% of traffic arrives from mobile social platforms, so
            navigation was designed mobile-first — not scaled down from
            desktop. Mobile and desktop use genuinely different nav
            structures so both stay thumb-friendly and readable at their own
            scale.
          </CaseParagraph>
          <CaseImage
            src="/images/thevalthakantimes/navbar.png"
            alt="Adaptive navigation design"
          />
        </SubSection>

        <SubSection id="tvt-filtering" title="Edition filtering">
          <CaseParagraph>
            To fix the low click-through rate on editions, I built a dynamic
            filtering system in TypeScript on top of the Beehiiv data, so
            readers can browse free and paid editions by topic instead of
            scrolling a flat list.
          </CaseParagraph>
          <CaseImage label="Edition filtering — UI image" />
        </SubSection>

        <SubSection id="tvt-responsive" title="Responsive">
          <CaseParagraph>
            Every screen was built and tested at mobile scale first, since
            that&apos;s where the vast majority of Daniel&apos;s audience
            arrives from a shared social link.
          </CaseParagraph>
          <CaseImage
            src="/images/thevalthakantimes/home_mob.gif"
            alt="Mobile home page interaction"
          />
        </SubSection>
      </CaseSection>

      {/* Development */}
      <CaseSection
        title="Development"
        subnav={[
          { id: "tvt-stack", label: "Hand-coded build" },
          { id: "tvt-desktop", label: "Desktop experience" },
        ]}
      >
        <SubSection id="tvt-stack" title="Hand-coded build">
          <CaseParagraph>
            Unlike a page builder, the entire site is custom code — Next.js
            App Router and Tailwind CSS — which is what made the adaptive
            navigation, custom filtering, and Beehiiv API integration
            possible in the first place. I was the only developer on the
            project, responsible for turning all three designers&apos;
            screens into a single coherent, working site.
          </CaseParagraph>
          <CaseImage label="Hand-coded build — code / component structure image" />
        </SubSection>

        <SubSection id="tvt-desktop" title="Desktop experience">
          <CaseParagraph>
            The desktop layout carries the same content, filtering, and
            Beehiiv-backed archive as mobile, restructured around a wider
            canvas with more of the archive visible at once.
          </CaseParagraph>
          <CaseImage
            src="/images/thevalthakantimes/home_desktop.gif"
            alt="Desktop home page interaction"
          />
        </SubSection>
      </CaseSection>

      {/* Related projects */}
      <RelatedProjects currentSlug="The-Valthakan-Times" />
    </>
  );
}
