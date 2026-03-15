import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "@radix-ui/react-select";
import TimelineItem from "./TimelineItem";
import SectionTitle from "./ui-component/SectionTitle";

const ExperienceSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="w-full relative py-32 z-10 glass border-t border-border-base"
    >
      <div className="max-w-[1200px] mx-auto px-8 relative">
        <div className="reveal-up">
          <SectionTitle>{t("exp_title")}</SectionTitle>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-text-base opacity-70">
              {t("exp_journey")}
            </span>
            <div className="w-px h-12 bg-border-base"></div>
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className="max-w-4xl mx-auto relative pt-8 pb-16">
          <TimelineItem
            year={t("exp_1_year")}
            title={t("exp_1_title")}
            company={t("exp_1_company")}
            description={t("exp_1_desc")}
            isLeft={false}
          />

          {/* End dot */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-border-base"></div>
        </div>

        <Separator />
      </div>
    </div>
  );
});

export default ExperienceSection;
