// components/home/StatsGrid.tsx
import * as React from "react";
import Container from "components/layout/Container";
import Panel from "components/ui/Panel";
import EqualCard from "components/ui/Cards";
import FadeIn from "components/ui/FadeIn";
import { COLORS } from "components/theme/colors";

export interface StatItem {
  label: string;
  value: string;
}

interface StatsGridProps {
  items: StatItem[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ items }) => {
  return (
    <section className="pt-16 md:pt-24 relative">
      <div className="absolute inset-0 opacity-20" />
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 auto-rows-fr">
          {items.map((s, i) => (
            <FadeIn key={s.label} delay={0.05 * i}>
              <Panel className="h-full">
                <EqualCard>
                  <div className="p-6 text-center flex-1 flex flex-col justify-center">
                    <div
                      className="text-4xl md:text-5xl font-extrabold transition-colors hover:text-[#FFD60A]"
                      style={{ color: COLORS.white }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-sm mt-2"
                      style={{ color: COLORS.textMuted }}
                    >
                      {s.label}
                    </div>
                  </div>
                </EqualCard>
              </Panel>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsGrid;
