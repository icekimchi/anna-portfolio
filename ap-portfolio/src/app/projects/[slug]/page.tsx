import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import dynamic from "next/dynamic";
import Navbar from "@/components/common/Navbar";
import BackButton from "@/components/ui/BackButton";
import ProjectHero from "@/components/ProjectHero";
import ProjectInfoBar from "@/components/ProjectInfoBar";
import Footer from "@/components/common/Footer";


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const Content = dynamic(
    () => import(`@/components/project/${project.contentComponent}`)
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <BackButton/>
      <ProjectHero
        title = {project.title}
        description={project.description}
        image={project.image}
        role={project.role}
        skills={project.skills}
        date={project.date}
      />
      <Content />
      <Footer/>
    </div>
  );
}