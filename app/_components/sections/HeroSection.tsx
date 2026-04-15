export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-[70%] rounded-full bg-cyan/10 blur-3xl sm:top-1/4 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="absolute bottom-12 right-0 h-56 w-56 translate-x-1/4 rounded-full bg-purple-shadow/40 blur-3xl sm:bottom-1/4 sm:right-1/3 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-shadow/30 blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[38rem] lg:w-[38rem]" />
      </div>

      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/40 bg-purple-shadow px-4 py-2 text-xs font-medium text-[#67d9f0] sm:mb-8 sm:px-5 sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Ready to collaborate
        </div>

        {/* Heading */}
        <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-[#67d9f0] via-cyan to-grey-blue-leaf bg-clip-text text-transparent">
            Zin Moe Kyaw
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-3 text-lg font-semibold text-[#c8d4e8] sm:mb-4 sm:text-xl md:text-2xl">
          1st Year Web Engineering Student
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#eeeeee] sm:mb-12 sm:text-base md:text-lg">
          I build modern web applications using{" "}
          <span className="text-sky-400 font-medium">React</span>,{" "}
          <span className="text-emerald-400 font-medium">Vue.js</span>, and{" "}
          <span className="text-violet-400 font-medium">C# ASP.NET Core Web API</span>.
          Passionate about clean code and great user experiences.
        </p>

        {/* CTAs */}
        <div className="mb-12 flex flex-col items-stretch justify-center gap-3 sm:mb-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-shadow transition-colors hover:bg-[#009ab8] sm:px-8 sm:py-3.5"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-grey-blue-leaf/50 px-6 py-3 text-center text-sm font-semibold text-[#c8d4e8] transition-colors hover:border-grey-blue-leaf hover:text-white sm:px-8 sm:py-3.5"
          >
            Contact Me
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {[
            { label: "JavaScript", color: "text-yellow-400 border-sky-900/60 bg-[#091f36]" },
            { label: "React", color: "text-sky-400 border-sky-900/60 bg-[#091f36]" },
            { label: "Vue.js", color: "text-emerald-400 border-emerald-900/60 bg-[#091f36]" },
            { label: "C# ASP.NET Core Web API", color: "text-[#a78bfa] border-[#00b4d8]/50 bg-[#091f36]" },
            { label: "TypeScript", color: "text-blue-300 border-blue-900/60 bg-[#091f36]" },
            { label: "shadcn/ui", color: "text-blue-300 border-blue-900/60 bg-[#091f36]" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold leading-snug sm:px-3.5 ${color}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
