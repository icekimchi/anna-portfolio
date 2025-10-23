import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-12">
          <ProjectCard
            title="Camping Site Search Application"
            description="A visual exploration of social patterns through generative design."
            link="#"
            image=""
          />
          <ProjectCard
            title="AI Agent Application"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
          <ProjectCard
            title="Seoul Public Bicycle Visualization"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
          <ProjectCard
            title="Sejong City 119 Visualization"
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
        </div>
      </section>
    </main>
  );
}
