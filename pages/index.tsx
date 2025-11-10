// pages/index.tsx
import Hero from "components/home/Hero";
import CasesSection from "components/home/CasesSection/CasesSection";
import ProcessSection from "components/home/ProcessSection/ProcessSection";
import { ProcessItem } from "components/home/ProcessSection/ProcessCard";
import FAQ, { FAQItem } from "components/home/FAQ";

import { Sparkles, BarChart3, LineChart } from "lucide-react";
import { NextSeo } from "next-seo";

const latestCase = {
  client: "Skillsocks",
  goal: "Skala D2C-försäljning lönsamt",
  approach: ["Full-funnel-struktur", "Lokala tester", "Kreativ iteration"],
  results: ["+172% ROAS", "+63% CTR", "4.1x blended return"],
  badge: "E-handel",
  img: "/skillsocks_logo.png",
  // slug: "skillsocks" // valfritt, om/ när du gör case-detaljsidor
};

const process: ProcessItem[] = [
  {
    title: "Insikt & analys",
    text: "Marknadens signaler, målgrupper, plattformar innan första kronan spenderas.",
    icon: Sparkles,
  },
  {
    title: "Kreativ utveckling & testning",
    text: "Vi testar hypoteser med ett högt tempo. Sedan skalar vi det som presterar bäst.",
    icon: BarChart3,
  },
  {
    title: "Skalning & optimering",
    text: "Mer struktur. Mer data. Mer effekt utan att tappa marginal.",
    icon: LineChart,
  },
];
const faqs: FAQItem[] = [
  {
    q: "Vad gör Revly kortfattat?",
    a: "Vi hjälper företag driva lönsam tillväxt genom datadriven annonsering, iterativt kreativitetsarbete och optimering av hela kundresan online.",
  },
  {
    q: "Vem passar Revly för?",
    a: "Alla företag som vill växa genom digital kundanskaffning. Oavsett om du säljer produkter, tjänster eller prenumerationer hjälper vi dig med strategi, annonser och optimering.",
  },
  {
    q: "Hur skiljer ni er från en traditionell byrå?",
    a: "Vi jobbar som en förlängning av ert team. Full transparens, högt tempo, datadrivna beslut och ansvar över hela funneln inte bara över annonserna.",
  },
  {
    q: "Hur snabbt kan vi komma igång?",
    a: "Efter ett kort uppstartssamtal och access till era konton är vi ofta igång inom 1-2 veckor med struktur, analys och första testcykeln.",
  },
  {
    q: "Kan ni producera annonsmaterial?",
    a: "Ja. Vi kan hjälpa till med strategi, copy och kreativa koncept. Råmaterialet (bild/video) kommer oftast från kunden men vi kan även stötta med produktion vid behov.",
  },
  {
    q: "Vad kostar det att jobba med er?",
    a: "Det beror på omfattning och ansvar. Vanligast är ett fast månadsarvode, men vi är öppna för hybrid- eller performanceupplägg när det finns rätt förutsättningar.",
  },
  {
    q: "Jobbar ni internationellt?",
    a: "Ja. Vi har erfarenhet av att skala annonsering i hela EU, USA och Norden med lokala anpassningar av kanalval, creatives och språk.",
  },
  {
    q: "Hur vet ni vad som funkar?",
    a: "Vi sätter hypoteser, testar strukturerat, mäter resultat och skalar det som funkar. Nya kreativa A/B-tester och målgruppsiterationer sker varje vecka.",
  },
  {
    q: "Är ni bara fokuserade på annonsering?",
    a: "Nej. Vi jobbar helhetsorienterat. Förutom annonsering optimerar vi även funnels, landningssidor, konverteringsflöden och kundvärde över tid.",
  },
];

export default function HomePage() {
  return (
    <>
      <NextSeo
        title="Revly - Datadriven marknadsföring som skalar tillväxt"
        description="Revly hjälper företag växa lönsamt med datadriven marknadsföring, strategi och kreativt innehåll. Meta, TikTok och Google - testat, optimerat och skalbart."
        canonical="https://www.revly.se"
      />
      <header className="max-w-screen">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="fixed w-screen h-screen object-cover brightness-50 -z-10"
        >
          <source src="/shadergradient.webm" />
        </video>
        <Hero latestCase={latestCase} />
        <CasesSection
          title="Tillväxt vi jobbat med"
          subtitle="Se hur vi har hjälpt varumärken växa genom att kombinera analys, kreativa iterationer och smart skalning."
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

        <ProcessSection
          kicker="Vår metod"
          title="Så jobbar vi steg för steg"
          subtitle="Vi bygger inte kampanjer, vi bygger samarbeten. När vi förstår ert företag på djupet kan vi optimera det som om det vore vårt eget."
          items={process}
        />
        <FAQ items={faqs} />
      </header>
    </>
  );
}
