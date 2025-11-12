import React from "react";
import { COLORS } from "./theme/colors";
import Button from "./ui/Button/Button";
import { CalendarDays } from "lucide-react";

// Bokningsformulär – liknande ContactForm men anpassat för Apollo Meetings
function BookingForm({
  title = "Dina uppgifter",
  subtitle = "Efter du skickat formuläret får du välja dag och tid.",
  hideHeader = false,
  className = "",
  onSubmit,
}: {
  title?: string;
  subtitle?: string;
  hideHeader?: boolean;
  className?: string;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [sending, setSending] = React.useState(false);
  const [feedback, setFeedback] = React.useState<string | null>(null);
  const [ok, setOk] = React.useState<boolean | null>(null);

  const [formData, setFormData] = React.useState({
    company: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    topic: "",
  });

  const onChange =
    (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((s) => ({ ...s, [key]: e.target.value }));
    };

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFeedback(null);
    setOk(null);

    if (!formData.firstName) {
      setOk(false);
      setFeedback("Fyll i förnamn.");
      return;
    }
    if (!formData.lastName) {
      setOk(false);
      setFeedback("Fyll i efternamn.");
      return;
    }
    if (!validEmail(formData.email)) {
      setOk(false);
      setFeedback("Ange en giltig e-postadress.");
      return;
    }

    try {
      setSending(true);
      // Låt Apollo hämta fälten från DOM-formen via id nedan.
      onSubmit(e);
      setOk(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={className}>
      {!hideHeader && (
        <div>
          <h2 className="text-xl font-bold" style={{ color: COLORS.white }}>
            {title}
          </h2>
          <p className="mt-1 text-sm" style={{ color: COLORS.textMuted }}>
            {subtitle}
          </p>
        </div>
      )}

      {/* VIKTIGT: id måste vara 'apollo-booking-form' för Apollo.submit */}
      <form id="apollo-booking-form" className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm mb-1"
              style={{ color: COLORS.textMuted }}
            >
              Förnamn
            </label>
            <input
              id="first_name"
              name="first_name"
              required
              value={formData.firstName}
              onChange={onChange("firstName")}
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
              htmlFor="last_name"
              className="block text-sm mb-1"
              style={{ color: COLORS.textMuted }}
            >
              Efternamn
            </label>
            <input
              id="last_name"
              name="last_name"
              required
              value={formData.lastName}
              onChange={onChange("lastName")}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="organization_name"
              className="block text-sm mb-1"
              style={{ color: COLORS.textMuted }}
            >
              Företag
            </label>
            <input
              id="organization_name"
              name="organization_name"
              required
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
          <div>
            <label
              htmlFor="phone"
              className="block text-sm mb-1"
              style={{ color: COLORS.textMuted }}
            >
              Telefon (valfritt)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={onChange("phone")}
              className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
              style={{
                background: COLORS.navy900,
                color: COLORS.text,
                borderColor: COLORS.overlay,
              }}
              placeholder="070-123 45 67"
            />
          </div>
        </div>

        <div>
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
            required
            value={formData.email}
            onChange={onChange("email")}
            className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition"
            style={{
              background: COLORS.navy900,
              color: COLORS.text,
              borderColor: COLORS.overlay,
            }}
            placeholder="din@epost.se"
          />
        </div>

        <div>
          <label
            htmlFor="topic"
            className="block text-sm mb-1"
            style={{ color: COLORS.textMuted }}
          >
            Ämne du vill diskutera
          </label>
          <textarea
            id="topic"
            name="topic"
            rows={4}
            value={formData.topic}
            onChange={onChange("topic")}
            className="w-full rounded-xl px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] border transition resize-y"
            style={{
              background: COLORS.navy900,
              color: COLORS.text,
              borderColor: COLORS.overlay,
            }}
            placeholder="Beskriv kort vad du vill ta upp"
          />
        </div>

        {feedback && (
          <p
            className="text-sm"
            style={{ color: ok ? COLORS.text : "#FCA5A5" }}
            role={ok ? "status" : "alert"}
          >
            {feedback}
          </p>
        )}

        <div className="pt-2 flex items-center gap-3">
          <Button
            label={sending ? "Skickar…" : "Visa lediga tider"}
            styleType="secondarySmall"
            icon={<CalendarDays className="h-4 w-4" />}
            onClick={handleClick}
            additionalClasses="w-full sm:w-auto"
            disabled={sending}
          />
        </div>

        <p className="text-[11px] mt-2" style={{ color: COLORS.textMuted }}>
          Genom att skicka godkänner du vår hantering av personuppgifter.
        </p>
      </form>
    </div>
  );
}
