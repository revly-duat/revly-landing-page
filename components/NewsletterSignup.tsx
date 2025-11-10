import { useState, useRef, useEffect } from "react";

const COLORS = {
  navy900: "#000814",
  navy800: "#001D3D",
  navy700: "#003566",
  yellow500: "#FFC300",
  yellow400: "#FFD60A",
  text: "#E9EDF5",
  textMuted: "#B9C2D3",
  overlay: "rgba(255,255,255,0.10)",
};

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (hp) return; // bot-fälla

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSuccess(false);
      setMessage("Ange en giltig e-postadress.");
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    setIsSuccess(null);

    try {
      const response = await fetch(
        `https://a.klaviyo.com/client/subscriptions?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY}`,
        {
          method: "POST",
          headers: {
            revision: "2024-10-15",
            "Content-Type": "application/vnd.api+json",
          },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: {
                profile: {
                  data: {
                    type: "profile",
                    attributes: {
                      email,
                      properties: { source: "Newsletter Signup" },
                    },
                  },
                },
              },
              relationships: {
                list: {
                  data: {
                    type: "list",
                    id: process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID,
                  },
                },
              },
            },
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setMessage("Tack – du är anmäld.");
        setEmail("");
      } else {
        const data = await response.json().catch(() => ({}));
        setIsSuccess(false);
        setMessage(data?.message || "Något gick fel. Försök igen.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setIsSuccess(false);
      setMessage("Ett fel har uppstått. Försök igen senare.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ background: COLORS.navy900 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Panel */}
        <div
          className="rounded-3xl p-8 sm:p-10 border shadow-sm"
          style={{ background: COLORS.navy800, borderColor: COLORS.overlay }}
        >
          <div className="text-center">
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: "#FFFFFF" }}
            >
              Håll dig uppdaterad med Revly
            </h2>
            <p
              className="mt-3 text-base sm:text-lg"
              style={{ color: COLORS.textMuted }}
            >
              Insikter, case och konkreta tips – rakt till din inbox. Inget
              spam.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8" onSubmit={handleSubmit} noValidate>
            {/* Honeypot (visuellt dold) */}
            <label className="sr-only" htmlFor="company">
              Fyll inte i detta fält
            </label>
            <input
              id="company"
              type="text"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                ref={inputRef}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="E-postadress"
                className="w-full rounded-xl px-4 sm:px-5 py-3.5 outline-none border transition placeholder-opacity-60
                           focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                style={{
                  background: COLORS.navy900,
                  color: COLORS.text,
                  borderColor: COLORS.overlay,
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl px-6 sm:px-7 py-3.5 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed
                           hover:brightness-110"
                style={{ background: COLORS.yellow500, color: COLORS.navy900 }}
              >
                {isSubmitting ? "Skickar…" : "Prenumerera"}
              </button>
            </div>

            {/* Feedback */}
            <p
              className="mt-3 text-sm"
              aria-live="polite"
              role="status"
              style={{
                minHeight: 20,
                color:
                  isSuccess === true
                    ? COLORS.text
                    : isSuccess === false
                    ? "#FCA5A5"
                    : COLORS.textMuted,
              }}
            >
              {message}
            </p>

            {/* Privacy microcopy */}
            <p className="mt-3 text-xs" style={{ color: COLORS.textMuted }}>
              Genom att prenumerera godkänner du vår{" "}
              <a
                href="/privacy"
                className="underline"
                style={{ color: COLORS.yellow400 }}
              >
                integritetspolicy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
