import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "components/layout/Container";
import Button from "components/ui/Button";
import FadeIn from "components/ui/FadeIn";
import Panel from "components/ui/Panel";
import SectionTitle from "components/ui/SectionTitle";
import { COLORS } from "components/theme/colors";
import { NextSeo } from "next-seo";

// (Valfritt) om du har den nya modulen
// import NewsletterSignup from "@/components/Newsletter/NewsletterSignup";

const contactFAQs = [
  {
    q: "Hur lång tid tar det att få svar?",
    a: "Vi svarar normalt inom 24–48 timmar. Bråttom? Mejla direkt till info@revly.se.",
  },
  {
    q: "Vilka tjänster erbjuder Revly?",
    a: "Datadriven annonsering, strategi och kreativa iterationer för e-handel – med fokus på mätbar tillväxt.",
  },
  {
    q: "Hur kommer jag igång?",
    a: "Skicka ett meddelande via formuläret eller mejla oss. Vi bokar ett kort uppstartssamtal och tar det därifrån.",
  },
];

export default function ContactPage() {
  // enkel formulärhantering lokalt
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [ok, setOk] = useState<boolean | null>(null);

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!first || !last || !validEmail(email) || !message) {
      setOk(false);
      setFeedback("Fyll i alla fält och ange en giltig e-post.");
      return;
    }

    // Bas-lösning: öppna mailklient (ersätt med API/CRM när du vill)
    setSending(true);
    try {
      const subject = encodeURIComponent("Kontaktförfrågan via revly.se");
      const body = encodeURIComponent(
        `Namn: ${first} ${last}\nE-post: ${email}\n\nMeddelande:\n${message}`
      );
      window.location.href = `mailto:info@revly.se?subject=${subject}&body=${body}`;
      setOk(true);
      setFeedback("Tack! Vi återkommer inom 1–2 arbetsdagar.");
      setFirst("");
      setLast("");
      setEmail("");
      setMessage("");
    } catch {
      setOk(false);
      setFeedback("Något gick fel. Prova igen eller mejla info@revly.se.");
    } finally {
      setSending(false);
    }
  };

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

        {/* FORM */}
        <Container className="pb-20">
          <FadeIn>
            <Panel>
              <form onSubmit={onSubmit} className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm mb-1"
                      style={{ color: COLORS.textMuted }}
                    >
                      Förnamn
                    </label>
                    <input
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                      required
                      className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
                      style={{
                        background: COLORS.navy900,
                        color: COLORS.text,
                        borderColor: COLORS.overlay,
                      }}
                      placeholder="Ditt förnamn"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-1"
                      style={{ color: COLORS.textMuted }}
                    >
                      Efternamn
                    </label>
                    <input
                      value={last}
                      onChange={(e) => setLast(e.target.value)}
                      required
                      className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
                      style={{
                        background: COLORS.navy900,
                        color: COLORS.text,
                        borderColor: COLORS.overlay,
                      }}
                      placeholder="Ditt efternamn"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm mb-1"
                    style={{ color: COLORS.textMuted }}
                  >
                    E-postadress
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
                    style={{
                      background: COLORS.navy900,
                      color: COLORS.text,
                      borderColor: COLORS.overlay,
                    }}
                    placeholder="Din e-postadress"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block text-sm mb-1"
                    style={{ color: COLORS.textMuted }}
                  >
                    Meddelande
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition resize-y"
                    style={{
                      background: COLORS.navy900,
                      color: COLORS.text,
                      borderColor: COLORS.overlay,
                    }}
                    placeholder="Hur kan vi hjälpa dig?"
                  />
                </div>

                {feedback && (
                  <p
                    className="mt-3 text-sm"
                    style={{ color: ok ? COLORS.text : "#FCA5A5" }}
                  >
                    {feedback}
                  </p>
                )}

                <div className="flex justify-center mt-6">
                  <Button
                    label={sending ? "Skickar…" : "Skicka"}
                    styleType="primary"
                    icon={<ArrowRight className="h-4 w-4" />}
                    disabled={sending}
                  />
                </div>
              </form>
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

        {/* Newsletter (om du vill ha med den här) */}
        {/* <NewsletterSignup /> */}
      </main>
    </>
  );
}
