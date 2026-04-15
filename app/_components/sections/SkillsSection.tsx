import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "React", icon: "⚛️", level: "advanced" as const },
      { name: "Vue.js", icon: "💚", level: "advanced" as const },
      { name: "TypeScript", icon: "🔷", level: "intermediate" as const },
      { name: "JavaScript", icon: "🟡", level: "advanced" as const },
      { name: "HTML & CSS", icon: "🌐", level: "advanced" as const },
      { name: "Tailwind CSS", icon: "🎨", level: "intermediate" as const },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "C# ASP.NET Core", icon: "🔵", level: "advanced" as const },
      { name: "Web API", icon: "🔌", level: "advanced" as const },
      { name: "REST APIs", icon: "📡", level: "advanced" as const },
      { name: "Entity Framework", icon: "🗄️", level: "intermediate" as const },
      { name: "LINQ", icon: "🔎", level: "intermediate" as const },
    ],
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    skills: [
      { name: "MS SQL", icon: "💾", level: "intermediate" as const },
      { name: "MySQL", icon: "🐬", level: "intermediate" as const },
      { name: "PostgreSQL", icon: "🐘", level: "advanced" as const },
      { name: "Git & GitHub", icon: "🐙", level: "intermediate" as const },
      { name: "Postman", icon: "📮", level: "intermediate" as const },
      { name: "Visual Studio", icon: "🟣", level: "intermediate" as const },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#091f36]/30 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tech Stack"
          title="Technologies I Work With"
          description="Skills developed through coursework, personal projects, and continuous self-learning"
        />

        

                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
                      className="rounded-2xl border border-[#4f5f76]/30 bg-[#091f36] p-4 sm:p-6"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[#c8d4e8] uppercase tracking-widest mb-5">
                <span>{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
