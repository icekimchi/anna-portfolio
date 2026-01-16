interface ProjectInfoBarProps {
  title: string;
  date: string;
  role: string;
  skills: string[];
}

export default function ProjectInfoBar({ title, date, role, skills }: ProjectInfoBarProps) {
  return (
    <section className="bg-slate-900 text-white py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white/60 mb-2 uppercase tracking-wider">Project</h3>
          <p>{title}</p>
        </div>
        <div>
          <h3 className="text-f/60 mb-2 uppercase tracking-wider">Date</h3>
          <p>{date}</p>
        </div>
        <div>
          <h3 className="text-white/60 mb-2 uppercase tracking-wider">Role</h3>
          <p>{role}</p>
        </div>
        <div>
          <h3 className="text-white/60 mb-2 uppercase tracking-wider">Skills</h3>
          <div className="space-y-1">
            {skills.map((skill) => (
              <p key={skill} className="text-white/90">{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}