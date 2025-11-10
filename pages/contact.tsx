// pages/contact.tsx (eller motsvarande route)

import Container from "components/layout/Container";
import FadeIn from "components/ui/FadeIn";
import Panel from "components/ui/Panel";
import SectionTitle from "components/ui/SectionTitle";
import { COLORS } from "components/theme/colors";
import { NextSeo } from "next-seo";
import { ArrowRight } from "lucide-react";

// Justera import-sökvägen till där din ContactForm ligger
import { ContactForm } from "components/ContactForm";

const contactFAQs = [
  {
    q: "Hur lång tid tar det att få svar?",
    a: "Vi svarar normalt inom 24-48 timmar. Bråttom? Mejla direkt till info@revly.se.",
  },
  {
    q: "Vilka tjänster erbjuder Revly?",
    a: "Datadriven annonsering, strategi och kreativa iterationer för e-handel - med fokus på mätbar tillväxt.",
  },
  {
    q: "Hur kommer jag igång?",
    a: "Skicka ett meddelande via formuläret eller mejla oss. Vi bokar ett kort uppstartssamtal och tar det därifrån.",
  },
];

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Kontakta Revly - Datadriven marknadsföringsbyrå"
        description="Boka ett kostnadsfritt samtal med Revly. Vi hjälper företag växa med strategi, annonsering och optimering baserat på data."
        canonical="https://www.revly.se/contact"
      />

      <main style={{ background: COLORS.navy900 }}>
        {/* HERO */}
        <Container className="pt-28 md:pt-32 pb-6">
          <SectionTitle
            title="Kontakta oss"
            subtitle="Har du frågor eller vill komma igång? Skicka ett meddelande så återkopplar vi så snart vi kan!"
          />
        </Container>

        {/* FORM (ersatt med ContactForm) */}
        <Container className="pb-20">
          <FadeIn>
            <Panel>
              <div className="p-0 sm:p-0">
                <ContactForm
                  title="Kontakta Revly"
                  hideHeader
                  subtitle="Fyll i formuläret så återkommer vi vanligtvis inom 24-48 timmar."
                  fields={{
                    company: true, // sätt till false om du inte vill visa fältet
                    firstName: true,
                    lastName: true,
                    email: true,
                    message: true, // sätt till false om du vill köra hårdkodat defaultMessage
                  }}
                  // defaultMessage="Jag vill boka ett uppstartssamtal." // valfritt när fields.message=false
                />
              </div>
            </Panel>
          </FadeIn>
        </Container>

        {/* FAQ */}
        <Container className="pb-24">
          <SectionTitle kicker="FAQ" title="Vanliga frågor" />
          <FadeIn>
            <div
              className="max-w-3xl mx-auto divide-y"
              style={{ borderColor: COLORS.overlay }}
            >
              {contactFAQs.map((f, i) => (
                <details key={i} className="py-4 group">
                  <summary className="list-none flex items-center justify-between cursor-pointer border-t border-transparent group-hover:border-[#FFC300] pt-4 -mt-4">
                    <span
                      className="text-base font-semibold"
                      style={{ color: COLORS.white }}
                    >
                      {f.q}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-open:rotate-90"
                      style={{ color: COLORS.text }}
                    />
                  </summary>
                  <p className="mt-2 text-sm" style={{ color: COLORS.text }}>
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </Container>
      </main>
    </>
  );
}
