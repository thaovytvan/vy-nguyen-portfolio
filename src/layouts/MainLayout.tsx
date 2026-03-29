import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../components/ui-component/LanguageSwitcher";
import ThemeSwitcher from "../components/ui-component/ThemeSwitcher";
import { useScroll } from "../context/ScrollContext";
import type { SectionRefs } from "../context/ScrollContext";
import { FooterLayout } from "./FooterLayout";
import Chatbot from "../components/ui-component/Chatbot";

const NavItem = ({ 
  section, 
  label, 
  activeSection, 
  handleNavClick 
}: { 
  section: keyof SectionRefs; 
  label: string; 
  activeSection: keyof SectionRefs;
  handleNavClick: (section: keyof SectionRefs) => void;
}) => {
  const isActive = activeSection === section;
  return (
    <NavigationMenu.Item className="pointer-events-auto">
      <button
        onClick={() => handleNavClick(section)}
        className={`relative transition-colors cursor-pointer pointer-events-auto pb-1 ${
          isActive ? "text-primary font-bold" : "hover:text-primary"
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300" />
        )}
      </button>
    </NavigationMenu.Item>
  );
};

const MainLayout = () => {
  const { t } = useTranslation();
  const { scrollToSection, activeSection } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: keyof SectionRefs) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and mount
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden relative bg-bg-base">
      <header className="h-24 w-full flex-none border-b border-border-base glass backdrop-blur-xl z-[100]">
        <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => handleNavClick("hero")}
            className="text-4xl font-black italic tracking-tighter cursor-pointer"
          >
            <span className="text-primary">V</span>
            <span className="text-text-base">N</span>
          </Link>

          <NavigationMenu.Root className="relative z-10 flex w-full justify-end pointer-events-auto">
            <NavigationMenu.List className="flex gap-8 items-center text-text-base font-semibold text-[13px] tracking-wider uppercase pointer-events-auto">
              <NavItem section="about" label={t("nav_about")} activeSection={activeSection} handleNavClick={handleNavClick} />
              <NavItem section="experience" label={t("nav_experience")} activeSection={activeSection} handleNavClick={handleNavClick} />
              <NavItem section="education" label={t("nav_education")} activeSection={activeSection} handleNavClick={handleNavClick} />
              <NavItem section="skills" label={t("nav_skills")} activeSection={activeSection} handleNavClick={handleNavClick} />
              <NavItem section="portfolio" label={t("nav_portfolio")} activeSection={activeSection} handleNavClick={handleNavClick} />

              <NavigationMenu.Item className="pointer-events-auto">
                <button
                  onClick={() => handleNavClick("contact")}
                  className={`btn-primary whitespace-nowrap text-xs py-2 px-6 cursor-pointer pointer-events-auto ${
                    activeSection === "contact" ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                >
                  {t("nav_contact")}
                </button>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <LanguageSwitcher />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <ThemeSwitcher />
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </header>

      <main className="flex-1 w-full overflow-y-auto overflow-x-hidden relative">
        <Outlet />
        <FooterLayout />
      </main>
      <Chatbot />
    </div>
  );
};
export default MainLayout;
