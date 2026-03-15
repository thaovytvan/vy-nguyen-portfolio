import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass
} from "react-icons/fa";
import MarqueeRow from "./MarqueeRow";
import SectionTitle from "./ui-component/SectionTitle";
import SkillItem from "./ui-component/SkillItem";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiAntdesign,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { 
  FaUserTie, 
  FaTasks, 
  FaUserCheck, 
  FaUsers, 
  FaLightbulb,
  FaBrain
} from "react-icons/fa";

const SkillSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div ref={ref} className="w-full relative pb-32 z-10 glass border-t-0">
      <div className="max-w-[1200px] mx-auto px-8 relative pt-32">
        <div className="reveal-up">
          <SectionTitle>{t("skills_title")}</SectionTitle>
        </div>

        <div className="max-w-5xl mx-auto mt-16 space-y-16">
          {/* Using Now */}
          <div>
            <h3 className="text-lg font-bold tracking-[0.2em] text-text-base uppercase mb-4 text-center">
              {t("skills_using")}
            </h3>
            <MarqueeRow speed="35s">
              <SkillItem
                icon={<FaHtml5 className="size-16 text-[#e34c26]" />}
                name="HTML5"
              />
              <SkillItem
                icon={<FaCss3Alt className="size-16 text-[#2965f1]" />}
                name="CSS3"
              />
              <SkillItem
                icon={<FaSass className="size-16 text-[#cc6699]" />}
                name="SASS"
              />
              <SkillItem
                icon={<BiLogoJavascript className="size-16 text-[#f0db4f]" />}
                name="JAVASCRIPT"
              />
              <SkillItem
                icon={<FaReact className="size-16 text-[#61dbfb]" />}
                name="REACT"
              />
              <SkillItem
                icon={<FaBootstrap className="size-16 text-[#7952b3]" />}
                name="BOOTSTRAP"
              />
              <SkillItem
                icon={<SiAntdesign className="size-16 text-[#0170fe]" />}
                name="ANT DESIGN"
              />
              <SkillItem
                icon={<SiTailwindcss className="size-16 text-[#38b2ac]" />}
                name="TAILWIND"
              />
              <SkillItem
                icon={<FaGitAlt className="size-16 text-[#f34f29]" />}
                name="GIT"
              />
              <SkillItem
                icon={<FaFigma className="size-16 text-[#f24e1e]" />}
                name="FIGMA"
              />
            </MarqueeRow>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-lg font-bold tracking-[0.2em] text-text-base uppercase mb-4 text-center">
              {t("skills_learning")}
            </h3>
            <MarqueeRow reverse speed="25s">
              <SkillItem
                icon={<FaNodeJs className="size-16 text-[#68a063]" />}
                name="NODEJS"
              />
              <SkillItem
                icon={<SiMysql className="size-16 text-[#00758f]" />}
                name="MySQL"
              />
              <SkillItem
                icon={<SiMongodb className="size-16 text-[#4DB33D]" />}
                name="MONGODB"
              />
              <SkillItem
                icon={<SiTypescript className="size-16 text-[#007acc]" />}
                name="TYPESCRIPT"
              />
              <SkillItem
                icon={<FaNodeJs className="size-16 text-[#68a063]" />}
                name="NODEJS"
              />
              <SkillItem
                icon={<SiMysql className="size-16 text-[#00758f]" />}
                name="MySQL"
              />
            </MarqueeRow>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-lg font-bold tracking-[0.2em] text-text-base uppercase mb-4 text-center">
              {t("skills_other")}
            </h3>
            <MarqueeRow speed="25s">
              <SkillItem
                icon={<span className="text-6xl">🇬🇧</span>}
                name="ENGLISH"
              />

              <SkillItem
                icon={<SiCplusplus className="size-16 text-[#00599C]" />}
                name="C++"
              />
              <SkillItem
                icon={<SiC className="size-16 text-[#A8B9CC]" />}
                name="C"
              />
              <SkillItem
                icon={<FaJava className="size-16 text-[#00599C]" />}
                name="JAVA"
              />
              <SkillItem
                icon={<FaPython className="size-16 text-[#00599C]" />}
                name="PYTHON"
              />
            </MarqueeRow>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-bold tracking-[0.2em] text-text-base uppercase mb-4 text-center">
              {t("skills_soft")}
            </h3>
            <MarqueeRow reverse speed="30s">
              <SkillItem
                icon={<FaUserTie className="size-16 text-primary" />}
                name={t("soft_leadership")}
              />
              <SkillItem
                icon={<FaTasks className="size-16 text-secondary" />}
                name={t("soft_planning")}
              />
              <SkillItem
                icon={<FaUserCheck className="size-16 text-indigo-400" />}
                name={t("soft_independent")}
              />
              <SkillItem
                icon={<FaUsers className="size-16 text-emerald-400" />}
                name={t("soft_teamwork")}
              />
              <SkillItem
                icon={<FaLightbulb className="size-16 text-amber-400" />}
                name={t("soft_problem_solving")}
              />
              <SkillItem
                icon={<FaBrain className="size-16 text-purple-400" />}
                name={t("soft_self_study")}
              />
            </MarqueeRow>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SkillSection;
