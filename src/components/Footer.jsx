const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Arwa14E",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arwaneami",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E9E5F2] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <a
            href="#home"
            className="text-lg font-bold tracking-[-0.04em] text-[#181624]"
          >
            AW
          </a>

          <p className="mt-1 text-sm text-[#9691A5]">
            Designing & building digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#6F6A7D] transition-colors duration-200 hover:text-[#7C6FE6]"
            >
              {social.label}
            </a>
          ))}
        </div>

      </div>

      <div className="mx-auto mt-7 max-w-6xl border-t border-[#F0EDF5] pt-5">
        <p className="text-xs text-[#A5A0B0]">
          © {new Date().getFullYear()} Arwa Alneami. All rights reserved.
        </p>
      </div>
    </footer>
  );
}