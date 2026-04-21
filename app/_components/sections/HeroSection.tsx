"use client";

import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  useEffect(() => {
    if (!isImageDialogOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageDialogOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageDialogOpen]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-pulse float-slow absolute left-1/2 top-16 h-56 w-56 -translate-x-[70%] rounded-full bg-cyan/10 blur-3xl sm:top-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="glow-pulse float-slow float-delayed absolute bottom-12 right-0 h-56 w-56 translate-x-1/4 rounded-full bg-purple-shadow/40 blur-3xl sm:bottom-1/4 sm:right-1/3 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="glow-pulse absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-shadow/30 blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[38rem] lg:w-[38rem]" />
      </div>

      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Badge */}
        <Reveal>
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/40 bg-purple-shadow/95 px-4 py-2 text-xs font-medium text-[#67d9f0] shadow-[0_0_0_1px_rgba(103,217,240,0.08),0_14px_40px_rgba(0,0,0,0.22)] sm:mb-8 sm:px-5 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Ready to collaborate
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={120}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <h1 className="mb-0 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-left sm:text-3xl md:text-4xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-[#67d9f0] via-cyan to-grey-blue-leaf bg-clip-text text-transparent">
                Zin Moe Kyaw
              </span>
            </h1>

            <button
              type="button"
              onClick={() => setIsImageDialogOpen(true)}
              className="group shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="Open profile image dialog"
            >
              <img
                src="/image/13548.jpg"
                alt="profile"
                className="h-32 w-32 rounded-full object-cover shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40 md:h-48 md:w-48"
              />
            </button>
          </div>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={220}>
          <p className="m-6 text-lg font-semibold text-[#c8d4e8] sm:mb-4 sm:text-xl md:text-2xl">
            1st Year Web Engineering Student
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#eeeeee] sm:mb-12 sm:text-base md:text-lg">
            I build modern web applications using{" "}
            <span className="font-medium text-sky-400">React</span>,{" "}
            <span className="font-medium text-emerald-400">Vue.js</span>, and{" "}
            <span className="font-medium text-violet-400">C# ASP.NET Core Web API</span>.
            Passionate about clean code and great user experiences.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={380}>
          <div className="mb-12 flex flex-col items-stretch justify-center gap-3 sm:mb-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,180,216,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#009ab8] sm:px-8 sm:py-3.5"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-grey-blue-leaf/50 px-6 py-3 text-center text-sm font-semibold text-[#c8d4e8] transition-all duration-300 hover:-translate-y-1 hover:border-grey-blue-leaf hover:text-white sm:px-8 sm:py-3.5"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        {/* Tech pills */}
        <Reveal delay={460}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { label: "JavaScript", color: "text-yellow-400 border-sky-900/60 bg-[#091f36]" },
              { label: "React", color: "text-sky-400 border-sky-900/60 bg-[#091f36]" },
              { label: "Vue.js", color: "text-emerald-400 border-emerald-900/60 bg-[#091f36]" },
              { label: "C# ASP.NET Core Web API", color: "text-[#a78bfa] border-[#00b4d8]/50 bg-[#091f36]" },
              { label: "TypeScript", color: "text-blue-300 border-blue-900/60 bg-[#091f36]" },
              { label: "shadcn/ui", color: "text-blue-300 border-blue-900/60 bg-[#091f36]" },
            ].map(({ label, color }, index) => (
              <span
                key={label}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold leading-snug transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] sm:px-3.5 ${color}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {isImageDialogOpen ? (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-[#020617]/80 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Profile image preview"
          onClick={() => setIsImageDialogOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[2rem] sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageDialogOpen(false)}
              className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center hover:scale-105 sm:right-2 sm:top-6 sm:h-14 sm:w-20 sm:p-2"
              aria-label="Close profile image dialog"
            >
              <img
                src="/image/remove-svgrepo-com.svg"
                alt="icon"
                className="h-full w-full"
              />
            </button>

            <div className="overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#0b1730] p-2">
              <img
                src="/image/13548.jpg"
                alt="profile"
                className="h-auto w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
