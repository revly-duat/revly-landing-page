import Head from "next/head";
import { HeroSection } from "components/Hero";
import { FeaturesSection } from "components/Features";
import {
  MessageCircle,
  BarChart,
  TrendingUp,
  Calendar,
  Settings,
} from "lucide-react";
import { ContactForm } from "components/ContactForm";
import { NextSeo } from "next-seo";

const rmsFeatures = [
  {
    icon: MessageCircle,
    title: "Recensionshantering",
    description:
      "Samla och hantera recensioner från plattformar som Google Reviews, Trustpilot och fler. Svara direkt med AI och stärk ert rykte utan krångel.",
  },
  {
    icon: BarChart,
    title: "Sociala medier-insikter",
    description:
      "Följ och analysera engagemang i sociala medier. Hantera kommentarer och trender med hjälp av AI-insikter för bättre strategi.",
  },
  {
    icon: TrendingUp,
    title: "Analys & rapportering",
    description:
      "Skapa skräddarsydda rapporter med kraftfull analys. Följ trender i recensioner, sociala medier och kundbeteende.",
  },
  {
    icon: Calendar,
    title: "Innehållsplanering",
    description:
      "Schemalägg inlägg för Instagram, Facebook, X och fler plattformar. Få ordning och flyt i ert innehållsarbete.",
  },
  {
    icon: Settings,
    title: "AI-feedback & betyg",
    description:
      "Få smarta rekommendationer baserat på AI-analys av recensioner och sociala trender. Förstå vad kunderna verkligen tycker.",
  },
];

const seoTitle = "Revly RMS - Omdömeshantering med AI";
const seoDescription =
  "Hantera recensioner, sociala medier och analys. Revlys RMS är ett verktyg för e-handlare som vill jobba smartare. Under utveckling.";
const seoUrl = "https://www.revly.se/rms";
const faviconAlt = "Revly RMS - Omdömeshantering med AI";

const RMSPage = () => {
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
          title="Smartare omdömeshantering med AI"
          subtitle="Samla recensioner, planera innehåll och analysera kundfeedback allt i ett verktyg, byggt för växande företag."
          buttonType="secondary"
          buttonText="Anmäl intresse"
          buttonLink="https://brand.revly.se/signup"
          gradientClass="bg-rmsGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <FeaturesSection
          features={rmsFeatures}
          heading="Vad innehåller RMS?"
          subheading="Ett verktyg byggt för företag som vill arbeta smartare och mer datadrivet."
        />
        <section className="py-16 px-6 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              AI-baserade insikter
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Låt AI guida dina beslut med smart feedback baserad på verklig
              data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Betygstrender",
                  description:
                    "Följ hur era betyg utvecklas över tid på plattformar som Google Reviews och Trustpilot.",
                },
                {
                  title: "Kundsentiment",
                  description:
                    "Förstå vad era kunder tycker med hjälp av AI-baserad analys av kommentarer och recensioner.",
                },
                {
                  title: "Engagemangsförutsägelser",
                  description:
                    "Optimera innehållsstrategin med hjälp av förutsägelser om framtida engagemang.",
                },
              ].map((insight, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-white shadow-md text-left"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactForm
          title="Anmäl intresse"
          subtitle="Vill du testa RMS eller påverka utvecklingen? Fyll i formuläret nedan. Vi uppskattar all feedback och potentiella samarbeten."
          fields={{
            company: false,
            firstName: true,
            lastName: true,
            email: true,
            message: true,
          }}
        />
      </div>
    </>
  );
};

export default RMSPage;
