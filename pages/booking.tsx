"use client";

import * as React from "react";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { gsap } from "gsap";

import Container from "components/layout/Container";
import FadeIn from "components/ui/FadeIn";
import Panel from "components/ui/Panel";
import SectionTitle from "components/ui/SectionTitle";
import EqualCard from "components/ui/Cards";
import Button from "components/ui/Button";
import { COLORS } from "components/theme/colors";
import { X, ArrowLeft, CalendarDays, ArrowRight } from "lucide-react";

const APP_ID = process.env.NEXT_PUBLIC_APOLLO_APP_ID!;
const SCHEDULING_LINK = process.env.NEXT_PUBLIC_APOLLO_SCHEDULING_LINK!;

const bookingFAQs = [
  {
    q: "Behöver jag skriva in alla uppgifter?",
    a: "Vi behöver kontaktuppgifter och företag för att kunna förbereda mötet. Telefon är valfritt.",
  },
  {
    q: "När kan jag boka tid?",
    a: "När du skickat formuläret laddas lediga tider direkt på sidan – välj den tid som passar.",
  },
  {
    q: "Kan jag boka om?",
    a: "Ja, via bekräftelsemejlet kan du av- eller omboka tiden.",
  },
];

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
    <>
      {/* SEO */}
      <NextSeo
        title="Boka möte – Revly"
        description="Boka ett kostnadsfritt möte med Revly. Fyll i dina uppgifter och välj en tid direkt på sidan."
        canonical="https://www.revly.se/booking"
      />

      <main style={{ background: COLORS.navy900 }}>
        {/* HERO – samma struktur som ContactPage */}
        <Container className="pt-28 md:pt-32 pb-6">
          <SectionTitle
            title="Boka möte"
            subtitle="Fyll i dina uppgifter – därefter visar vi lediga tider direkt här."
          />
        </Container>

        {/* FORM + SCHEDULER PANEL */}
        <Container className="pb-20">
          {/* Apollo inbound enrichment – kör globalt eller här på sidan */}
          <Script
            src="https://assets.apollo.io/js/apollo-inbound.js"
            strategy="afterInteractive"
            onLoad={() => {
              (window as any).ApolloInbound?.formEnrichment?.init({
                appId: APP_ID,
              });
            }}
          />
          {/* Meetings widget */}
          <Script
            src="https://assets.apollo.io/js/meetings/meetings-widget.js"
            strategy="afterInteractive"
            onLoad={handleMeetingsLoad}
          />

          <FadeIn>
            <Panel>
              <EqualCard>
                {/* Wrapper med fast höjd och overflow hidden för “karusell”-känsla */}
                <div className="relative h-[680px] bg-[#000814] overflow-hidden rounded-2xl">
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

                    <p
                      className="mt-1 text-sm"
                      style={{ color: COLORS.textMuted }}
                    >
                      Efter du skickat formuläret får du välja dag och tid.
                    </p>

                    <form id="apollo-booking-form" className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field label="Förnamn" name="first_name" required />
                        <Field label="Efternamn" name="last_name" required />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field
                          label="Företag"
                          name="organization_name"
                          required
                        />
                        <Field
                          label="Telefon (valfritt)"
                          name="phone"
                          type="tel"
                        />
                      </div>
                      <Field
                        label="E-post"
                        name="email"
                        type="email"
                        required
                      />
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
                        <Button
                          label="Tillbaka"
                          styleType="secondarySmall"
                          icon={<ArrowLeft className="h-4 w-4" />}
                          onClick={() => history.back()}
                          additionalClasses="hidden sm:inline-flex"
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </EqualCard>
            </Panel>
          </FadeIn>
        </Container>

        {/* FAQ – samma struktur som ContactPage */}
        <Container className="pb-24">
          <SectionTitle kicker="FAQ" title="Vanliga frågor om bokning" />
          <FadeIn>
            <div
              className="max-w-3xl mx-auto divide-y"
              style={{ borderColor: COLORS.overlay }}
            >
              {bookingFAQs.map((f, i) => (
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
