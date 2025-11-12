// /components/meetings/ApolloBookingDialog.tsx
"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Script from "next/script";
import { X, CalendarDays } from "lucide-react";

// Revly-komponenter/tema (anpassa importvägarna efter ert repo)
import Panel from "components/ui/Panel";
import EqualCard from "components/ui/Cards";
import Button from "components/ui/Button";
import { COLORS } from "components/theme/colors";

const APP_ID = process.env.NEXT_PUBLIC_APOLLO_APP_ID!; // "6914788f7be0b8001188fac9"
const SCHEDULING_LINK = process.env.NEXT_PUBLIC_APOLLO_SCHEDULING_LINK!; // "pcw-xi0-1br"

export default function ApolloBookingDialog() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleScriptLoad = React.useCallback(() => {
    // Init widget och rendera i dialogens container
    (window as any).ApolloMeetings?.initWidget({
      appId: APP_ID,
      schedulingLink: SCHEDULING_LINK,
      domElement: containerRef.current ?? undefined,
    });
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Skicka formulärvärdena till Apollo och öppna schemaläggaren
    (window as any).ApolloMeetings?.submit({
      formId: "apollo-booking-form",
      // Behåll mapping = true (default) så Apollo läser input[name] => router fields
      onRouted: () => {
        // valfritt: analytics
      },
      onError: (err: any) => {
        console.error("Apollo Meetings error", err);
      },
      onSuccess: () => {
        // valfritt: visa tack, stäng dialog etc.
      },
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          label="Boka möte"
          styleType="secondarySmall"
          icon={<CalendarDays className="h-4 w-4" />}
        />
      </Dialog.Trigger>

      {/* Apollo script laddas en gång när dialogen mountas */}
      {open && (
        <Script
          src="https://assets.apollo.io/js/meetings/meetings-widget.js"
          strategy="afterInteractive"
          onLoad={handleScriptLoad}
        />
      )}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 p-0">
          <Panel border={COLORS.navy700} className="overflow-hidden">
            <EqualCard>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Vänster: Form */}
                <div className="p-6 border-r border-[rgba(255,255,255,0.08)] bg-[#000814]">
                  <div className="flex items-start justify-between">
                    <Dialog.Title
                      className="text-xl font-bold"
                      style={{ color: COLORS.white }}
                    >
                      Boka ett möte
                    </Dialog.Title>
                    <Dialog.Close className="p-2 text-zinc-400 hover:text-white">
                      <X className="h-5 w-5" />
                    </Dialog.Close>
                  </div>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: COLORS.textMuted }}
                  >
                    Fyll i uppgifterna så visar vi lediga tider direkt.
                  </p>

                  <form
                    id="apollo-booking-form"
                    onSubmit={onSubmit}
                    className="mt-6 space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field label="Förnamn" name="first_name" required />
                      <Field label="Efternamn" name="last_name" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field label="Företag" name="company_name" required />
                      <Field
                        label="Telefon (valfritt)"
                        name="phone"
                        type="tel"
                      />
                    </div>
                    <Field label="E‑post" name="email" type="email" required />
                    <Field
                      label="Ämne du vill diskutera"
                      name="topic"
                      asTextArea
                      placeholder="Beskriv kort vad du vill ta upp"
                    />

                    {/* Submit knappen triggar Apollo Meetings widget via submit() */}
                    <div className="pt-2">
                      <Button
                        label="Visa lediga tider"
                        styleType="secondarySmall"
                        additionalClasses="w-full"
                      />
                    </div>

                    {/* Tips / GDPR */}
                    <p
                      className="text-[11px] mt-2"
                      style={{ color: COLORS.textMuted }}
                    >
                      Genom att skicka godkänner du vår hantering av
                      personuppgifter.
                    </p>
                  </form>
                </div>

                {/* Höger: Apollo-renderad scheduler (overlay/modal eller inuti domElement) */}
                <div className="p-0 bg-[#000814]">
                  <div
                    ref={containerRef}
                    id="apollo-meetings-container"
                    className="h-full min-h-[520px] w-full"
                    style={{ borderLeft: `1px solid ${COLORS.overlaySoft}` }}
                  />
                </div>
              </div>
            </EqualCard>
          </Panel>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Små UI-hjälpare i Revly-stil
function Field({
  label,
  name,
  type = "text",
  required,
  asTextArea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  asTextArea?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span
        className="text-xs font-semibold"
        style={{ color: COLORS.yellow400 }}
      >
        {label} {required ? "*" : ""}
      </span>
      {asTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          className="mt-1 w-full rounded-2xl bg-[#0b1020] border border-[rgba(255,255,255,0.08)] px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
          rows={4}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="mt-1 w-full rounded-2xl bg-[#0b1020] border border-[rgba(255,255,255,0.08)] px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
        />
      )}
    </label>
  );
}
