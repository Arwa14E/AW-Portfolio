import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 md:px-8"
    >
      {/* Soft background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[18%] h-72 w-72 rounded-full bg-[#EEEAFE] blur-3xl md:right-[-80px] md:h-96 md:w-96"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">

          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#7C6FE6]" />

            <p className="text-sm font-semibold tracking-[0.12em] text-[#7C6FE6]">
              FRONTEND DEVELOPER · UI/UX DESIGNER
            </p>
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-[#181624] sm:text-6xl md:text-7xl">
            Arwa Alneami
          </h1>

          <h2 className="mt-5 max-w-2xl text-2xl font-medium leading-relaxed tracking-[-0.025em] text-[#6256C9] sm:text-3xl">
            Frontend Developer creating modern digital experiences.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6F6A7D] sm:text-lg">
            I design and build modern, responsive websites with a focus on
            detail, usability, and clean code.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7C6FE6] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6256C9]"
            >
              View my work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[#E4E0F2] bg-white px-6 py-3.5 text-sm font-semibold text-[#181624] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F4F1FC]"
            >
              Let’s talk
            </a>
          </div>

          <div className="mt-12 border-t border-[#E9E5F2] pt-5">
            <p className="text-sm text-[#9691A5]">
              Based in Riyadh · Available for freelance projects
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}