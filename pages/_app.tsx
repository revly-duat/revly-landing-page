import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Footer } from "components/layout/Footer";
import { Navigation } from "components/layout/Navigation";
import { useRouter } from "next/router";
import CTA from "components/home/CTA";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const is404Page = router.pathname === "/404";

  return (
    <QueryClientProvider client={queryClient}>
      {/* Vercel Analytics */}
      <Analytics />
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="03f48e9e-73b9-4efe-9398-2c8dfee82899"
        type="text/javascript"
        async
      ></Script>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ENYBNDCDBG`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ENYBNDCDBG');
          `,
        }}
      />

      {/* Klaviyo Script */}
      <Script
        strategy="afterInteractive"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TBEeQc"
      />
      <DefaultSeo {...SEO} />
      {!is404Page && <Navigation />}
      <main>
        <Component {...pageProps} />
      </main>
      {!is404Page && <CTA />}
      {!is404Page && <Footer />}
    </QueryClientProvider>
  );
}

export default MyApp;
