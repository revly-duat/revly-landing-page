// components/home/FAQ.tsx
import * as React from "react";
import Container from "components/layout/Container";
import SectionTitle from "components/ui/SectionTitle";
import FadeIn from "components/ui/FadeIn";
import { COLORS } from "components/theme/colors";
import { ChevronRight } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 opacity-20" />
      <SectionTitle
        kicker="FAQ"
        title="Vanliga frågor"
        subtitle="Funderar du på Revly som partner? Här är svar på de vanligaste frågorna"
      />
      <FadeIn>
        <Container>
          <div
            className="max-w-3xl mx-auto rounded-2xl p-6 bg-[#000814] border shadow-2xl shadow-[#003566]/30"
            style={{ borderColor: COLORS.overlay }}
          >
            {items.map((f, i) => (
              <details
                key={f.q}
                className="group border-t first:border-t-0"
                style={{ borderColor: COLORS.overlay }}
              >
                <summary
                  className="list-none flex items-center justify-between cursor-pointer select-none py-4 outline-none transition-colors"
                  aria-controls={`faq-panel-${i}`}
                >
                  <span
                    className="text-base md:text-lg font-semibold transition-colors"
                    style={{ color: COLORS.white }}
                  >
                    {f.q}
                  </span>
                  <ChevronRight
                    className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-90"
                    style={{ color: COLORS.text }}
                    aria-hidden="true"
                  />
                </summary>

                {/* Animated content wrapper: height + fade + slight slide */}
                <div
                  id={`faq-panel-${i}`}
                  className="grid transition-all duration-300 ease-out overflow-hidden
                             group-open:grid-rows-[1fr] group-open:opacity-100 group-open:translate-y-0
                             grid-rows-[0fr] opacity-0 -translate-y-1"
                >
                  <div className="min-h-0">
                    <p
                      className="pb-4 text-sm md:text-base leading-relaxed"
                      style={{ color: COLORS.text }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>

                {/* Hover/Focus underline accent */}
                <div
                  className="h-px w-full scale-x-0 group-hover:scale-x-100 group-open:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: `${COLORS.yellow500}33` }}
                />
              </details>
            ))}
          </div>
        </Container>
      </FadeIn>
    </section>
  );
};

export default FAQ;
