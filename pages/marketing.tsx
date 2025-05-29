import Head from "next/head";
import { NextSeo } from "next-seo";
import { FeaturesSection } from "components/Features";
import { HeroSection } from "components/Hero";
import { BarChart, Target, Globe } from "lucide-react";
import { StatsSection } from "components/StatsSection";
import { ContactForm } from "components/ContactForm";
import { FAQSection } from "components/ui/FAQ";

const marketingFAQs = [
  {
    question: "Vilka plattformar annonserar ni på?",
    answer:
      "Vi arbetar främst med Meta (Facebook och Instagram), men kan även annonsera på Google, TikTok och andra plattformar beroende på vad som passar ditt företag bäst.",
  },
  {
    question: "Vad kostar era tjänster?",
    answer:
      "Vi har inga fasta paketpriser. Istället anpassar vi priset efter varje kunds behov, budget och arbetsmängd. Målet är att skapa en prismodell som ger både värde och resultat.",
  },
  {
    question: "Får vi rapporter?",
    answer:
      "Ja. Vi skickar veckovisa rapporter med tydlig statistik och analys så att ni har full koll på hur annonseringen går.",
  },
];

const marketingPageFeatures = [
  {
    icon: BarChart,
    title: "Datadrivna kampanjer",
    description:
      "Optimera annonsbudgeten med hjälp av insikter och analys. Fokus på ROAS och tydliga resultat.",
  },
  {
    icon: Target,
    title: "Precision i målgrupp",
    description:
      "Vi hittar rätt kunder med smart segmentering och kreativa strategier som engagerar och konverterar.",
  },
  {
    icon: Globe,
    title: "Skalbara lösningar",
    description:
      "Redo att växa? Våra strategier kan enkelt skalas upp både nationellt och internationellt.",
  },
];

const seoTitle = "Revly - Resultatinriktad annonsering för e-handel";
const seoDescription =
  "Revly hjälper e-handelsföretag växa med datadriven annonsering. Få ut mer av din marknadsbudget och nå rätt målgrupp med bevisad strategi.";
const seoUrl = "https://www.revly.se/marketing";
const faviconAlt = "Revly - Marknadsföring för tillväxt";

function Marketing() {
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
          title="Ta er marknadsföring till nästa nivå"
          subtitle="Väx snabbare, nå rätt målgrupp och få kontroll på resultaten med smart annonsering."
          buttonType="secondary"
          buttonText="Kom igång"
          buttonLink="#contactForm"
          gradientClass="bg-rmsGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <FeaturesSection
          features={marketingPageFeatures}
          heading="Vad gör vi?"
          subheading="Upptäck hur Revlys tjänster inom marknadsföring hjälper e-handelsföretag växa med lönsamhet."
        />
        <StatsSection />
        <FAQSection title="Vanliga frågor" faqs={marketingFAQs} />
        <ContactForm
          title="Kontakta oss"
          subtitle="Redo att växa? Fyll i formuläret nedan så hör vi av oss inom kort."
          fields={{
            company: true,
            firstName: true,
            lastName: true,
            email: true,
            message: true,
          }}
        />
      </div>
    </>
  );
}

export default Marketing;
