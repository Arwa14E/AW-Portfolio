import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Custom, responsive websites built around your brand, goals, and audience.",
    details: ["React", "Responsive Design", "Performance"],
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused pages that present your business clearly and create a strong first impression.",
    details: ["Modern UI", "Mobile First", "Clear CTA"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Clean and intuitive interfaces designed to make digital products simple and enjoyable to use.",
    details: ["Figma", "Wireframes", "Prototyping"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#7C6FE6]">
            SERVICES
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#181624] sm:text-4xl">
            What I can build for you.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#6F6A7D] sm:text-lg">
            From a simple landing page to a complete business website, I
            create digital experiences that are clear, responsive, and easy
            to use.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-[#E9E5F2] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#7C6FE6]/5"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#7C6FE6]">
                  {service.number}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-[#B1ABC1] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7C6FE6]"
                />
              </div>

              <h3 className="mt-8 text-lg font-bold tracking-[-0.02em] text-[#181624]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6F6A7D]">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full bg-[#F4F1FC] px-3 py-1.5 text-xs font-medium text-[#6256C9]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}