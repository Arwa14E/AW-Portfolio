export default function About() {
  return (
    <section id="about" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#7C6FE6]">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#181624] sm:text-4xl">
            I turn ideas into clean digital experiences.
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-[#6F6A7D]">
            I’m Arwa, a Frontend Developer and UI/UX Designer with a
            background in programming and databases. I enjoy turning ideas
            into clean, responsive, and easy-to-use websites.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#6F6A7D]">
            My approach combines thoughtful design with modern web
            technologies to create digital experiences that look polished,
            work smoothly, and feel simple to use.
          </p>

          <div className="mt-10 grid gap-8 border-t border-[#E9E5F2] pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xl font-bold text-[#181624]">
                Frontend
              </p>

              <p className="mt-2 text-sm leading-6 text-[#9691A5]">
                React · JavaScript · Tailwind
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-[#181624]">
                UI/UX
              </p>

              <p className="mt-2 text-sm leading-6 text-[#9691A5]">
                Figma · Responsive Design
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-[#181624]">
                Education
              </p>

              <p className="mt-2 text-sm leading-6 text-[#9691A5]">
                Computer Science · 2028
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}