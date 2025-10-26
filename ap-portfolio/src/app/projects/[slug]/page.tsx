import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft } from 'lucide-react';
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Image from "next/image"; 

interface Props {
  params: { slug: string };
}

export default async function ProjectDetailPage(props: Props) {
  const { params } = await Promise.resolve(props); 
  const project = getProjectBySlug(params.slug);

  if (!project) return <div>Couldn't find the project</div>;


  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Link
        href="/"
        className="fixed top-20 left-4 sm:left-8 z-50 inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
      >
        <ArrowLeft size={20} />
        Back
      </Link>

      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-gray-900 mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: "1.1",
                fontWeight: "600",
              }}
            >
              {project.title}
            </h1>
            <p className="text-gray-600">{project.description}</p>
          </div>

          <div className="relative aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl shadow"
            />
          </div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white/60 mb-2 uppercase tracking-wider">Project</h3>
            <p>{project.title}</p>
          </div>
          <div>
            <h3 className="text-white/60 mb-2 uppercase tracking-wider">Date</h3>
            <p>{project.date}</p>
            <p className="text-white/60">(1.5 months)</p>
          </div>
          <div>
            <h3 className="text-white/60 mb-2 uppercase tracking-wider">Role</h3>
            <p>UI/UX Designer</p>
          </div>
          <div>
            <h3 className="text-white/60 mb-2 uppercase tracking-wider">Skills</h3>
            <div className="space-y-1">
              {project.skills.map((skill) => (
                <p key={skill} className="text-white/90">{skill}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/pricesnap_problem.png"  
            alt="Overview Preview"
            className="w-full rounded-2xl shadow-lg mb-10 object-cover"
          />
          <h2 className="text-gray-900 font-semibold text-2xl mb-6">Overview</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4">
            In Vancouver, the same product is often sold at different prices across stores. 
            When I first arrived in Vancouver, I was surprised by these price differences. 
            This application allows users to conveniently compare prices among different stores.
          </p>
          <p className="text-gray-700 font-sans leading-relaxed">
            After conducting market research, I found that there were already various websites that compare product prices across stores.
            However, due to the following issues, I decided to develop PriceSnap.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-gray-900 font-semibold text-2xl mb-6">Problem</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">
    
              </p>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>Users must visit each market’s website to check prices.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>The service cannot be used without creating an account.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>It is difficult to browse and compare across different markets.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900  font-semibold text-2xl mb-6">Solution</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">
                
              </p>
              <ul className="space-y-3  font-sans text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>Integrated into a single app</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>Quick search without the need to create an account</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>UI design for price comparison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 font-semibold text-2xl mb-6">Breifing</h2>
          <img
            src="/images/Purpose goal.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 mb-6 font-semibold text-2xl py-12">Design Concept</h2>
          <img
            src="/images/pricesnap_design.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 font-semibold text-2xl mb-6 py-12">Sitemap</h2>
          <img
            src="/images/sitemap.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 font-semibold text-2xl mb-6 py-12">Wireframe</h2>
          <img
            src="/images/wireframe.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />

          <h2 className="text-gray-900 font-semibold text-2xl mb-6 py-12">Mockup</h2>
          <img
            src="/images/mockup.png"  
            alt="Design Preview"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}