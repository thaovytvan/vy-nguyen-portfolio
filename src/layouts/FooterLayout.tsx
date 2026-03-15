import {
  FaAngleDoubleUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const FooterLayout = () => {
  const { t } = useTranslation();
  const handleBackToTop = () => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-bg-base border-t border-border-base py-16 flex flex-col items-center justify-center relative z-20">
      <div className="flex flex-col items-center">
        <button
          onClick={handleBackToTop}
          className="flex flex-col items-center justify-center mb-12 group cursor-pointer"
        >
          <FaAngleDoubleUp className="text-text-base mb-3 text-xl group-hover:-translate-y-2 transition-transform duration-300" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-text-base uppercase">
            {t("footer_top")}
          </span>
        </button>

        <div className="flex gap-6 mb-12">
          <a
            href="#"
            className="w-10 h-10 border border-border-base flex items-center justify-center text-text-base hover:bg-text-base hover:text-bg-base transition-colors cursor-pointer"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/vy-nguyen-a0612928b/"
            target="_blank"
            className="w-10 h-10 border border-border-base flex items-center justify-center text-text-base hover:bg-text-base hover:text-bg-base transition-colors cursor-pointer"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 border border-border-base flex items-center justify-center text-text-base hover:bg-text-base hover:text-bg-base transition-colors cursor-pointer"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="mailto:thaovytvan@gmail.com"
            className="w-10 h-10 border border-border-base flex items-center justify-center text-text-base hover:bg-text-base hover:text-bg-base transition-colors cursor-pointer"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>

        <p className="text-[10px] text-text-muted">
          {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};
