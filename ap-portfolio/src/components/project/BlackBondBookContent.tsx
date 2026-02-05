"use client";

import {MotionSection} from "@/components/MotionSection";
import ImageLightbox from "@/components/ImageLightbox";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlackBondBookContent(){
  
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxSrc) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [lightboxSrc]);

    return(
    <>
    <ImageLightbox
      src={lightboxSrc}
      onClose={() => setLightboxSrc(null)}
    />

    {/* Overview */}
    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Work Details
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image 1 */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/blackbondbook/store_1.webp"
                  alt="Store img 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Image 2 */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/blackbondbook/store_2.webp"
                  alt="Store img 2"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-4">
                About Black Bond Books
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Black Bond Books is a local, independent bookstore in the Vancouver area,
                founded in 1963. With multiple branches and a long-standing presence in the
                community, the bookstore hosts various events and offers a wide range of
                books across genres.
              </p>

              <div>
                <h2 className="text-2xl font-medium mt-6 mb-3">
                  Challenges
                </h2>

                <ul className="space-y-4 font-sans text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✓</span>
                    <span>
                      The homepage lacked a clear visual hierarchy.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✓</span>
                    <span>
                      The overall visual design felt outdated, negatively impacting the
                      first impression and perceived usability.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✓</span>
                    <span>
                      In usability testing with over a dozen users, only 2 out of 5 core
                      tasks were completed successfully, and none were completed smoothly.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-red-500 flex-shrink-0">✓</span>
                    <span>
                      Users frequently hesitated or took inefficient paths, revealing issues
                      in information architecture and interaction clarity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20 bg-[#222222]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Solution 1
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2 space-y-10">
            <div className="relative w-full aspect-[1234/930]">
                <Image
                  src="/images/blackbondbook/banner.webp"
                  alt="Overview of Project"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
          </div>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20 bg-[#222222]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Solution 2
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2 space-y-10">
            <div className="relative w-full aspect-[1234/930]">
                <Image
                  src="/images/blackbondbook/content.webp"
                  alt="Overview of Project"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
          </div>
        </div>
      </div>
    </MotionSection>


    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Design Approach
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2 space-y-10">
            <div className="flex justify-left"> 
              <Image
                src="/images/blackbondbook/order.png"
                alt="Process Steps"
                width={800} 
                height={200} 
                className="rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
    
    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Moodboard
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/blackbondbook/moodboard.webp"
                alt="Overview of Project"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-gray-600">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl">
                Visual Identity
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <div className="flex justify-left py-4"> 
              <Image
                src="/images/blackbondbook/colors.png"
                alt="Process Steps"
                width={800} 
                height={200} 
                className="rounded-lg" 
              />
            </div>

            <p className="text-gray-600 leading-relaxed py-10">
              While maintaining the original color scheme, I adjusted the base, main, and accent colors to improve clarity and consistency.
              The original palette used beige as the base, mint blue as the main color, and red as the accent.
              I refined this to a white base, black primary color, and mint accent, resulting in a more modern and balanced visual system.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {["mission_1","mission_2","mission_3","mission_4"].map((img) => (
                <div
                  key={img}
                  onClick={() => setLightboxSrc(`/images/blackbondbook/${img}.webp`)}
                  className="relative w-full aspect-[16/9] overflow-hidden"
                >
                  <Image
                    src={`/images/blackbondbook/${img}.webp`}
                    alt={img}
                    fill
                    className="object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20 bg-[#222222]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-white">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl color-white">
                Home page
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <p className="leading-relaxed text-white">
              The original homepage presented content in a uniform layout, making it
              difficult to distinguish the importance of each section. Users had to scan
              extensively to find events or branch-specific information.
            </p>
            <p className="pb-15 leading-relaxed py-10 text-white">
              To address this, each section was given a distinct layout to clarify content
              hierarchy. The static hero image was replaced with an event-focused banner
              that highlights upcoming activities and encourages users to visit physical
              stores, reinforcing the bookstore’s community-driven identity.
            </p>
            
            <div
                className="relative w-full aspect-[6326/10222] cursor-zoom-in"
                onClick={() =>
                  setLightboxSrc("/images/blackbondbook/homepage.webp")
                }
              >
                <Image
                  src="/images/blackbondbook/homepage.webp"
                  alt="Homepage"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
    <MotionSection className="px-4 py-16 sm:px-8 lg:px-20 bg-[#222222]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left label */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 text-white">
              <span className="block w-10 h-px bg-gray-600" />
              <h3 className="uppercase tracking-wide text-xl color-white">
                Home page
              </h3>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <p className="leading-relaxed text-white">
              The original homepage presented content in a uniform layout, making it
              difficult to distinguish the importance of each section. Users had to scan
              extensively to find events or branch-specific information.
            </p>
            <p className="pb-15 leading-relaxed py-10 text-white">
              To address this, each section was given a distinct layout to clarify content
              hierarchy. The static hero image was replaced with an event-focused banner
              that highlights upcoming activities and encourages users to visit physical
              stores, reinforcing the bookstore’s community-driven identity.
            </p>
            
            <div
                className="relative w-full aspect-[5044/4484] cursor-zoom-in"
                onClick={() =>
                  setLightboxSrc("/images/blackbondbook/detail.webp")
                }
              >
                <Image
                  src="/images/blackbondbook/detail.webp"
                  alt="Homepage"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  
    
    { /*Book List Page*/ }
    <MotionSection className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Book List Page</h2>
        <p className="mt-5 leading-relaxed">
          The original book list page lacked clear sorting logic, making it difficult
          for users to control how results were displayed.

          After reviewing other bookstore websites, sorting options were reorganized
          to align with common user expectations. Visual hierarchy was applied within
          book cards to improve readability.
        </p>
      </div>
    </MotionSection>

    <MotionSection className="px-4 py-20 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Book Detail Page</h2>
      <p className="leading-relaxed">
        Important book information was previously scattered, making it harder for
        users to quickly assess key details such as authorship, popularity, or
        categories.
      </p>
      <p className="leading-relaxed mt-4">
        The layout was refined by adding a bestseller label, clearly identifying
        the author, and grouping categories into boxed sections. The “Message From”
        section was rearranged to improve reading flow. Additionally, the right-side
        back button was replaced with breadcrumb navigation, and review tabs were
        standardized for consistency across the site.
      </p>
      <p className="leading-relaxed mt-4">Standardized review tab format.</p>
    </MotionSection>

    <MotionSection className="py-20 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Author Page</h2>
      <p className="leading-relaxed">
        Author pages previously lacked visual emphasis, which reduced recognition
        and made it harder for users to connect books with their creators.
      </p>
      <p className="leading-relaxed mt-4">
        Research showed that 4 out of 7 bookstore websites did not include author
        images. In response, the redesign highlights the author’s name more clearly
        and introduces Popular Books and Latest Releases sections to support
        discovery and encourage deeper exploration.
      </p>
    </MotionSection>
  </>
  )
}