interface ProjectHeroProps {
  title: string;
  description: string;
  image: string;
  role?: string;
  skills: string[];
  date?: string;
}

export default function ProjectHero({
  title,
  description,
  image,
  role,
  skills = [],
  date,
}: ProjectHeroProps) {
  return (
    <section className="bg-white px-6 sm:px-10 lg:px-20 py-10">
      {/* Top content */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left */}
        <div className="lg:col-span-2">
          <h1 className="text-gray-900 font-semibold leading-tight text-[64px]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-gray-600 text-lg">
            {description}
          </p>
          {date && (
            <span className="inline-block mt-4 text-xs text-gray-400 uppercase tracking-wide">
              {date}
            </span>
          )}
        </div>

        {/* Right meta */}
        <div className="space-y-6 text-sm text-gray-500">
          {role && (
            <div>
              <p className="uppercase text-xs tracking-wide mb-1">Role</p>
              <p className="text-gray-900">{role}</p>
            </div>
          )}

          {skills.length > 0 && (
            <div>
              <p className="uppercase text-xs tracking-wide mb-2">Service</p>
              <ul className="space-y-1">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-900">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="max-w-7xl mx-auto mt-20">
        <img
          src={image}
          alt={title}
          className="w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
