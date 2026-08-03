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
            description="DayFlow is a four-week MVP created by a team of two developers and two designers.
            As the lead UI/UX designer, I designed the entire product experience—from onboarding to AI-generated
            schedules—transforming complex planning into a simple conversational workflow."
            highlights={[
              {
                icon: "🤖",
                text: "Users can enter natural language tasks like \"study React, gym, groceries\" instead of manually scheduling every activity.",
              },
              {
                icon: "📅",
                text: "AI generates a personalized schedule based on each user's lifestyle, which can be reviewed and adjusted before being saved locally.",
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
      
      <CaseSection title="Problem">
        <SubSection title="Problem">
          <CaseParagraph>
            Many people know what they want to accomplish but struggle to organize
            those tasks into a realistic schedule.
          </CaseParagraph>
          <CaseParagraph>
            Traditional calendar apps require users to manually estimate time,
            prioritize tasks, and build schedules from scratch, creating unnecessary
            planning fatigue.
          </CaseParagraph>
        </SubSection>
      </CaseSection>

      {/* Goals */}
      <CaseSection title="Goals">
        <SubSection title="What we set out to solve">
          <CaseParagraph>
            Design an onboarding and scheduling experience that:
          </CaseParagraph>
          <CaseParagraph>
            - Reduces planning effort <br/>
            - Generates realistic schedules automatically <br/>
            - Keeps users in control through easy editing
          </CaseParagraph>
        </SubSection>
      </CaseSection>

      {/* The challenge */}
      <CaseSection title="The Challenge">
        <SubSection title="How might we help users create a realistic daily schedule without asking
            them to manually plan every hour?">
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
        title="UI Decision"
        subnav={[
          { id: "df-onboarding", label: "Onboarding" },
          { id: "df-home", label: "Home & timeline" },
          { id: "df-ai", label: "AI Scheduling" },
          { id: "df-tasks", label: "Tasks & focus" },
        ]}
      >
        <SubSection id="df-onboarding" title="Onboarding">
          <CaseParagraph>
            Rather than presenting generic scheduling options,
            I designed a conversational onboarding flow that gradually collects information
            about work hours, routines, priorities, and daily habits.
            <br/> <br/>
            This creates a personalized foundation before users interact with the AI planner.
          </CaseParagraph>
          <CaseImage src="/images/decode/decode-onboarding.png" alt="flow mockup image" />
        </SubSection>

        <SubSection id="df-home" title="Home & timeline">
          <CaseParagraph>
            The home screen is a vertical timeline of the day. Events sit on
            the line, AI suggestions float beside it in a distinct style, and
            free time is visible instead of hidden — because seeing open
            space is what makes a plan feel achievable.
          </CaseParagraph>
          <CaseImage src="/images/decode/home.jpg" alt="Home & timeline — mockup image" />
        </SubSection>

        <SubSection id="df-ai" title="AI Scheduling">
          <CaseParagraph>
            Instead of forcing users to create time blocks manually,
            DayFlow allows them to describe their plans in natural language.
            The AI translates those ideas into a structured schedule that users can edit before saving.
          </CaseParagraph>

          <CaseParagraph>
            AI suggestions should never feel final. <br/>
            I designed the experience so users can easily review, modify,
            and reorganize generated schedules, ensuring transparency and maintaining trust in AI
            recommendations.
          </CaseParagraph>
          <CaseImage src="/images/decode/schedule.png" alt="AI planning — schedule image" />
        </SubSection>

      </CaseSection>

      {/* Related projects */}
      <RelatedProjects currentSlug="DayFlow" />
    </>
  );
}
