// components/home/ProcessSection/ProcessSection.tsx
import * as React from "react";
import Container from "components/layout/Container";
import SectionTitle from "components/ui/SectionTitle";
import ProcessCard, { ProcessItem } from "./ProcessCard";
import FadeIn from "components/ui/FadeIn";

interface ProcessSectionProps {
  items: ProcessItem[];
  kicker?: string;
  title?: string;
  subtitle?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  items,
  kicker = "Resultat",
  title = "Riktiga varumärken. Riktig tillväxt.",
  subtitle = "Vi låter siffrorna tala. Ett urval av projekt där vi visar exakt vad vi gjorde och vad det gav.",
}) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" />
      <div className="relative">
        <SectionTitle kicker={kicker} title={title} subtitle={subtitle} />
        <Container>
          <div className="grid gap-8 md:grid-cols-3 auto-rows-fr">
            {items.map((item, i) => (
              <FadeIn key={item.title} delay={0.06 * i}>
                <ProcessCard item={item} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProcessSection;
