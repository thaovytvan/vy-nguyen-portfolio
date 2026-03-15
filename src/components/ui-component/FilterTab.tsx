import { cn } from "../../lib/utils";

const FilterTab = ({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-8 py-4 text-xs font-bold tracking-[0.2em] relative transition-colors duration-300 cursor-pointer",
      active ? "text-text-base" : "text-text-muted hover:text-text-base"
    )}
  >
    {children}
    {active && (
      <div className="absolute top-0 left-0 w-full h-[1px] bg-text-base"></div>
    )}
  </button>
);

export default FilterTab;
