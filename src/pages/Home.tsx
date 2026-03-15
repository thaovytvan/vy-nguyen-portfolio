import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import SkillSection from "../components/SkillSection";
import { useScroll } from "../context/ScrollContext";
import { useInView } from "../hooks/useInView";

const Home = () => {
  const { sectionRefs } = useScroll();
  const { hero, about, experience, education, skills, portfolio, contact } = sectionRefs;

  // Scroll reveal hooks (attached to sectionRefs)
  useInView(0.01, hero);
  useInView(0.12, about);
  useInView(0.1, experience);
  useInView(0.1, education);
  useInView(0.1, skills);
  useInView(0.1, portfolio);
  useInView(0.1, contact);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <HeroSection ref={hero} />
      {/* About Me Section */}
      <AboutMeSection ref={about} />
      {/* Experience Section */}
      <ExperienceSection ref={experience} />
      {/* Education Section */}
      <EducationSection ref={education} />
      {/* Skills Section */}
      <SkillSection ref={skills} />
      {/* Portfolio Section */}
      <PortfolioSection ref={portfolio} />
      {/* Contact Section */}
      <ContactSection ref={contact} />
    </div>
  );
};

export default Home;
