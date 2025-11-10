// components/home/Testimonial.tsx
import * as React from "react";
import Container from "components/layout/Container";
import { Quote } from "lucide-react";
import { COLORS } from "components/theme/colors";
import FadeIn from "components/ui/FadeIn";

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative ">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(800px 300px at 80% 10%, ${COLORS.navy700}, transparent), radial-gradient(900px 400px at 10% 120%, ${COLORS.navy700}, transparent)`,
        }}
      />
      <Quote
        className="absolute -top-4 left-8 h-24 w-24 -z-0"
        style={{ color: COLORS.yellow500, opacity: 0.08 }}
      />
      <FadeIn>
        <Container className="relative text-center">
          <p
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: COLORS.textMuted }}
          >
            Kundröster
          </p>
          <blockquote
            className="mt-6 text-xl md:text-2xl font-semibold leading-relaxed"
            style={{ color: COLORS.white }}
          >
            “Revly gissar inte – de testar, mäter och levererar.”
          </blockquote>
          <p className="mt-3 text-sm" style={{ color: COLORS.textMuted }}>
            – Skillsocks teamet
          </p>
        </Container>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
