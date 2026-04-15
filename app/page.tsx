import HeroSection from "./_components/sections/HeroSection";
import AboutSection from "./_components/sections/AboutSection";
import SkillsSection from "./_components/sections/SkillsSection";
import ProjectsSection from "./_components/sections/ProjectsSection";
import EducationSection from "./_components/sections/EducationSection";
import ContactSection from "./_components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
