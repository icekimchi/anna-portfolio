import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to My Portfolio ✨
        </h1>
        <p className="text-lg mb-12">
          Hi! I’m Anna — a Software Engineer who loves designing and creating thoughtful digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="AI agent Application"
            description="A visual exploration of social patterns through generative design."
            link="#"
            image=""
          />
          <ProjectCard
            title=""
            description="This site you’re looking at — designed and built with Next.js + Tailwind CSS."
            link="#"
            image=""
          />
        </div>
      </section>
    </main>
  );
}
