import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const courses = [
  "Web Application Development",
  "Software Engineering",
  "Database Systems",
  "Object-Oriented Programming",
  "Javascript ES6",
  "React Hooks & State Management",
  "Folder Structure & Component Design",
  "UI/UX Design Principles",
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-[#091f36]/30 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Education"
          title="My Academic Journey"
          description="Where I study and what I am learning"
        />

        <Reveal className="mx-auto max-w-3xl">
          {/* Timeline item */}
          <div className="relative rounded-2xl border border-[#4f5f76]/30 bg-[#091f36] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00b4d8]/40 sm:p-8">
            {/* Ongoing badge */}
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-green-800/60 bg-green-950/60 px-3 py-1 text-xs font-semibold text-green-400 sm:absolute sm:top-6 sm:right-6 sm:mb-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Ongoing
            </span>

            <div className="flex flex-col gap-5 sm:flex-row">
              {/* Icon */}
              <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#4f5f76]/30 bg-[#0f2862] text-2xl">
                🎓
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white leading-snug sm:pr-28">
                  BA in HISTORY
                </h3>
                <p className="text-[#67d9f0] font-semibold text-sm mt-1">
                  Dagon University
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 mb-5">
                  <span className="text-xs text-[#4f5f76]">2019 – Present</span>
                  <span className="text-[#4f5f76]/40 text-xs">·</span>
                  <span className="text-xs text-[#4f5f76]">Final Year</span>
                  <span className="text-[#4f5f76]/40 text-xs">·</span>
                  <span className="text-xs text-[#4f5f76]">Expected Graduation: 2027</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug sm:pr-28">
                  Page Myanmar(Web Engineering School)
                </h3>

                <p className="mt-5 mb-6 text-sm leading-relaxed text-[#a0b4cc] sm:mt-6">
                  Currently in my fourth year, gaining deep knowledge in modern
                  web development — from designing RESTful APIs with C# ASP.NET
                  Core to building reactive UIs with React and Vue.js. The
                  program emphasizes both theory and hands-on project work.
                </p>

                {/* Relevant Courses */}
                <div>
                  <p className="text-xs font-semibold text-[#4f5f76] uppercase tracking-wider mb-3">
                    Relevant Courses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-[#4f5f76]/30 bg-[#0f2862] px-2.5 py-1 text-xs leading-snug text-[#4f5f76]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
