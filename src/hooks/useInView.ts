import { useEffect, useRef } from "react";

/**
 * Attach the returned ref to a section container.
 * When that container enters the viewport, the class "section-visible"
 * is added to it, which activates CSS transition-based reveal animations
 * on any child elements that have reveal-left/reveal-right/reveal-up classes.
 */
export function useInView(
  threshold = 0.12,
  externalRef?: React.RefObject<HTMLDivElement | null>
) {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = externalRef || localRef;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, ref]);

  return ref;
}
