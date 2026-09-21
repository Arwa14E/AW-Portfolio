import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#7C6FE6]">
            SELECTED WORK
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#181624] sm:text-4xl">
            Projects I’m proud to build.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6F6A7D]">
            A selection of websites and digital experiences designed and
            developed with a focus on clarity, usability, and detail.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#E9E5F2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7C6FE6]/5 md:p-10"
            >
              {index === 0 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-[#F1EEFC] blur-3xl"
                />
              )}

              <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[#7C6FE6]">
                      0{index + 1}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#C9C4D6]" />

                    <span className="text-sm font-medium text-[#9691A5]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-[#181624] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#6F6A7D]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#F4F1FC] px-3.5 py-2 text-xs font-medium text-[#6256C9]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full border border-[#E4E0F2] bg-white px-5 py-3 text-sm font-semibold text-[#181624] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F4F1FC]"
                    >
                      View project
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-[#EEEAF5] px-5 py-3 text-sm font-medium text-[#AAA5B5]">
                      Coming soon
                    </span>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}