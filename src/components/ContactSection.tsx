import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "@radix-ui/react-select";
import SectionTitle from "./ui-component/SectionTitle";

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="w-full relative py-24 z-10 glass border-t border-border-base"
    >
      <div className="max-w-[800px] mx-auto px-8 relative">
        <div className="reveal-up">
          <SectionTitle>{t("contact_title")}</SectionTitle>
        </div>

        <p className="reveal-up text-center text-text-muted max-w-2xl mx-auto leading-relaxed text-sm mb-16">
          {t("about_desc")}
        </p>

        <Separator />

        <form className="reveal-up flex flex-col gap-8 max-w-xl mx-auto mt-16">
          <input
            type="text"
            placeholder={t("contact_name_placeholder")}
            className="w-full bg-transparent border-t-0 border-r-0 border-b-4 border-l-4 border-text-base text-text-base px-4 py-3 placeholder-text-base/50 text-xs font-bold tracking-widest focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder={t("contact_email_placeholder")}
            className="w-full bg-transparent border-t-0 border-r-0 border-b-4 border-l-4 border-text-base text-text-base px-4 py-3 placeholder-text-base/50 text-xs font-bold tracking-widest focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="tel"
            placeholder={t("contact_phone_placeholder")}
            className="w-full bg-transparent border-t-0 border-r-0 border-b-4 border-l-4 border-text-base text-text-base px-4 py-3 placeholder-text-base/50 text-xs font-bold tracking-widest focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder={t("contact_message_placeholder")}
            rows={5}
            className="w-full bg-transparent border-t-0 border-r-0 border-b-4 border-l-4 border-text-base text-text-base px-4 py-3 placeholder-text-base/50 text-xs font-bold tracking-widest focus:outline-none focus:border-primary transition-colors resize-none mb-8"
          ></textarea>

          <div className="flex justify-center items-center">
            <span className="w-px h-6 bg-text-base mr-8"></span>
            <button
              type="submit"
              className="text-xs font-bold tracking-widest text-text-base uppercase hover:text-primary transition-colors cursor-pointer"
            >
              {t("contact_submit")}
            </button>
            <span className="w-px h-6 bg-text-base ml-8"></span>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ContactSection;
