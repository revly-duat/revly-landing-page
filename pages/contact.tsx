import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { FAQSection } from "components/ui/FAQ";

const contactFAQs = [
  {
    question: "Hur lång tid tar det att få svar?",
    answer:
      "Vi strävar efter att svara på alla förfrågningar inom 24-48 timmar. Vårt team jobbar snabbt och noggrant för att du ska få hjälp så snart som möjligt. Har du ett brådskande ärende? Skicka gärna ett mejl direkt till info@revly.se.",
  },
  {
    question: "Vilka tjänster erbjuder Revly?",
    answer:
      "Revly är specialiserade på marknadsföring för e-handelsföretag. Vi erbjuder hjälp med media buying, innehåll, strategi och struktur, samt utvecklar just nu ett eget verktyg för recensionshantering (RMS).",
  },
  {
    question: "Hur kommer jag igång?",
    answer:
      "Det är enkelt! Fyll i kontaktformuläret nedan eller skicka ett mejl till info@revly.se så återkommer vi inom kort.",
  },
];

const seoTitle = "Revly - Kontakta oss";
const seoDescription =
  "Hör av dig till Revly för att få veta mer om våra tjänster och hur vi kan hjälpa ditt företag att växa.";
const seoUrl = "https://www.revly.se/contact";
const faviconAlt = "Revly - Kontakta oss";

function ContactPage() {
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
        <ContactForm
          title="Kontakta oss"
          subtitle="Har du frågor eller behöver hjälp? Fyll i formuläret nedan eller mejla oss på info@revly.se."
          fields={{
            company: false,
            firstName: true,
            lastName: true,
            email: true,
            message: true,
          }}
        />
        <FAQSection title="Vanliga frågor" faqs={contactFAQs} />
      </div>
    </>
  );
}

export default ContactPage;
