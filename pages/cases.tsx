// pages/cases.tsx
import { NextSeo } from "next-seo";
import { COLORS } from "components/theme/colors";
import CasesSection from "components/home/CasesSection/CasesSection";

export default function CasesPage() {
  return (
    <>
      <NextSeo
        title="Revly - Case & resultat"
        description="Se hur Revly skapar lönsam tillväxt med datadriven annonsering och tydlig struktur. Läs om verkliga cases och resultaten bakom tillväxten."
        canonical="https://www.revly.se/cases"
      />

      <main style={{ background: COLORS.navy900 }}>
        <section className="pt-24 md:pt-16">
          <CasesSection
            title="Gå in på djupet i våra cases"
            subtitle="Läs mer om våra cases och se resultat samt metodik som använts för att försäkra tillväxt."
            items={[
              {
                client: "Skillsocks",
                goal: "Skala D2C-försäljning lönsamt",
                approach: [
                  "Full-funnel-struktur",
                  "Lokala tester",
                  "Kreativ iteration",
                ],
                results: ["+172% ROAS", "+63% CTR", "4.1x blended return"],
                badge: "E-handel",
                img: "/skillsocks_logo.png",
              },
              {
                client: "IOAKU",
                goal: "Identifiera bäst presterande EU-marknader",
                approach: [
                  "Bred geotestning",
                  "Kreativa vinklar",
                  "Konsoliderad spend",
                ],
                results: ["-28% CPA", "+41% CVR"],
                badge: "Smycken",
                img: "/ioaku_logo.png",
              },
            ]}
            logos={[
              { src: "/skillsocks_logo.png", alt: "Skillsocks" },
              { src: "/ioaku_logo.png", alt: "IOAKU" },
              { src: "/kindpatches_logo.png", alt: "Kind Patches" },
              { src: "/drakenberg_logo.png", alt: "Drakenberg Sjölin" },
              { src: "/kyla_logo.svg", alt: "Kyla" },
            ]}
          />
        </section>
      </main>
    </>
  );
}
