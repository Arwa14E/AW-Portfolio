import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[1.75rem] border border-[#E9E5F2] bg-[#F4F1FC] px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#7C6FE6]">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#181624] sm:text-4xl">
              Let’s work together.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#6F6A7D] sm:text-lg">
              Have a project in mind? Send me a message and let’s talk about
              how I can help.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:arwa.eisa.neami@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-[#7C6FE6] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6256C9]"
              >
                <Mail size={16} />
                Email me

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://wa.me/966537416246"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#DDD7EE] bg-white px-5 py-3 text-sm font-semibold text-[#181624] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFFFFF]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}