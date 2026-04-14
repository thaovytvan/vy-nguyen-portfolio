import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "./ui-component/SectionTitle";

const PortfolioSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      id: 1,
      type: "CODED",
      title: t("port_project_1_title"),
      desc: t("port_project_1_desc"),
      img: "/src/assets/images/my-website.png",
      link: "https://ru-garden.vercel.app/"
    },
    {
      id: 2,
      type: "DESIGNED",
      title: t("port_project_2_title"),
      desc: t("port_project_2_desc"),
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
      link: "https://ru-garden.vercel.app/"
    },
    {
      id: 3,
      type: "CODED",
      title: t("port_project_3_title"),
      desc: t("port_project_3_desc"),
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2683&auto=format&fit=crop",
      link: "https://ru-garden.vercel.app/"
    },
    {
      id: 4,
      type: "DESIGNED",
      title: t("port_project_4_title"),
      desc: t("port_project_4_desc"),
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      link: "https://ru-garden.vercel.app/"
    },
    {
      id: 5,
      type: "CODED",
      title: t("port_project_5_title"),
      desc: t("port_project_5_desc"),
      img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2670&auto=format&fit=crop",
      link: "https://ru-garden.vercel.app/"
    },
    {
      id: 6,
      type: "DESIGNED",
      title: t("port_project_6_title"),
      desc: t("port_project_6_desc"),
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2070&auto=format&fit=crop",
      link: "https://ru-garden.vercel.app/"
    }
  ];

  return (
    <div ref={ref}>
      <div className="w-full flex justify-center py-40 relative overflow-hidden border-t-8 border-border-base">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-base z-0"></div>
        <div className="relative z-10">
          <SectionTitle>{t("port_title")}</SectionTitle>
        </div>
      </div>

      <div className="bg-bg-base/50">
        {/* Filters */}
        <div className="flex justify-center bg-bg-base border-b border-border-base">
          {/* <div className="flex pt-4">
            <FilterTab
              active={filter === "ALL"}
              onClick={() => setFilter("ALL")}
            >
              {t("port_filter_all")}
            </FilterTab>
            <FilterTab
              active={filter === "CODED"}
              onClick={() => setFilter("CODED")}
            >
              {t("port_filter_coded")}
            </FilterTab>
            <FilterTab
              active={filter === "DESIGNED"}
              onClick={() => setFilter("DESIGNED")}
            >
              {t("port_filter_designed")}
            </FilterTab>
          </div> */}
        </div>
        

        {/* Grid Images */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-bg-base">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden aspect-[4/3] bg-black"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  {/* Ring border */}
                  <div className="absolute border border-white/20 rounded-full w-48 h-48 opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>

                  <div className="text-center z-10 px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-auto">
                    <p className="text-[10px] font-bold tracking-widest text-[#a3a3a3] uppercase mb-2">
                      {t("port_tagline")}
                    </p>
                    <h4 className="text-2xl font-bold tracking-wide text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[9px] text-gray-500 mb-6">{item.desc}</p>

                    <div className="flex items-center justify-center text-[10px] font-bold tracking-widest uppercase">
                      <span className="w-[1px] h-3 bg-white mx-3"></span>
                      <button className="text-white hover:text-primary transition-colors cursor-pointer"
                      onClick={() => window.open(item.link, "_blank")}
                      >
                        {t("port_demo")}
                      </button>
                      <span className="w-px h-3 bg-white mx-3"></span>
                      <button className="text-white hover:text-primary transition-colors cursor-pointer">
                        {t("port_more")}
                      </button>
                      <span className="w-[1px] h-3 bg-white mx-3"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 flex justify-center bg-bg-base">
          <h3 className="text-sm font-bold text-text-base tracking-wide">
            {t("port_footer")}
          </h3>
        </div>
      </div>
    </div>
  );
});

export default PortfolioSection;
