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

export default function DayFlowContent() {
  return (
    <>
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 mb-16 sm:px-8 lg:px-20">
        <div className="lg:col-span-2">
          <ImpactSummarySection
            title="An AI assistant that plans your day, so you don't have to."
            description="DayFlow is a productivity app that helps users manage schedules and
                        tasks more efficiently with AI. I worked as one of five UI/UX designers,
                        taking the product from research through a complete, developer-ready
                        design in Figma. The app has a working codebase on GitHub and has not
                        yet been publicly released."
            highlights={[
              {
                icon: "🤖",
                text: "Designed the AI scheduling flow — users describe their day in plain language and DayFlow turns it into a structured, editable schedule.",
              },
              {
                icon: "👥",
                text: "Collaborated in a 5-designer team: shared design system, split feature ownership, and weekly design critiques to keep the product coherent.",
              },
            ]}
          />
        </div>
        <div>
          <CaseImage
            src="/images/decode/overview.png"
            aspect="aspect-[4/5]"
          />
        </div>
      </div>

      {/* Goals */}
      <CaseSection title="Goals">
        <SubSection title="What we set out to solve">
          <CaseParagraph>
            Most schedule apps make users do all the work: create every event,
            estimate every duration, reshuffle everything when plans change.
            Our goal was to flip that — let the AI handle the tedious
            arranging, while the user stays in control of what actually
            matters to them.
          </CaseParagraph>
          <CaseParagraph>
            As a team we defined three success criteria: planning a full day
            should take under a minute, rescheduling should never require
            starting over, and the AI&apos;s suggestions should always be
            transparent and easy to override.
          </CaseParagraph>
        </SubSection>
      </CaseSection>

      {/* The challenge */}
      <CaseSection title="The Challenge">
        <SubSection title="Making AI feel helpful, not bossy">
          <CaseParagraph>
            The hardest design problem was trust. When an app rearranges your
            day for you, it can easily feel like it is taking over. Every AI
            action needed a clear explanation of why, a one-tap way to undo,
            and an obvious boundary between what the user decided and what
            the AI suggested.
          </CaseParagraph>
          <CaseParagraph>
            Working with five designers added a second challenge: keeping one
            consistent product voice across screens owned by different
            people. We solved it with a shared design system and strict
            component rules in Figma.
          </CaseParagraph>
          <CaseImage src="/images/decode/decode-1.png" alt="decode overview" />
        </SubSection>
      </CaseSection>

      {/* Process */}
      <CaseSection
        title="Process"
        subnav={[
          { id: "df-flows", label: "User flows" },
          { id: "df-wireframing", label: "Wireframing" },
          { id: "df-system", label: "Design system" },
        ]}
      >
        <SubSection id="df-flows" title="User flows">
          <CaseParagraph>
            I mapped the core flows: quick-add by natural language, AI
            day-planning, and drag-to-reschedule. We deliberately kept the
            happy path to three taps or fewer, and every AI step has a
            manual fallback so the app is still fully usable with the AI
            turned off.
          </CaseParagraph>
          <CaseImage src="/images/decode/userflow.jpg" alt="User flows — flow diagram image" />
        </SubSection>

        <SubSection id="df-system" title="Design system">
          <CaseParagraph>
            With five designers shipping screens in parallel, we built a
            shared Figma library first: color tokens, type scale, spacing
            rules, and a component set covering cards, chips, sheets, and
            the AI suggestion banner. Nothing went into a final screen
            unless it came from the library.
          </CaseParagraph>
          <CaseImage src="/images/decode/decode-moodboard.jpg" alt="Design system — component library image" />

        </SubSection>
      </CaseSection>

      {/* UI design */}
      <CaseSection
        title="UI Design"
        subnav={[
          { id: "df-home", label: "Home & timeline" },
          { id: "df-ai", label: "AI planning" },
          { id: "df-tasks", label: "Tasks & focus" },
          { id: "df-onboarding", label: "Onboarding" },
        ]}
      >
        <SubSection id="df-home" title="Home & timeline">
          <CaseParagraph>
            The home screen is a vertical timeline of the day. Events sit on
            the line, AI suggestions float beside it in a distinct style, and
            free time is visible instead of hidden — because seeing open
            space is what makes a plan feel achievable.
          </CaseParagraph>
          <CaseImage src="/images/decode/home.jpg" alt="Home & timeline — mockup image" />
        </SubSection>

        <SubSection id="df-ai" title="AI planning">
          <CaseParagraph>
            Users type or dictate what they need to do, and DayFlow drafts
            the day. Each suggested block shows its reasoning in one line
            and can be accepted, moved, or dismissed individually — never
            all-or-nothing.
          </CaseParagraph>
          <CaseImage src="/images/decode/schedule.png" alt="AI planning — schedule image" />
        </SubSection>

        <SubSection id="df-onboarding" title="Onboarding">
          <CaseParagraph>
            Onboarding asks three questions — wake time, work hours, and
            priorities — then immediately builds a sample day. Showing value
            on the first screen, before any signup friction, was a direct
            response to our research on abandoned planners.
          </CaseParagraph>
          <CaseImage src="/images/decode/decode-onboarding.png" alt="flow mockup image" />
        </SubSection>
      </CaseSection>

      {/* Related projects */}
      <RelatedProjects currentSlug="DayFlow" />
    </>
  );
}
