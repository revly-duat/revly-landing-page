"use client";

import * as React from "react";
import Script from "next/script";
import { gsap } from "gsap";
import Panel from "components/ui/Panel";
import EqualCard from "components/ui/Cards";
import Button from "components/ui/Button";
import { COLORS } from "components/theme/colors";
import { X, ArrowLeft, CalendarDays } from "lucide-react";

const APP_ID = process.env.NEXT_PUBLIC_APOLLO_APP_ID!;
const SCHEDULING_LINK = process.env.NEXT_PUBLIC_APOLLO_SCHEDULING_LINK!;

export default function BookingPage() {
  // refs
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const formRef = React.useRef<HTMLDivElement | null>(null);
  const schedRef = React.useRef<HTMLDivElement | null>(null);

  const meetingsReady = React.useRef(false);
  const [step, setStep] = React.useState<"form" | "scheduler">("form");

  // Init Apollo Meetings när scriptet laddas
  const handleMeetingsLoad = React.useCallback(() => {
    meetingsReady.current = true;
    (window as any).ApolloMeetings?.initWidget({
      appId: APP_ID,
      schedulingLink: SCHEDULING_LINK,
      domElement: schedRef.current ?? undefined, // inline i högerspalt
    });
  }, []);

  // GSAP setup
  React.useEffect(() => {
    if (!rootRef.current || !formRef.current || !schedRef.current) return;

    // Startläge: formuläret synligt, schemaläggaren utanför till höger
    gsap.set(formRef.current, { xPercent: 0, autoAlpha: 1 });
    gsap.set(schedRef.current, { xPercent: 100, autoAlpha: 0 });
  }, []);

  const animateToScheduler = React.useCallback(() => {
    if (!formRef.current || !schedRef.current) return;
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.inOut" },
    });
    tl.to(formRef.current, { xPercent: -100, autoAlpha: 0 }, 0).to(
      schedRef.current,
      { xPercent: 0, autoAlpha: 1 },
      0
    );
    setStep("scheduler");
  }, []);

  const animateBackToForm = React.useCallback(() => {
    if (!formRef.current || !schedRef.current) return;
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.inOut" },
    });
    tl.to(formRef.current, { xPercent: 0, autoAlpha: 1 }, 0).to(
      schedRef.current,
      { xPercent: 100, autoAlpha: 0 },
      0
    );
    setStep("form");
  }, []);

  // Klick på "Visa lediga tider"
  const handleSubmitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const AM = (window as any).ApolloMeetings;
    if (!AM || !meetingsReady.current) return;

    AM.submit({
      formId: "apollo-booking-form",
      onSuccess: () => {
        // Apollo har nu datan → visa schedulern i högerspalt
        animateToScheduler();
      },
      onError: (err: any) => {
        console.error("Apollo submit error", err);
      },
    });
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12" ref={rootRef}>
      {/* Apollo inbound enrichment – kör globalt eller här på sidan */}
      <Script
        src="https://assets.apollo.io/js/apollo-inbound.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).ApolloInbound?.formEnrichment?.init({
            appId: APP_ID, // samma appId
          });
        }}
      />
      {/* Meetings widget */}
      <Script
        src="https://assets.apollo.io/js/meetings/meetings-widget.js"
        strategy="afterInteractive"
        onLoad={handleMeetingsLoad}
      />

      <h1
        className="text-3xl font-bold tracking-tight"
        style={{ color: COLORS.white }}
      >
        Boka möte
      </h1>
      <p className="mt-2 text-zinc-400">
        Fyll i dina uppgifter så visar vi lediga tider. Allt sker direkt här på
        sidan.
      </p>

      <div className="relative mt-8">
        <Panel border={COLORS.navy700} className="rounded-2xl overflow-hidden">
          <EqualCard>
            {/* Wrapper med fast höjd och overflow hidden för “karusell”-känsla */}
            <div className="relative h-[680px] bg-[#000814] overflow-hidden">
              {/* FORM-PANEL (vänster) */}
              <div
                ref={formRef}
                className="absolute inset-0 p-6 md:p-8"
                aria-hidden={step !== "form"}
              >
                <div className="flex items-start justify-between">
                  <h2
                    className="text-xl font-bold"
                    style={{ color: COLORS.white }}
                  >
                    Dina uppgifter
                  </h2>
                </div>

                <p className="mt-1 text-sm" style={{ color: COLORS.textMuted }}>
                  Efter du skickat formuläret får du välja dag och tid.
                </p>

                <form id="apollo-booking-form" className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Förnamn" name="first_name" required />
                    <Field label="Efternamn" name="last_name" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Företag" name="organization_name" required />
                    <Field label="Telefon (valfritt)" name="phone" type="tel" />
                  </div>
                  <Field label="E-post" name="email" type="email" required />
                  <Field
                    label="Ämne du vill diskutera"
                    name="topic"
                    asTextArea
                    placeholder="Beskriv kort vad du vill ta upp"
                  />

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      label="Visa lediga tider"
                      styleType="secondarySmall"
                      icon={<CalendarDays className="h-4 w-4" />}
                      onClick={handleSubmitClick}
                      additionalClasses="w-full sm:w-auto"
                    />
                  </div>

                  <p
                    className="text-[11px] mt-2"
                    style={{ color: COLORS.textMuted }}
                  >
                    Genom att skicka godkänner du vår hantering av
                    personuppgifter.
                  </p>
                </form>
              </div>

              {/* SCHEDULER-PANEL (höger) */}
              <div
                ref={schedRef}
                className="absolute inset-0 p-0"
                aria-hidden={step !== "scheduler"}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between p-4 md:p-6 border-b border-[rgba(255,255,255,0.06)]">
                    <button
                      onClick={animateBackToForm}
                      className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Till uppgifterna
                    </button>
                    <button
                      onClick={() =>
                        (window as any).ApolloMeetings?.openScheduler?.()
                      }
                      className="p-2 text-zinc-400 hover:text-white"
                      aria-label="Öppna i overlay"
                      title="Öppna i overlay"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Här renderar Apollo inline */}
                  <div className="flex-1">
                    <div
                      id="apollo-meetings-container"
                      className="h-full w-full"
                      // valfri kantlinje i Revly-färg
                      style={{ borderLeft: `0px solid ${COLORS.overlaySoft}` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </EqualCard>
        </Panel>
      </div>
    </main>
  );
}

// Fält i Revly-stil
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
