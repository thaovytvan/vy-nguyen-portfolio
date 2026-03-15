import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { CodeIcon, GearIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-select";
import SectionTitle from "./ui-component/SectionTitle";

const AboutMeSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="w-full relative py-24 z-10 glass border-t border-border-base"
    >
      <div className="max-w-[1200px] mx-auto px-8 relative">
        <div className="reveal-up">
          <SectionTitle>{t("about_title")}</SectionTitle>
        </div>

        <p className="reveal-up text-center text-text-muted max-w-2xl mx-auto leading-relaxed text-sm mb-12">
          {t("about_desc")}
        </p>

        <div className="reveal-up flex justify-center mb-16">
          <div className="flex items-center text-xs font-bold tracking-widest text-text-base uppercase opacity-70">
            <span className="w-px h-6 bg-text-base mr-4"></span>
            {t("about_explore")}
            <span className="w-px h-6 bg-text-base ml-4"></span>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="reveal-left flex flex-col items-center md:items-start text-center md:text-left">
            <Pencil1Icon className="size-8 text-primary mb-4 opacity-80" />
            <h3 className="text-sm font-bold tracking-widest text-text-base uppercase mb-3">
              {t("about_design_title")}
            </h3>
            <p className="text-text-muted text-xs leading-relaxed">
              {t("about_design_desc")}
            </p>
          </div>
          <div className="reveal-up flex flex-col items-center md:items-start text-center md:text-left">
            <CodeIcon className="size-8 text-secondary mb-4 opacity-80" />
            <h3 className="text-sm font-bold tracking-widest text-text-base uppercase mb-3">
              {t("about_dev_title")}
            </h3>
            <p className="text-text-muted text-xs leading-relaxed">
              {t("about_dev_desc")}
            </p>
          </div>
          <div className="reveal-right flex flex-col items-center md:items-start text-center md:text-left">
            <GearIcon className="size-8 text-indigo-400 mb-4 opacity-80" />
            <h3 className="text-sm font-bold tracking-widest text-text-base uppercase mb-3">
              {t("about_main_title")}
            </h3>
            <p className="text-text-muted text-xs leading-relaxed">
              {t("about_main_desc")}
            </p>
          </div>
        </div>

        <Separator />
      </div>
    </div>
  );
});

export default AboutMeSection;
