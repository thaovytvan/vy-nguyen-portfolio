import { cn } from "../lib/utils";

const MarqueeRow = ({
  children,
  reverse = false,
  speed = "30s"
}: {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: string;
}) => {
  return (
    <div className="w-full overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover-pause">
      <div
        className={cn(
          "flex w-max gap-8 py-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: speed }}
      >
        <div className="flex w-max gap-16 justify-around items-center px-4">
          {children}
        </div>
        <div className="flex w-max gap-16 justify-around items-center px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MarqueeRow;
