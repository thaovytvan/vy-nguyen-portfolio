import React, { createContext, useContext, useRef, useCallback, useMemo } from "react";

export type SectionRefs = {
  hero: React.RefObject<HTMLDivElement | null>;
  about: React.RefObject<HTMLDivElement | null>;
  experience: React.RefObject<HTMLDivElement | null>;
  education: React.RefObject<HTMLDivElement | null>;
  skills: React.RefObject<HTMLDivElement | null>;
  portfolio: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
};

type ScrollContextType = {
  sectionRefs: SectionRefs;
  activeSection: keyof SectionRefs;
  scrollToSection: (section: keyof SectionRefs) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const hero = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const education = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const portfolio = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = React.useState<keyof SectionRefs>("hero");

  const sectionRefs = useMemo(
    () => ({ hero, about, experience, education, skills, portfolio, contact }),
    [hero, about, experience, education, skills, portfolio, contact]
  );

  React.useEffect(() => {
    const observerOptions = {
      root: null, // use the viewport
      rootMargin: "-45% 0px -45% 0px", // Trigger when section is near the very center
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find which section this ref belongs to
          const sectionKey = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key as keyof SectionRefs].current === entry.target
          ) as keyof SectionRefs;

          if (sectionKey) {
            setActiveSection(sectionKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const scrollToSection = useCallback(
    (section: keyof SectionRefs) => {
      const ref = sectionRefs[section];
      if (ref && ref.current) {
        // Update active section immediately on click to prevent delay
        setActiveSection(section);
        
        // Try to find the scrollable container (main)
        const container = document.querySelector("main");
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const targetRect = ref.current.getBoundingClientRect();
          const relativeTop = targetRect.top - containerRect.top;
          
          container.scrollTo({
            top: container.scrollTop + relativeTop,
            behavior: "smooth"
          });
        } else {
          // Fallback
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [sectionRefs]
  );

  return (
    <ScrollContext.Provider value={{ sectionRefs, activeSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

