import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-4xl min-h-[60vh] flex items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="glass rounded-[2rem] p-10 md:p-16 text-center shadow-2xl transition-all hover:shadow-secondary/20 duration-500 border-t border-t-white/20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-gradient tracking-tight">
          {t("about")}
        </h2>
        <p className="text-xl md:text-2xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-light">
          {t("about_content")}
        </p>
      </div>
    </div>
  );
};

export default About;
