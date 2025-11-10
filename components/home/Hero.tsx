// components/home/Hero.tsx
import * as React from "react";
import { ArrowRight, BarChart3, Star, Users } from "lucide-react";
import { COLORS } from "components/theme/colors";
import FadeIn from "components/ui/FadeIn";
import Button from "components/ui/Button";
import CaseCard, { CaseItem } from "components/home/CasesSection/CaseCard";
import { useRouter } from "next/router";

interface HeroProps {
  latestCase: CaseItem; // valfritt case att visa i hero
}

const Hero: React.FC<HeroProps> = ({ latestCase }) => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-6 ">
      {/* Grid: text vänster, casekort höger */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center h-screen">
        {/* Vänster: copy + CTA + trust strip */}
        <FadeIn delay={0.1}>
          <div className="max-w-3xl">
            <p
              className="inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full mb-4"
              style={{ background: COLORS.yellow400, color: COLORS.navy900 }}
            >
              Bevisat i data
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-5xl font-bold"
              style={{ color: COLORS.white, lineHeight: 1.18 }}
            >
              Datadriven tillväxt och optimering
            </h1>
            <p
              className="mt-5 text-base sm:text-lg max-w-2xl"
              style={{ color: COLORS.text }}
            >
              Vi hjälper företag växa genom smartare annonsering, kreativa
              tester och optimering byggd på data.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                label="Se våra resultat"
                styleType="primary"
                additionalClasses="text-base px-5 py-3"
                icon={<ArrowRight className="h-4 w-4" />}
                onClick={() => router.push("/cases")}
              />
              <Button
                label="Boka ett samtal"
                styleType="secondary"
                additionalClasses="text-base px-5 py-3"
                onClick={() => router.push("/contact")}
              />
            </div>

            <FadeIn delay={0.1}>
              <div
                className="mt-10 flex flex-wrap items-center gap-6 text-sm"
                style={{ color: COLORS.text }}
              >
                <div className="flex items-center gap-2">
                  <Star
                    className="h-4 w-4"
                    style={{ color: COLORS.yellow400 }}
                  />
                  3.5x genomsnittlig ROAS
                </div>
                <div className="flex items-center gap-2">
                  <Users
                    className="h-4 w-4"
                    style={{ color: COLORS.yellow400 }}
                  />
                  50k+ konverteringar
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3
                    className="h-4 w-4"
                    style={{ color: COLORS.yellow400 }}
                  />
                  2.5M+ SEK hanterad spend
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>

        {/* Höger: “Vårt senaste case” (visas bara om latestCase finns) */}
        <div className="hidden md:block">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl place-self-auto lg:place-self-end">
              <p
                className="inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full mb-4"
                style={{
                  background: COLORS.yellow400,
                  color: COLORS.navy900,
                }}
              >
                Vårt senaste case
              </p>
              <CaseCard item={latestCase} />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
