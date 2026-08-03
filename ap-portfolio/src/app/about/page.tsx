'use client';

import CustomCursor from "@/components/ui/CustomerCursor";
import SiteNav from "@/components/common/SiteNav";
import StickySection from "@/components/ui/StickySection";
import Footer from "@/components/common/Footer";
import { MotionSection } from "@/components/MotionSection";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/anna/1.jpeg",
    alt: "Anna standing along a mountain road on the Icefields Parkway",
    width: 4032,
    height: 3024,
    rotate: "-rotate-2",
  },
  {
    src: "/images/anna/2.jpeg",
    alt: "Anna overlooking a desert mountain vista",
    width: 4032,
    height: 2268,
    rotate: "rotate-1",
  },
  {
    src: "/images/anna/3.jpeg",
    alt: "Anna taking a mirror selfie in her Best Buy uniform",
    width: 4032,
    height: 3024,
    rotate: "-rotate-1",
  },
  {
    src: "/images/anna/4.jpeg",
    alt: "Anna taking a selfie on a laptop webcam",
    width: 4032,
    height: 3024,
    rotate: "rotate-2",
  },
  {
    src: "/images/anna/5.jpeg",
    alt: "Anna smiling beside a lake surrounded by trees",
    width: 4032,
    height: 3024,
    rotate: "-rotate-2",
  },
  {
    src: "/images/anna/6.JPG",
    alt: "Anna on a suspension bridge overlooking the mountains",
    width: 5712,
    height: 4284,
    rotate: "rotate-1",
  },
  {
    src: "/images/anna/7.jpg",
    alt: "Anna wearing a handwritten ANNA name tag on a denim jacket",
    width: 2080,
    height: 1170,
    rotate: "-rotate-1",
  },
  {
    src: "/images/anna/profile.png",
    alt: "Portrait of Anna Park",
    width: 1171,
    height: 1041,
    rotate: "rotate-2",
  },
  {
    src: "/images/anna/volunteer1.JPG",
    alt: "Volunteer badge from Vancouver Startup Week",
    width: 1170,
    height: 2080,
    rotate: "-rotate-2",
  },
  {
    src: "/images/anna/volunteer4.jpeg",
    alt: "Anna giving a peace sign at a community event",
    width: 4032,
    height: 3024,
    rotate: "rotate-1",
  },
  {
    src: "/images/anna/volunteer5.jpeg",
    alt: "Anna holding a venue map while volunteering",
    width: 4032,
    height: 3024,
    rotate: "-rotate-1",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <CustomCursor/>

      <SiteNav className="ml-5 mt-6 md:ml-10 md:mt-8" />

      <MotionSection className="px-6 lg:px-24 pb-28">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          

          {/* Body: portrait + story */}
          <div className="mt-20 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            {/* Portrait — sticky on desktop */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src="/images/anna/Anna-about.png"
                  alt="Anna Park"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story */}
            <div className="space-y-14">

              <div className="max-w-3xl">
                <h1 className="mt-5 text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                  Hi, I&apos;m Anna Park.
                </h1>
                <p className="mt-6 text-xl lg:text-2xl font-light text-neutral-500 leading-relaxed">
                  I build digital experiences end to end
                </p>
              </div>

              <section>
                <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Background
                </h2>
                <p className="text-lg leading-relaxed text-neutral-700">
                  I started by studying Information Systems in South Korea,
                  where I learned software engineering and telecommunications. During my software engineering internship at ETRI (Electronics and Telecommunications Research Institute), I worked on improving an existing application by identifying usability issues and redesigning both the user experience and the underlying logic. That experience made me realize I was most interested in the connection between design and engineering.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Now
                </h2>
                <p className="text-lg leading-relaxed text-neutral-700">
                  After moving to Canada, I studied UI/UX Design at Cornerstone International Community College of Canada.
                  Since then, I&apos;ve been combining my design education with my software background through projects involving
                  Webflow development and full-stack applications built with Next.js.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                  Today, I enjoy working across both design and development.
                  I like understanding how products work from end to end—from
                  identifying user problems and designing interfaces to building
                  the final experience.
                  I believe good products come from thoughtful design supported by solid engineering.
                </p>
              </section>

              <section className="border-t border-neutral-200 pt-10">
                <p className="text-lg text-neutral-700">
                  Currently looking for the right opportunity in design and
                  development.
                </p>
                
                  <a href="mailto:annapark0828@gmail.com"
                  className="mt-4 inline-block text-lg font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-500"
                >
                  Get in touch →
                </a>
              </section>
            </div>
          </div>
        </div>
      </MotionSection>

      <StickySection/>

      {/* Gallery */}
      <section className="px-6 pb-20 lg:px-24 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Behind the scenes
          </h2>
          <div className="columns-2 gap-4 sm:columns-3 sm:gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 sm:mb-6 ${img.rotate}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
