import { cn } from "../lib/utils";

const TimelineItem = ({
  year,
  title,
  company,
  description,
  isLeft
}: {
  year: string;
  title: string;
  company: string;
  description: string;
  isLeft: boolean;
}) => {
  const descriptionLines = description
    .split("\n")
    .filter((line) => line.trim() !== "");

  const renderDescription = () => {
    if (descriptionLines.length <= 1) {
      return (
        <p className="text-xs text-text-muted leading-relaxed">{description}</p>
      );
    }
    return (
      <ul className="text-xs text-text-muted leading-relaxed list-disc space-y-2 ml-4">
        {descriptionLines.map((line, index) => (
          <li key={index} className="pl-1">
            {line.trim().startsWith("•")
              ? line.trim().substring(1).trim()
              : line.trim()}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={cn(
        "w-full flex justify-center mb-16",
        isLeft ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="reveal-left w-1/2 flex items-center justify-end px-12 text-right relative">
        {isLeft && (
          <div className="w-full text-left pl-12 pr-0">
            <h4 className="text-xl font-bold text-text-base mb-1">{title}</h4>
            <h5 className="text-sm font-semibold tracking-widest text-primary mb-4 uppercase">
              {company}
            </h5>
            {renderDescription()}
          </div>
        )}
        {!isLeft && (
          <div className="w-full">
            <h3 className="text-3xl font-black text-text-base/50">{year}</h3>
          </div>
        )}
      </div>

      {/* Center Line Dot */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] border-2 border-bg-base"></div>
        <div className="absolute top-4 bottom-[-64px] w-px bg-border-base"></div>
      </div>

      <div className="reveal-right w-1/2 flex items-center justify-start px-12 text-left relative">
        {!isLeft && (
          <div className="w-full">
            <h4 className="text-xl font-bold text-text-base mb-1">{title}</h4>
            <h5 className="text-sm font-semibold tracking-widest text-primary mb-4 uppercase">
              {company}
            </h5>
            {renderDescription()}
          </div>
        )}
        {isLeft && (
          <div className="w-full text-right">
            <h3 className="text-3xl font-black text-text-base/50">{year}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
