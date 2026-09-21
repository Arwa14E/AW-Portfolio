const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "SQL", "Databases"],
  },
  {
    title: "UI/UX",
    skills: ["Figma", "Responsive Design", "Prototyping", "User Experience"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#7C6FE6]">
            SKILLS
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#181624] sm:text-4xl">
            Tools I use to bring ideas to life.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6F6A7D]">
            A mix of development, design, and problem-solving skills that help
            me build complete digital experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-t border-[#E9E5F2] pt-6"
            >
              <h3 className="text-lg font-semibold text-[#181624]">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F4F1FC] px-4 py-2 text-sm font-medium text-[#6256C9]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}