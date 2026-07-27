interface ProjectHeroProps {
  title: string;
  description: string;
  image: string;
  role?: string;
  skills: string[];
  date?: string;
  team?: string;
  tags?: string[];
  liveUrl?: string;
}

export default function ProjectHero({
  title,
  description,
  image,
  role,
  skills = [],
  date,
  team,
  tags = [],
  liveUrl,
}: ProjectHeroProps) {
  return (
    <>
    {/* Hero Image */}
    <div>
      <img
        src={image}
        alt={title}
        className="w-full h-[480px] object-cover"
      />
    </div>

    <section className="bg-white px-6 sm:px-10 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wide border border-gray-300 px-2 py-1 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h1 className="text-gray-900 font-semibold leading-tight text-[48px]">
            {title}
          </h1>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-neutral-700 hover:shadow-lg"
            >
              Visit live site
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          )}
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-16 border-t border-b border-gray-300 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {date && (
            <div>
              <p className="uppercase tracking-wide text-gray-400 mb-1">
                Timeline
              </p>
              <p className="text-gray-900">{date}</p>
            </div>
          )}

          {team && (
            <div>
              <p className="uppercase tracking-wide text-gray-400 mb-1">
                Team
              </p>
              <p className="text-gray-900">{team}</p>
            </div>
          )}

          {role && (
            <div>
              <p className="uppercase tracking-wide text-gray-400 mb-1">
                Role
              </p>
              <p className="text-gray-900">{role}</p>
            </div>
          )}

          {skills.length > 0 && (
            <div>
              <p className="uppercase tracking-wide text-gray-400 mb-1">
                Skills
              </p>
              <p className="text-gray-900">
                {skills.join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  </>
  );
}