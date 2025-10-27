interface ProjectHeroProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function ProjectHero({ title, description, image, color }: ProjectHeroProps) {
  return (
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
            {title}
          </h1>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="relative aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
