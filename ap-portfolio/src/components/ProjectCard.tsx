import { Span } from "next/dist/trace";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      {/* Text */}
      <div className="p-5">
        <h3 className = "text-x1 font-semibold mb-2">{title}</h3>
        <p className="text-gray-600-mb-4">{description}</p>
        <span className="text-blue-600 hover:underline">
          View Project →
        </span>
      </div>
    </a> 
  );
}
