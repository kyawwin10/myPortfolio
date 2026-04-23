import type { CSSProperties } from "react";

import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";
import Reveal from "../ui/Reveal";
import Image from "next/image";

const skillCategories = [
  {
    title: "Frontend",
    Image: "/image/frontend-icon.png",
    skills: [
      { name: "React", icon: "/image/preact-js-icon.png", level: "advanced" as const },
      { name: "Vue.js", icon: "/image/vue-js-icon.png", level: "advanced" as const },
      { name: "JavaScript", icon: "/image/javascript-icon.png", level: "advanced" as const },
      { name: "TypeScript", icon: "/image/typescript-icon.png", level: "intermediate" as const },
      { name: "HTML & CSS", icon: "/image/html-icon.png", level: "advanced" as const },
      { name: "Tailwind CSS", icon: "/image/tailwind-css-icon.png", level: "intermediate" as const },
    ],
  },
  {
    title: "Backend",
    Image: "/image/backend-icon.png",
    skills: [
      { name: "C# ASP.NET Core", icon: "/image/c-sharp-icon.png", level: "advanced" as const },
      { name: "Web API", icon: "/image/web-api-icon.png", level: "advanced" as const },
      { name: "REST APIs", icon: "/image/rest-api-icon.png", level: "advanced" as const },
      { name: "Entity Framework", icon: "/image/entity.png", level: "intermediate" as const },
      { name: "LINQ", icon: "/image/linq-icon.png", level: "intermediate" as const },
    ],
  },
  {
    title: "Database & Tools",
    Image: "/image/db-icon.png",
    skills: [
      { name: "MS SQL", icon: "/image/ms-sql.jpg", level: "intermediate" as const },
      { name: "MySQL", icon: "/image/mysql-icon.png", level: "intermediate" as const },
      { name: "PostgreSQL", icon: "/image/postgresql-icon.png", level: "advanced" as const },
      { name: "Git & GitHub", icon: "/image/git-icon.png", level: "intermediate" as const },
      { name: "Postman", icon: "/image/postman-icon.png", level: "intermediate" as const },
      { name: "Visual Studio", icon: "/image/visual-studio-code-icon.png", level: "intermediate" as const },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-purple-shadow/30 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tech Stack"
          title="Technologies I Work With"
          description="Skills developed through coursework, personal projects, and continuous self-learning"
        />

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 120}>
              <div className="rounded-2xl border border-[#c9c9c9] bg-purple-shadow/95 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#c9c9c9]">
                  <Image src={category.Image} alt={category.title} width={24} height={24} className="bg-[#c2c2c2] p-1 rounded-sm" />
                  {category.title}
                </h3>
                <div
                  className="skills-marquee"
                  style={
                    {
                      "--skills-marquee-duration": `${30 + index * 6}s`,
                    } as CSSProperties
                  }
                >
                  <div
                    className={`skills-marquee-track ${index % 2 === 1 ? "skills-marquee-track-reverse" : ""}`}
                  >
                    {[0, 1].map((copyIndex) => (
                      <div
                        key={`${category.title}-${copyIndex}`}
                        className="skills-marquee-group"
                        aria-hidden={copyIndex === 1}
                      >
                        {category.skills.map((skill) => (
                          <SkillBadge key={`${skill.name}-${copyIndex}`} {...skill} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
