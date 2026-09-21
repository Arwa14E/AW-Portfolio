import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 pt-5 md:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-[#E9E5F2] bg-white/85 px-5 py-3 shadow-sm backdrop-blur-md">

          <a
            href="#home"
            className="text-xl font-bold tracking-[-0.05em] text-[#181624]"
          >
            AW
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6F6A7D] transition-colors duration-200 hover:text-[#7C6FE6]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#7C6FE6] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6256C9] md:block"
          >
            Let’s talk
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-[#181624] transition-colors hover:bg-[#F4F1FC] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-2 rounded-2xl border border-[#E9E5F2] bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#6F6A7D] transition-colors hover:bg-[#F4F1FC] hover:text-[#7C6FE6]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-[#7C6FE6] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Let’s talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}