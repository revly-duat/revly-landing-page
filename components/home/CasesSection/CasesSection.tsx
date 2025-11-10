// components/home/CasesSection/CasesSection.tsx
import * as React from "react";
import Container from "components/layout/Container";
import SectionTitle from "components/ui/SectionTitle";
import CaseCard, { CaseItem } from "./CaseCard";
import FadeIn from "components/ui/FadeIn";
import { COLORS } from "components/theme/colors";
import Cards from "components/ui/Cards";
import Button from "components/ui/Button";
import { ArrowRight } from "lucide-react";

interface LogoItem {
  src: string;
  alt: string;
}

interface CasesSectionProps {
  items: CaseItem[]; // skicka in minst 0–2 case här (vi tar max 2)
  logos?: LogoItem[]; // valfritt: loggor för logo wall
  kicker?: string;
  title?: string;
  subtitle?: string;
}

const CasesSection: React.FC<CasesSectionProps> = ({
  items,
  logos = [],
  kicker = "Resultat",
  title = "Riktiga varumärken. Riktig tillväxt.",
  subtitle = "Vi låter siffrorna tala. Ett urval av projekt där vi visar exakt vad vi gjorde och vad det gav.",
}) => {
  // Vi visar max två case i griden
  const topTwo = items.slice(0, 2);

  return (
    <section id="results" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" />

      <SectionTitle kicker={kicker} title={title} subtitle={subtitle} />

      <Container>
        {/* CASE GRID: 2 case + 1 CTA-kort, lika höjd */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {topTwo.map((item, i) => (
            <FadeIn key={item.client} delay={0.05 * i}>
              <CaseCard item={item} />
            </FadeIn>
          ))}

          {/* CTA-kort */}
          <FadeIn delay={0.12}>
            <Cards className="h-full bg-[#000814] border border-[#003566] rounded-2xl shadow-2xl shadow-[#003566]/30 flex flex-col justify-center text-center p-8">
              <div className="mx-auto max-w-xs">
                <p
                  className="text-sm uppercase tracking-wide"
                  style={{ color: COLORS.textMuted }}
                >
                  Nästa steg
                </p>
                <h3
                  className="mt-2 text-2xl font-extrabold"
                  style={{ color: COLORS.white, lineHeight: 1.2 }}
                >
                  Bli vårt nästa case
                </h3>
                <p className="mt-2 text-sm" style={{ color: COLORS.text }}>
                  Vill du se vad vi kan göra tillsammans? Hör av dig och boka en
                  gratis konsultation idag!
                </p>
                <div className="mt-6 flex justify-center">
                  <Button
                    label="Kontakta oss"
                    styleType="primary"
                    icon={<ArrowRight className="h-4 w-4" />}
                    onClick={() => {
                      if (typeof window !== "undefined")
                        window.location.href = "/contact";
                    }}
                  />
                </div>
              </div>
            </Cards>
          </FadeIn>
        </div>

        {/* LOGO WALL (under casen). Flytta denna block ovanför griden om du vill ha loggorna först */}
        {logos.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mt-16">
              <p
                className="text-center text-xs sm:text-sm uppercase tracking-wide mb-6"
                style={{ color: COLORS.textMuted }}
              >
                Varumärken vi har arbetat med
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-stretch auto-rows-fr">
                {logos.map((logo, i) => (
                  <Cards
                    key={`${logo.alt}-${i}`}
                    className="h-full bg-[#000814] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl shadow-[#003566]/30 flex"
                  >
                    <div className="aspect-[4/3] w-full flex items-center justify-center p-4">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="max-h-16 opacity-90 hover:opacity-100 brightness-0 invert transition-opacity"
                      />
                    </div>
                  </Cards>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </Container>

      {/* Diskret disclaimer om period/attribution om du vill använda den */}
      {/* <Container>
        <p className="mt-8 text-center text-xs" style={{ color: COLORS.textMuted }}>
          Siffror visas för definierade perioder. Resultat varierar med säsong, kreativa och budget.
          Attribution enligt Ads Manager/GA4; blended = intäkter/total ad spend.
        </p>
      </Container> */}
    </section>
  );
};

export default CasesSection;
