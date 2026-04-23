import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

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
          <Reveal className="flex flex-col items-center gap-5 sm:gap-6" variant="left">
            <div className="float-slow flex h-40 w-40 items-center justify-center rounded-2xl bg-[#535e5f] from-purple-shadow via-blue-popsicle to-[#1a3070] text-6xl shadow-2xl shadow-purple-shadow/50 sm:h-52 sm:w-52 sm:text-7xl">
              <img src="/image/computer-icon.png" alt="Computer Icon" />
            </div>
            <div className="grid w-full max-w-xs grid-cols-3 gap-3 sm:gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#c9c9c9] bg-purple-shadow p-3 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-4"
                >
                  <p className="text-2xl font-extrabold text-[#15cedb]">{value}</p>
                  <p className="mt-0.5 text-xs text-[#c9c9c9]">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Text */}
          <Reveal className="space-y-5 text-sm sm:text-base" delay={140}>
            <p className="text-[#c9c9c9] leading-relaxed">
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
            <p className="text-[#c9c9c9] leading-relaxed">
              I enjoy the full picture — from designing a database schema to
              crafting a smooth UI. I&apos;m always exploring new tools and best
              practices to grow as a developer.
            </p>

            
            <div className="flex flex-wrap gap-2.5 pt-2 sm:gap-3">
              {[
                { emoji: "/image/graduation-icon.png", label: "Web Engineering" },
                { emoji: "/image/pin-location-icon.png", label: "Yangon" },
                { emoji: "/image/date-and-time-icon.png", label: "Expected grad: 2027" },
                { emoji: "/image/developer-icon.png", label: "Full-Stack Dev" },
              ].map(({ emoji, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-grey-blue-leaf/30 bg-[#c9c9c9] px-3 py-1.5 text-xs text-[#000000] sm:text-sm"
                >
                  <img src={emoji} alt="" className="h-4 w-4 object-contain" />
                  {label}
                </span>
              ))}
            </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
}
