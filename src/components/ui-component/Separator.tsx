import { Pencil1Icon, CodeIcon, GearIcon } from "@radix-ui/react-icons";

// ... (Separators, Titles, FilterTab, etc.)
const Separator = () => (
  <div className="flex items-center justify-center my-16 opacity-50">
    <div className="w-16 h-px bg-white"></div>
    <div className="mx-2 text-white text-xs tracking-widest pt-1">\\/ \\/</div>
    <div className="w-16 h-px bg-white"></div>
  </div>
);

export default Separator;
<div className="w-full relative py-24 z-10 glass border-t border-white/10">
  <div className="max-w-[1200px] mx-auto px-8 relative">
    <div className="reveal-up">
      <SectionTitle>About me</SectionTitle>
    </div>

    <p className="reveal-up text-center text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm mb-12">
      Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
      finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
      viverra facilisis ut ac est.
    </p>

    <div className="reveal-up flex justify-center mb-16">
      <div className="flex items-center text-xs font-bold tracking-widest text-white uppercase opacity-70">
        <span className="w-px h-6 bg-white mr-4"></span>
        EXPLORE
        <span className="w-px h-6 bg-white ml-4"></span>
      </div>
    </div>

    <Separator />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
      <div className="reveal-left flex flex-col items-center md:items-start text-center md:text-left">
        <Pencil1Icon className="size-8 text-primary mb-4 opacity-80" />
        <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-3">
          Design
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </p>
      </div>
      <div className="reveal-up flex flex-col items-center md:items-start text-center md:text-left">
        <CodeIcon className="size-8 text-secondary mb-4 opacity-80" />
        <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-3">
          Development
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </p>
      </div>
      <div className="reveal-right flex flex-col items-center md:items-start text-center md:text-left">
        <GearIcon className="size-8 text-indigo-400 mb-4 opacity-80" />
        <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-3">
          Maintenance
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </p>
      </div>
    </div>

    <Separator />
  </div>
</div>;
