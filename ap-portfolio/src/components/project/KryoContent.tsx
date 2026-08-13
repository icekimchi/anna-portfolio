"use client"

import ImpactSummarySection from "../ui/ImpactSummarySection";
import { CaseImage, CaseSection, CaseParagraph, SubSection, Reveal, RelatedProjects } from "../case-study/CaseStudy";

export default function KryoContent() {
  return (
    <>
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-4 mb-16 sm:px-8 lg:px-20">
        <div className="lg:col-span-2">
          <ImpactSummarySection
            title="Empowers business owners to manage products independently."
            description="KRYO is a fictional high-end sunglasses brand based in Vancouver.
                        I built this as a personal project to explore full e-commerce design and
                        development — from brand identity and visual design to a fully working
                        Webflow store with cart, checkout, and CMS-managed products."
            highlights={[
              {
                icon: "🛍️",
                text: "New products can be published directly through the CMS.",
              },
              {
                icon: "🎨",
                text: "No code changes are required for day-to-day content management.",
              },
            ]}
          />
        </div>

        {/* Right image */}
        <div>
          <img
            src="/images/kryo/models.png"
            alt="KRYO models"
            className="rounded-2xl object-cover"
            
          />
        </div>
      </div>

      {/* Overview section */}
      <CaseSection
        title="Overview"
        subnav={[
          { id: "kryo-problem", label: "Problem" },
          { id: "kryo-approach", label: "Approach" },
        ]}
      >
        <SubSection id="kryo-problem" title="Problem">
          <CaseParagraph>
            Small businesses often rely on developers whenever they need to
            update products or inventory. <br /> This creates unnecessary
            maintenance costs and slows down business operations.
          </CaseParagraph>
        </SubSection>

        <SubSection id="kryo-approach" title="Approach">
          <CaseParagraph>
            Designed and developed an e-commerce website using Webflow CMS.
            <br /> The product structure enables clients to add, edit, and organize
            products without touching the website layout or code.
          </CaseParagraph>
          <CaseParagraph>
            Rather than building a custom CMS from scratch, I selected
            Webflow because it provides an intuitive visual CMS, allowing
            non-technical users to manage products independently while
            significantly reducing maintenance time.
          </CaseParagraph>
        </SubSection>
      </CaseSection>
      <div className="max-w-8xl mx-auto px-4 mt-16 mb-16 sm:px-8 lg:px-20">
        <CaseImage src="/images/kryo/desert.png" alt="desert preview" />
      </div>

      {/* Pages & Features */}
      <CaseSection title="What I built?">
        <SubSection title="What I built?">
          <Reveal>
            <ul className="space-y-3 font-sans text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Transformed a Webflow template into a fully branded storefront</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Designed CMS collections for scalable product management</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Built responsive layouts across devices</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Configured dynamic product pages</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 flex-shrink-0">✓</span>
                <span>Implemented cart and checkout flow</span>
              </li>
            </ul>
          </Reveal>
        </SubSection>
      </CaseSection>

      {/* Visual identity */}
      <CaseSection title="Visual Identity">
        <SubSection title="Brand & color system">
          <CaseParagraph>
            I developed a visual identity that reflects the brand&apos;s
            premium positioning. A dark editorial aesthetic, high-contrast
            product photography, and restrained white and gold accents were
            chosen to create a modern, luxury feel while keeping the
            interface clean and product-focused.
          </CaseParagraph>
        </SubSection>
      </CaseSection>

      {/* UI design */}
      <CaseSection
        title="UI Design"
        subnav={[
          { id: "pb-responsive", label: "Responsive" },
        ]}
      >

        <SubSection id="pb-responsive" title="Responsive">
          <CaseParagraph>
            Most homeowners find contractors on their phone, so the mobile
            layout came first: full-width photography, thumb-reachable
            buttons, and a call link in the sticky header.
          </CaseParagraph>
          <CaseImage src="/images/kryo/mobile.png" alt="Kryo mobile layout" />
          <CaseImage src="/images/kryo/desktop.png" alt="Kryo desktop layout" />
        </SubSection>
      </CaseSection>

      <RelatedProjects currentSlug="Kryo" />
    </>
  );
}
