import SectionTitle from "../ui/SectionTitle";

const stats = [
  { value: "4th", label: "Year" },
  { value: "3+", label: "Projects Built" },
  { value: "3", label: "Tech Stacks" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="About Me"
          title="Who I Am"
          description="A little bit about my background, journey, and what drives me"
        />

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center gap-5 sm:gap-6">
            <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-grey-blue-leaf/30 bg-linear-to-br from-purple-shadow via-blue-popsicle to-[#1a3070] text-6xl shadow-2xl shadow-purple-shadow/50 sm:h-52 sm:w-52 sm:text-7xl">
              👨‍💻
            </div>
            <div className="grid w-full max-w-xs grid-cols-3 gap-3 sm:gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-grey-blue-leaf/30 bg-purple-shadow p-3 text-center sm:p-4"
                >
                  <p className="text-2xl font-extrabold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-grey-blue-leaf">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-sm sm:text-base">
            <p className="text-[#eeeeee] leading-relaxed">
              My frontend journey started with{" "}
              <span className="text-sky-400 font-medium">React</span> and
              expanded into{" "}
              <span className="text-emerald-400 font-medium">Vue.js</span>,
              while on the backend I work with{" "}
              <span className="text-[#67d9f0] font-medium">
                C# ASP.NET Core Web API
              </span>{" "}
              to build robust and scalable REST services.
            </p>
            <p className="text-[#eeeeee] leading-relaxed">
              I enjoy the full picture — from designing a database schema to
              crafting a smooth UI. I&apos;m always exploring new tools and best
              practices to grow as a developer.
            </p>

            
            <div className="flex flex-wrap gap-2.5 pt-2 sm:gap-3">
              {[
                { emoji: "🎓", label: "Web Engineering" },
                { emoji: "📍", label: "Yangon" },
                { emoji: "📅", label: "Expected grad: 2027" },
                { emoji: "🌐", label: "Full-Stack Dev" },
              ].map(({ emoji, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-grey-blue-leaf/30 bg-purple-shadow px-3 py-1.5 text-xs text-grey-blue-leaf sm:text-sm"
                >
                  <span>{emoji}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
