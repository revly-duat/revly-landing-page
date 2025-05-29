import Head from "next/head";
import { NextSeo } from "next-seo";
import { HeroSection } from "components/Hero";
import { Services } from "components/Services";
import { FAQSection } from "components/ui/FAQ";
import { StatsSection } from "components/StatsSection";
import { FeaturesSection } from "components/Features";
import {
  MessageCircle,
  BarChart,
  TrendingUp,
  Calendar,
  Settings,
  Trophy,
} from "lucide-react";
import Button from "components/ui/Button";
import { useRouter } from "next/router";

const rmsFeatures = [
  {
    icon: MessageCircle,
    title: "Recensionshantering",
    description:
      "Samla och hantera recensioner från plattformar som Google Reviews, Trustpilot m.fl. Svara direkt och håll varumärkets rykte i topp med allt på ett ställe.",
  },
  {
    icon: BarChart,
    title: "Sociala medier-insikter",
    description:
      "Följ och analysera engagemang på sociala medier. Hantera kommentarer och trender med hjälp av AI-insikter för smartare strategi.",
  },
  {
    icon: TrendingUp,
    title: "Analys & rapporter",
    description:
      "Skapa skräddarsydda rapporter med kraftfull analys. Få insikter från recensioner, sociala medier och kundbeteende.",
  },
  {
    icon: Calendar,
    title: "Innehållsplanering",
    description:
      "Schemalägg inlägg för Instagram, Facebook, X och fler plattformar. Planera innehåll på ett ställe och håll din närvaro konsekvent.",
  },
  {
    icon: Settings,
    title: "AI-feedback & betyg",
    description:
      "Få konkreta förbättringsförslag baserat på AI-analys av recensioner och sociala trender. Förstå vad kunderna verkligen tycker.",
  },
  {
    icon: Trophy,
    title: "Konkurrentanalys",
    description:
      "Se hur du står dig mot konkurrenterna. Jämför betyg och trender och se om du når topp 1% i din kategori.",
  },
];

const landingPageFAQs = [
  {
    question: "Vilka tjänster erbjuder Revly?",
    answer:
      "Revly hjälper e-handelsföretag växa med hjälp av datadriven annonsering, strategi och innehåll. Vi utvecklar också ett eget system för recensions- och innehållshantering (RMS), perfekt för dig som vill jobba smartare och mer strukturerat.",
  },
  {
    question: "Är Revlys Review Management System tillgängligt idag?",
    answer:
      "Inte än. Systemet är fortfarande under utveckling. Men du kan redan nu höra av dig för att påverka utvecklingen eller bli testpilot längre fram.",
  },
  {
    question: "Vem har nytta av Revlys tjänster?",
    answer:
      "Vi jobbar med växande e-handelsföretag som vill ta sin marknadsföring till nästa nivå. Oavsett om du är startup eller etablerad, vi hjälper dig hitta rätt väg framåt.",
  },
  {
    question: "Hur kommer jag igång?",
    answer:
      "Fyll i kontaktformuläret eller skicka ett mejl till info@revly.se så ser vi hur vi kan jobba tillsammans.",
  },
  {
    question: "Erbjuder Revly skräddarsydda lösningar?",
    answer:
      "Ja! Alla våra lösningar anpassas efter dina behov, oavsett om det handlar om betald annonsering, innehåll eller strategi.",
  },
];

const seoTitle = "Revly - Marknadsföring och omdömeshantering";
const seoDescription =
  "Revly hjälper företag att växa snabbare med hjälp av datadriven annonsering, tydlig struktur och smarta insikter.";
const seoUrl = "https://www.revly.se";
const faviconAlt = "Revly - Marknadsföring och omdömeshantering";

function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/revly_favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          url: seoUrl,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: "/revly_open_graph.png",
              width: 1200,
              height: 630,
              alt: faviconAlt,
              type: "image/png",
            },
          ],
        }}
      />
      <div className="min-h-screen">
        <HeroSection
          title="Skapa tillväxt med Revly"
          subtitle="Revly hjälper e-handelsföretag växa med datadrivna annonser, tydlig struktur och AI-drivna lösningar."
          buttonType="secondary"
          buttonText="Läs mer"
          buttonLink="#services"
          gradientClass="bg-rmsGradient bg-[length:200%_200%] animate-gradient-move"
          animatedText={false}
        />

        <Services />
        <StatsSection />
        <div className="w-full flex justify-center bg-gray-50 pb-32">
          <Button
            label={"Läs mer"}
            styleType={"primary"}
            onClick={() => router.push("/marketing")}
          ></Button>
        </div>
        <FeaturesSection
          features={rmsFeatures}
          heading="Review Management System"
          subheading="Vi bygger just nu ett system för att förenkla hantering av recensioner, innehåll och kundfeedback utvecklat för e-handlare som vill jobba mer datadrivet."
        />
        <div className="w-full flex justify-center bg-white pb-32">
          <Button
            label={"Läs mer"}
            styleType={"primary"}
            onClick={() => router.push("/rms")}
          ></Button>
        </div>
        <FAQSection title={"Vanliga frågor"} faqs={landingPageFAQs} />
      </div>
    </>
  );
}

export default Home;
