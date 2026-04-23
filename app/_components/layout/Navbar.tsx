"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="!fixed top-0 left-0 right-0 !z-[500] bg-[#0d171a8f]/90 backdrop-blur-lg border-b border-[#4f5f76]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
          >
            <h3 className="font-bold text-[#D6CFCB]">Zin Moe</h3>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-bold ${
                    isActive
                      ? "text-[#ffffff]"
                      : "text-[#c9c9c9] hover:text-[#000000]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#00b4d8] transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-2xl font-bold bg-[#00b4d8]/90 hover:bg-[#ffffff] text-[#ffffff] hover:text-[#00b4d8]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#4f5f76] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <img src="/image/cross.png" alt="toggle menu" className="w-4 h-4 hover:bg-[#ffee8c]" />
            ) : (
              <img src="/image/navigation-bar.png" alt="toggle menu" className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-[#4f5f76]/20 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-white bg-[#091f36] font-semibold"
                      : "text-[#4f5f76] hover:text-white hover:bg-[#091f36]"
                  }`}
                >
                  {isActive && (
                    <span className="w-1 h-4 rounded-full bg-[#00b4d8] shrink-0" />
                  )}
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-[#67d9f0] hover:text-[#a3edf8] transition-colors"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
