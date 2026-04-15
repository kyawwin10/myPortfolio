import SectionTitle from "@/app/_components/ui/SectionTitle";
import ProjectCard from "@/app/_components/ui/ProjectCard";

const projects = [
  {
    title: "HR Management System",
    description:
      "As part of my professional experience, I have worked on developing HR Management software, implementing key features such as employee information management, attendance tracking, and improving workflow efficiency within the organization.",
    tech: ["Vue.js", "Vuetify", "C# ASP.NET Core", "Entity Framework", "SQL Server"],
    gradientClass: "bg-linear-to-r from-[#00b4d8] to-[#4f5f76]",
    githubUrl: "#",
  },
  {
    title: "RM and ATM System",
    description:
      "At the beginning of my professional journey, I worked on projects as part of my training, including developing APIs for a Retail Management System and an ATM system. On the frontend side, I implemented API integration using technologies such as Vue.js, React with TypeScript, Tailwind CSS, shadcn/ui, and TanStack Query. These experiences helped me build a solid foundation in both backend and frontend development.",
    tech: ["Vue(TypeScript", "React(TypeScript", "C# ASP.NET Core", "REST API", "SQL Server"],
    gradientClass: "bg-linear-to-r from-[#4f5f76] to-[#091f36]",
    githubUrl: "https://github.com/kyawwin10/RM-ATM-API-Project",
  },
  {
    title: "Ecommerce & POS System",
    description:
      "I have also worked on personal projects, including developing an E-commerce system and a POS (Point of Sale) system. Through these projects, I gained hands-on experience in building real-world applications, managing product data, handling transactions, and designing user-friendly interfaces.",
    tech: ["React", "TypeScript", "Shadcn", "Tanstack Query", "C# ASP.NET Core", "MS SQL"],
    gradientClass: "bg-linear-to-r from-[#00b4d8] to-[#0f2862]",
    githubUrls: [
      "https://github.com/kyawwin10/Ecom-POS-admin",
      "https://github.com/kyawwin10/Ecom-POS_Cus",
    ],
    demoImages: [
      "/image/live_demo.png",
      "/image/live_demo2.png",
      "/image/live_demo3.png",
      "/image/live_demo4.png",
    ],
    demoUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="My Projects"
          title="Featured Projects"
          description="Web applications I built during my studies, combining modern frontends with robust ASP.NET Core backends"
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="https://github.com/kyawwin10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-grey-blue-leaf/40 px-5 py-3 text-sm font-medium text-grey-blue-leaf transition-colors hover:border-grey-blue-leaf hover:text-white sm:px-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.43 11.43 0 013 .4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
