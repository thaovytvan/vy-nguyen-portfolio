const SkillItem = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    // Skill Item Subcomponent
    <div className="flex flex-col items-center justify-center group cursor-pointer">
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-xl">
        {icon}
      </div>
      <span className="text-[10px] font-bold tracking-[0.2em] text-text-muted uppercase text-center mt-2 group-hover:text-text-base transition-colors">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
