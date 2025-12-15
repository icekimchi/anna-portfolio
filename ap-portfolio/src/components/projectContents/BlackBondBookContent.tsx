"use client";

import {MotionSection} from "@/components/MotionSection";
import BeforeAfterScrollCompare from "@/components/BeforeAfterScrollCompare";
import { useState } from "react";

export default function BlackBondBookContent(){
  
  const [value, setValue] = useState<number>(50);

    return(
    <>
    {/* Overview */}
    <MotionSection className="px-4 py-20 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        <img
          src="/images/blackbondbook/store_1.png"
          alt="Store img 1"
          className="w-full aspect-[4/3] rounded-2xl shadow-lg object-cover"
        />
        <img
          src="/images/blackbondbook/store_2.png"
          alt="Store img 2"
          className="w-full aspect-[4/3] rounded-2xl shadow-lg object-cover"
        />

        <div className="md:col-span-2 mt-10">
          <p className="text-gray-700 font-sans leading-relaxed mb-4">
            Black Bond Books is a local, independent bookstore in the Vancouver area,
            founded in 1963. With multiple branches and a long-standing presence in the
            community, the bookstore hosts various events and offers a wide range of
            books across genres.
          </p>
        </div>
      </div>
    </MotionSection>

    {/* Problem & Solution */}
    <MotionSection className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          While Black Bond Books has a strong offline identity, its website experience
          presents several UX challenges. Key information such as events, books, and
          authors competes for attention without a clear hierarchy, making it harder
          for users to quickly understand where to focus.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Additionally, inconsistent layouts across pages and limited navigation
          cues increase cognitive load, especially for users who want to browse
          casually or discover something new.
        </p>
      </div>
    </MotionSection>
    
    { /*home*/ }
    <MotionSection className="px-4 py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Home</h2>
        <img
            src="/images/blackbondbook/home.png"
            alt="Store img 2"
            className="w-full aspect-[4/3] rounded-2xl object-cover"
          />
        <p className="pt-5 text-gray-700 leading-relaxed">
          The original homepage presented content in a uniform layout, making it
          difficult to distinguish the importance of each section. Users had to scan
          extensively to find events or branch-specific information.
        </p>
        <p className="pb-5 text-gray-700 leading-relaxed mt-4">
          To address this, each section was given a distinct layout to clarify content
          hierarchy. The static hero image was replaced with an event-focused banner
          that highlights upcoming activities and encourages users to visit physical
          stores, reinforcing the bookstore’s community-driven identity.
        </p>
      </div>
    </MotionSection>
    
    { /*Book List Page*/ }
    <MotionSection className="px-4 py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Book List Page</h2>
        <img
          src="/images/blackbondbook/booklist_1.png"
          alt="Store img 2"
          className="w-full my-4 aspect-[4/3] rounded-2xl object-cover"
        />
        <p className="mt-5 text-gray-700 leading-relaxed">
          The original book list page lacked clear sorting logic, making it difficult
          for users to control how results were displayed.

          After reviewing other bookstore websites, sorting options were reorganized
          to align with common user expectations. Visual hierarchy was applied within
          book cards to improve readability.
        </p>
        <img
          src="/images/blackbondbook/booklist_2.png"
          alt="Store img 2"
          className="mt-30 w-full rounded-2xl object-cover"
        />
        <p className="mt-5 text-gray-700 leading-relaxed mt-4">
          Pagination was replaced with a “View More” button to create a smoother,
          less interruptive browsing experience.
        </p>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Book Detail Page</h2>
      <p className="text-gray-700 leading-relaxed">
        Important book information was previously scattered, making it harder for
        users to quickly assess key details such as authorship, popularity, or
        categories.
      </p>4
      <p className="text-gray-700 leading-relaxed mt-4">
        The layout was refined by adding a bestseller label, clearly identifying
        the author, and grouping categories into boxed sections. The “Message From”
        section was rearranged to improve reading flow. Additionally, the right-side
        back button was replaced with breadcrumb navigation, and review tabs were
        standardized for consistency across the site.
      </p>
    </MotionSection>

    <MotionSection className="py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Author Page</h2>
      <p className="text-gray-700 leading-relaxed">
        Author pages previously lacked visual emphasis, which reduced recognition
        and made it harder for users to connect books with their creators.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        Research showed that 4 out of 7 bookstore websites did not include author
        images. In response, the redesign highlights the author’s name more clearly
        and introduces Popular Books and Latest Releases sections to support
        discovery and encourage deeper exploration.
      </p>
    </MotionSection>
  </>
  )
}