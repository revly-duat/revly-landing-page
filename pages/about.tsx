// pages/about.tsx
import { NextSeo } from "next-seo";
import {
  Sparkles,
  BarChart3,
  LineChart,
  Target,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "components/ui/FadeIn";
import SectionTitle from "components/ui/SectionTitle";
import Container from "components/layout/Container";
import Cards from "components/ui/Cards";
import StatsGrid, { StatItem } from "components/home/StatsGrid";
import { COLORS } from "components/theme/colors";

const stats: StatItem[] = [
  { label: "Hanterad annonsbudget", value: "2.5M+ SEK" },
  { label: "Genomsnittlig ROAS", value: "3.5x" },
  { label: "Konverteringar", value: "50k+" },
  { label: "Marknader", value: "10+" },
];

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="Om Revly - Datadriven tillväxt och strategi"
        description="Revly bygger lönsam tillväxt genom datadriven annonsering, struktur och kreativitet. Vi arbetar långsiktigt med varumärken som vill växa smartare."
        canonical="https://www.revly.se/about"
        openGraph={{
          url: "https://www.revly.se/about",
          images: [
            {
              url: "/revly_og_about.png",
              width: 1200,
              height: 630,
              alt: "Om Revly | Datadriven tillväxt",
            },
          ],
        }}
      />

      <main>
        {/* HERO */}
        <Container className="">
          <FadeIn>
            <div className="max-w-5xl flex flex-col mx-auto min-h-screen pt-32 md:pt-0 justify-center">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
                style={{ color: COLORS.white, lineHeight: 1.18 }}
              >
                Långsiktig tillväxt
              </h1>
              <p
                className="mt-5 text-base sm:text-lg text-center"
                style={{ color: COLORS.text }}
              >
                Vi hjälper varumärken skala kundanskaffning med tydlig struktur,
                snabba testcykler och content som utgår från data. Revlys fokus
                är att bygga långsiktiga samarbeten. Vi jobbar mot att förstå
                ert företag på djupet så att vi kan optimera det som om det vore
                vårt eget.
              </p>
              <StatsGrid items={stats} />
            </div>
          </FadeIn>
        </Container>

        {/* INTRO */}
        <Container className="py-24">
          <FadeIn>
            <div className="grid grid-cols-1 gap-8 justify-items-center">
              <p
                className="text-xl sm:text-4xl text-center"
                style={{ color: COLORS.text }}
              >
                Revly grundades för att göra tillväxt begriplig och mätbar. Vi
                arbetar nära våra kunder, sätter tydliga mål och fattar beslut i
                data, inte antaganden. När ni växer, växer vi. Helheten är vår
                styrka: strategi, media buying, kreativ produktion och
                kontinuerlig experimentering inom hela funneln. Resultatet blir
                stabil, lönsam tillväxt utan onödigt brus.
              </p>
            </div>
          </FadeIn>
        </Container>

        {/* VARFÖR REVLY */}
        <Container className="py-24">
          <SectionTitle
            kicker="Varför Revly"
            title="Det här får ni med oss"
            subtitle="Vi kombinerar analytisk noggrannhet med content som säljer och skalar lönsamheten."
          />
          <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
            {[
              {
                icon: Target,
                title: "Fokus på affärsmål",
                text: "Vi optimerar mot lönsam tillväxt inte bara lägre CPA. Mål, marginaler och verkliga kostnader styr våra beslut.",
              },
              {
                icon: FlaskConical,
                title: "Ständig testning",
                text: "Hypotes → Test → Beslut. Nya målgrupper, nytt content, nya varianter varje vecka för att hitta nästa vinnarset.",
              },
              {
                icon: ShieldCheck,
                title: "Struktur & trygghet",
                text: "Full-funnel-upplägg, korrekta mätpunkter och tydliga veckorapporter så att alla ser vad som händer och varför.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.06 * i}>
                <Cards className="h-full bg-[#000814] border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-[#003566]/30 transition-shadow rounded-2xl p-6">
                  <item.icon
                    className="h-6 w-6 mb-3"
                    style={{ color: COLORS.yellow500 }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: COLORS.white }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: COLORS.text }}>
                    {item.text}
                  </p>
                </Cards>
              </FadeIn>
            ))}
          </div>
        </Container>

        {/* SÅ JOBBAR VI */}
        <Container className="py-24">
          <SectionTitle
            kicker="Så jobbar vi"
            title="Data, planering och optimering"
            subtitle="Återkommande cykler av insikt, genomförande och skalning med tydliga mätpunkter i varje steg."
          />
          <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
            {[
              {
                icon: Sparkles,
                title: "Insikt & analys",
                text: "Marknadskarta, målgrupper, konkurrenter och kreativa spår. Vi börjar i data inte i gissningar.",
              },
              {
                icon: BarChart3,
                title: "Genomförande",
                text: "Media buying, kreativa iterationer och snabba testcykler i en tydlig struktur.",
              },
              {
                icon: LineChart,
                title: "Optimering & skalning",
                text: "Skalning av vinnare, budgetprioritering och veckorapporter med konkreta nästa steg.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.06 * i}>
                <Cards className="h-full bg-[#000814] border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-[#003566]/30 transition-shadow rounded-2xl p-6">
                  <item.icon
                    className="h-6 w-6 mb-3"
                    style={{ color: COLORS.yellow500 }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: COLORS.white }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: COLORS.text }}>
                    {item.text}
                  </p>
                </Cards>
              </FadeIn>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
