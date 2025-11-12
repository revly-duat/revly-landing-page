// /components/ApolloMeetingsWidget.tsx
"use client";
import * as React from "react";
import Script from "next/script";

type Props = {
  // Valfritt: åsidosätt env-värden via props
  appId?: string;
  schedulingLink?: string; // t.ex. "pcw-xi0-1br"
  className?: string;
  // Om du vill att widgeten ska öppnas automatiskt när komponenten mountar
  autoOpen?: boolean;
};

export default function ApolloMeetingsWidget({
  appId = process.env.NEXT_PUBLIC_APOLLO_APP_ID!,
  schedulingLink = process.env.NEXT_PUBLIC_APOLLO_SCHEDULING_LINK!,
  className,
  autoOpen = false,
}: Props) {
  // Init en gång efter att scriptet laddats
  const handleLoaded = React.useCallback(() => {
    (window as any).ApolloMeetings?.initWidget({ appId, schedulingLink });
    if (autoOpen) {
      (window as any).ApolloMeetings?.openScheduler?.();
    }
  }, [appId, schedulingLink, autoOpen]);

  return (
    <div className={className}>
      <Script
        src="https://assets.apollo.io/js/meetings/meetings-widget.js"
        strategy="afterInteractive"
        onLoad={handleLoaded}
      />

      {/* Trigger-knapp som öppnar Apollo-schemaläggaren */}
      <button
        onClick={() => (window as any).ApolloMeetings?.openScheduler?.()}
        className="inline-flex items-center rounded-2xl bg-black px-4 py-2 text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black"
        aria-label="Boka möte"
      >
        Boka möte
      </button>

      {/* Inplaceringsyta ifall Apollo injicerar UI i DOM */}
      <div id="apollo-meetings-container" className="mt-4" />

      {/* No-JS fallback */}
      <noscript>
        <a
          href={`https://meetings.apollo.io/${schedulingLink}`}
          className="underline"
        >
          Boka möte via Apollo
        </a>
      </noscript>
    </div>
  );
}
