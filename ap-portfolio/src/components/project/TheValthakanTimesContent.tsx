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
                        Instead of relying on Beehiiv's hosted website,
                        I developed an independent Next.js application that consumes the Beehiiv API,
                        allowing the client to keep publishing newsletters through Beehiiv while owning a fully customizable website."
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
          <CaseImage src="/images/thevalthakantimes/team-photo.jpeg" aspect="aspect-[4/5]" />
        </div>
      </div>
            
      <CaseSection
        title="Process"
        subnav={[
          { id: "tvt-problem", label: "Problem" },
          { id: "tvt-goal", label: "Project Goal" },
          { id: "tvt-resesarch", label: "Client Research" },
          { id: "tvt-solution", label: "Solution" },
        ]}
      >
        <CaseImage src="/images/thevalthakantimes/about-client.png" />
        <SubSection id="tvt-problem" title="Problem">
          <CaseParagraph>
            The client&apos;s existing website was tightly coupled to Beehiiv&apos;s built-in website.
            <br/>
            Because the entire archive already lived in Beehiiv, nothing
            could be manually re-uploaded. <br/>Every past edition needed to
            surface automatically in the new site through Beehiiv&apos;s
            API.
          </CaseParagraph>
          <CaseImage src="/images/thevalthakantimes/previous.png" />
        </SubSection>
        <SubSection id="tvt-goal" title="Project Goal">
          <CaseParagraph>
             - Redesign the client&apos;s personal website
             <br/>- Preserve the existing newsletter workflow
             <br/>- Build a fully custom front-end
             <br/>- Maintain seamless integration with Beehiiv
             <br/>- Deliver the project through an iterative client feedback process
          </CaseParagraph>
        </SubSection>
        <SubSection id="tvt-resesarch" title="Client Research">
          <CaseParagraph>
            Through three client meetings, we identified the client&apos;s primary goals:
            <br/>- Increase newsletter subscriptions
            <br/>- Better showcase articles
            <br/>- Improve visual branding
            <br/>- Reduce dependence on Beehiiv&apos;s default website
          </CaseParagraph>
          <CaseImage src="/images/thevalthakantimes/client-meeting.png" />
        </SubSection>
        <SubSection id="tvt-solution" title="Solution">
          <CaseParagraph>
            The solution was a fully custom Next.js application that consumes the Beehiiv API.
            <br/>This allowed the client to keep publishing newsletters through Beehiiv while owning a fully customizable website.
          </CaseParagraph>
          <CaseImage src="/images/thevalthakantimes/tech-stack.png" />
          <CaseImage src="/images/thevalthakantimes/problem1.png" />
          <CaseImage src="/images/thevalthakantimes/problem2.png" />
          <CaseImage src="/images/thevalthakantimes/problem3.png" />
          <CaseImage src="/images/thevalthakantimes/problem4.png" />
        </SubSection>
      </CaseSection>

      {/* Process */}
      <CaseSection
        title="Process"
        subnav={[
          { id: "tvt-ia", label: "Information architecture" },
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

        <SubSection id="tvt-system" title="Design system">
          <CaseImage src="/images/thevalthakantimes/styleguide.png" />
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

        <SubSection id="tvt-responsive" title="Responsive">
          <CaseParagraph>
            Every screen was built and tested at mobile scale first, since
            that&apos;s where the vast majority of Daniel&apos;s audience
            arrives from a shared social link.
          </CaseParagraph>
          <CaseImage
            src="/images/thevalthakantimes/mobile.png"
            alt="Mobile home page interaction"
          />
          <CaseImage
            src="/images/thevalthakantimes/desktop.png"
            alt="Desktop home page interaction"
          />
        </SubSection>
      </CaseSection>

      {/* Related projects */}
      <RelatedProjects currentSlug="The-Valthakan-Times" />
    </>
  );
}
