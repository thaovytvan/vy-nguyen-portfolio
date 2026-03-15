import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="relative w-full h-[calc(100vh-6rem)] min-h-[700px] flex items-center overflow-hidden bg-bg-base"
    >
      {/* Slanted Dark Background */}
      <div
        className="absolute inset-0 bg-bg-secondary border-l border-border-base pointer-events-none"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 40% 100%)" }}
      >
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/100 -translate-y-1/2 text-[6.5rem] font-black text-text-muted/10 select-none uppercase tracking-tighter reveal-up">
          {t("hero_it")}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10 flex h-full">
        {/* Left Text */}
        <div className="w-[45%] flex flex-col justify-center pl-4 reveal-left">
          <h2 className="text-2xl font-bold mb-4 text-text-base tracking-wide">
            {t("hero_hi")}
          </h2>
          <h1 className="text-7xl font-bold mb-4 text-gradient tracking-tighter leading-20">
            Vy Nguyen
          </h1>
          <h3 className="text-xl font-bold text-gray-400 mb-20 tracking-wide">
            {t("hero_role")}
          </h3>

          <div className="flex gap-6">
            <a
              href="mailto:thaovytvan@gmail.com"
              aria-label="Email"
              className="size-14 glass rounded-xl flex items-center justify-center text-text-base hover:bg-primary/20 transition-all hover:scale-110 cursor-pointer"
            >
              <EnvelopeClosedIcon className="size-6" />
            </a>
            <a
              href="https://github.com/thaovytvan"
              target="_blank"
              aria-label="GitHub"
              className="size-14 glass rounded-xl flex items-center justify-center text-text-base hover:bg-primary/20 transition-all hover:scale-110 cursor-pointer"
            >
              <GitHubLogoIcon className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vy-nguyen-a0612928b/"
              target="_blank"
              aria-label="LinkedIn"
              className="size-14 glass rounded-xl flex items-center justify-center text-text-base hover:bg-primary/20 transition-all hover:scale-110 cursor-pointer"
            >
              <LinkedInLogoIcon className="size-6" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[55%] flex items-end justify-center relative pb-0 pl-10 reveal-right ">
          {/* Portrait */}
          <div className="size-450 relative flex items-end justify-center overflow-hidden rounded-t-3xl">
            {/* Fade bottom to blend into dark background */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-bg-base to-transparent z-10 pointer-events-none" />
            <img
              src="/portrait.png"
              alt="Thao Vy"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
