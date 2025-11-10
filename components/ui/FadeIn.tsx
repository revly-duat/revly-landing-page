// components/ui/fx/FadeIn.tsx
import * as React from "react";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // sekunder
  y?: number; // px translateY
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  y = 12,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [show, setShow] = React.useState(false);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduced) {
      setShow(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const base =
    "transition-all duration-700 will-change-transform will-change-opacity";
  const hidden = `opacity-0 translate-y-[${y}px]`;
  const visible = "opacity-100 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${base} ${show ? visible : hidden} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
