// components/ContactForm/index.tsx
import * as React from "react";
import emailjs from "emailjs-com";
import Panel from "components/ui/Panel";
import Button from "components/ui/Button";
import { COLORS } from "components/theme/colors";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  fields: {
    company?: boolean;
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    message: boolean;
  };
  /** Om message-fältet är avstängt kan du skicka ett hårdkodat default-meddelande */
  defaultMessage?: string;
  /** Visa inte rubriker (om du redan har SectionTitle ovanför) */
  hideHeader?: boolean;
  /** ClassName för yttre wrapper om du vill styra spacing utifrån */
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Kontakta oss",
  subtitle = "Fyll i formuläret så återkommer vi så snart vi kan.",
  fields,
  defaultMessage,
  hideHeader = false,
  className = "",
}) => {
  const [formData, setFormData] = React.useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = React.useState(false);
  const [feedback, setFeedback] = React.useState<string | null>(null);
  const [ok, setOk] = React.useState<boolean | null>(null);

  const onChange =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((s) => ({ ...s, [key]: e.target.value }));
    };

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFeedback(null);
    setOk(null);

    // Grundvalidering baserat på vilka fält som är aktiva
    if (fields.firstName && !formData.firstName) {
      setOk(false);
      setFeedback("Fyll i förnamn.");
      return;
    }
    if (fields.lastName && !formData.lastName) {
      setOk(false);
      setFeedback("Fyll i efternamn.");
      return;
    }
    if (fields.email && !validEmail(formData.email)) {
      setOk(false);
      setFeedback("Ange en giltig e-postadress.");
      return;
    }
    if (fields.message && !formData.message && !defaultMessage) {
      setOk(false);
      setFeedback("Skriv ett meddelande.");
      return;
    }

    setSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_MARKETING_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    const payload = {
      company: formData.company,
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: fields.message ? formData.message : defaultMessage || "",
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, payload, publicKey);
        setOk(true);
        setFeedback("Tack! Vi återkommer inom 1–2 arbetsdagar.");
        setFormData({
          company: "",
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        // Fallback: öppna mailklienten
        const subject = encodeURIComponent("Kontaktförfrågan via revly.se");
        const lines = [
          payload.name ? `Namn: ${payload.name}` : "",
          payload.company ? `Företag: ${payload.company}` : "",
          payload.email ? `E-post: ${payload.email}` : "",
          "",
          "Meddelande:",
          payload.message || "",
        ]
          .filter(Boolean)
          .join("\n");
        const body = encodeURIComponent(lines);
        window.location.href = `mailto:info@revly.se?subject=${subject}&body=${body}`;
        setOk(true);
        setFeedback("Tack! Vi återkommer inom 1–2 arbetsdagar.");
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setOk(false);
      setFeedback(
        "Något gick fel. Prova igen, eller mejla oss på info@revly.se."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={className}>
      {!hideHeader && (title || subtitle) && (
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          {title && (
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: COLORS.white }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className="mt-3 text-base sm:text-lg"
              style={{ color: COLORS.text }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <Panel>
        <form className="p-6 sm:p-8">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.company && (
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm mb-1"
                  style={{ color: COLORS.textMuted }}
                >
                  Företag
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={onChange("company")}
                  className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
                  style={{
                    background: COLORS.navy900,
                    color: COLORS.text,
                    borderColor: COLORS.overlay,
                  }}
                  placeholder="Ditt företagsnamn"
                />
              </div>
            )}

            {fields.firstName && (
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm mb-1"
                  style={{ color: COLORS.textMuted }}
                >
                  Förnamn
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChange("firstName")}
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
            )}

            {fields.lastName && (
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm mb-1"
                  style={{ color: COLORS.textMuted }}
                >
                  Efternamn
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChange("lastName")}
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
            )}

            {fields.email && (
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm mb-1"
                  style={{ color: COLORS.textMuted }}
                >
                  E-postadress
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange("email")}
                  required
                  className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
                  style={{
                    background: COLORS.navy900,
                    color: COLORS.text,
                    borderColor: COLORS.overlay,
                  }}
                  placeholder="din@epost.se"
                />
              </div>
            )}
          </div>

          {fields.message && (
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm mb-1"
                style={{ color: COLORS.textMuted }}
              >
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={onChange("message")}
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
          )}

          {/* Feedback */}
          {feedback && (
            <p
              className="mt-3 text-sm"
              style={{ color: ok ? COLORS.text : "#FCA5A5" }}
              role={ok ? "status" : "alert"}
            >
              {feedback}
            </p>
          )}

          {/* Submit */}
          <div className="flex justify-center mt-6">
            <Button
              label={sending ? "Skickar…" : "Skicka"}
              styleType="primary"
              icon={<ArrowRight className="h-4 w-4" />}
              disabled={sending}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default ContactForm;
