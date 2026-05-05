import SectionTitle from "@/app/_components/ui/SectionTitle";
import ProjectCard from "@/app/_components/ui/ProjectCard";
import Reveal from "@/app/_components/ui/Reveal";

const sharedDemoImages = [
  "/image/live_demo.png",
  "/image/live_demo2.png",
  "/image/live_demo3.png",
  "/image/live_demo4.png",
];

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
    tech: ["Vue(TypeScript)", "React(TypeScript)", "C# ASP.NET Core", "REST API", "SQL Server"],
    gradientClass: "bg-linear-to-r from-[#4f5f76] to-[#091f36]",
    githubUrl: "https://github.com/kyawwin10/RM-ATM-API-Project",
  },
  {
    title: "Ecommerce and POS System",
    description:
      "I have also worked on personal projects, including developing an E-commerce system and a POS (Point of Sale) system. Through these projects, I gained hands-on experience in building real-world applications, managing product data, handling transactions, and designing user-friendly interfaces.",
    tech: ["React", "TypeScript", "Shadcn", "Tanstack Query", "C# ASP.NET Core", "MS SQL"],
    gradientClass: "bg-linear-to-r from-[#00b4d8] to-[#0f2862]",
    githubUrls: [
      "https://github.com/kyawwin10/Ecom-POS-admin",
      "https://github.com/kyawwin10/Ecom-POS_Cus",
    ],
    demoImages: sharedDemoImages,
    demoUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24">
      <div
        id="projects-gallery-portal"
        className="pointer-events-none absolute inset-0 z-40"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="My Projects"
          title="Featured Projects"
          description="Web applications I built during my studies, combining modern frontends with robust ASP.NET Core backends"
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 140} variant="scale" className="h-full">
              <ProjectCard {...project} galleryContainerId="projects-gallery-portal" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 text-center sm:mt-12" delay={180}>
          <a
            href="https://github.com/kyawwin10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9c9c9] inline-flex items-center gap-2 rounded-full border border-grey-blue-leaf/40 p-2 text-md font-medium text-grey-blue-leaf transition-all duration-300 hover:-translate-y-1 hover:border-[#c9c9c9] hover:bg-[#695050] sm:px-6"
          >
            <img src="/image/github-icon.png" alt="icon" className="h-6 w-6" />
            <span className="text-[#000000] hover:text-[#C9C9C9]">View All on GitHub</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
