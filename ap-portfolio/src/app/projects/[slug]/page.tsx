import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import ProjectHero from "@/components/ProjectHero";
import ProjectInfoBar from "@/components/ProjectInfoBar";


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const Content = dynamic(
    () => import(`@/components/projectContents/${project.contentComponent}`)
  );

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <BackButton/>
      <ProjectHero
        title={project.title}
        description={project.description}
        image={project.image}
        color="blue"
      />
      <ProjectInfoBar
        title={project.title}
        date={project.date}
        role={project.role}
        skills={project.skills}
      />
      <Content />
    </div>
  );
}