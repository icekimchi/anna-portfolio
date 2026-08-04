"use client"

import {MotionSection} from "@/components/MotionSection";
import Image from "next/image";
import ImpactSummarySection from "../ui/ImpactSummarySection";
import { CaseImage, CaseParagraph, CaseSection, SubSection } from "../case-study/CaseStudy";

export default function DailySnapContent(){
    return(
    <>
    {/* Overview */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 mb-16 sm:px-8 lg:px-20">
      <div className="lg:col-span-2">
        <ImpactSummarySection
          title="A Mobile App Promoting Outdoor Activities for Depression Prevention and Treatment"
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
          src="/images/dailysnap/poster-anna.jpeg"
          alt="Pricesnap Mockup"
          className="rounded-2xl object-cover"
        />
      </div>
    </div>

    {/* Overview section */}
    <CaseSection
        title="Overview"
        subnav={[
          { id: "dailysnap-mission1", label: "Mission 1" },
          { id: "dailysnap-mission2", label: "Mission 2" },
        ]}
      >
        <SubSection id="dailysnap-mission1" title="Go outside at least once a day">
          <CaseParagraph>
            For depressed patients, going out at least once a day is of great help.
            By making a game to encourage people to go out, it can help imrpove depressive symptoms.

            <br/>
          </CaseParagraph>
        </SubSection>

        <SubSection id="dailysnap-mission2" title="Monitoring the user">
          <CaseParagraph>
            Lifestyles are recorded through surveys, and users can consult with AI counselors at anytime, anywhere.
            It will be sent to a medical institution to set the right treatment direction.
          </CaseParagraph>
        </SubSection>
    </CaseSection>

    <CaseSection
        title="Progress"
        subnav={[
          { id: "brainstorming", label: "brainstorming" },
          { id: "development", label: "development" },
          { id: "presentation", label: "presentation" },
        ]}
      >
        <SubSection id="brainstorming" title="Gathering Idea">
          <CaseImage src="/images/dailysnap/mindmap.jpeg" alt="daily snap brainstorming" />
        </SubSection>

        <SubSection id="development" title="Development">
          <CaseImage src="/images/dailysnap/team.jpeg" alt="team photo" />
        </SubSection>

        <SubSection id="presentation" title="presentation">
          <CaseImage src="/images/dailysnap/presentation2.jpg" alt="team photo" />
          <CaseImage src="/images/dailysnap/presentation.jpg" alt="team photo" />
        </SubSection>
    </CaseSection>

    <CaseSection title="poster">
        <CaseImage src="/images/dailysnap/poster.jpg" alt="daily snap poster" />
    </CaseSection>
    


    </>
    )
}