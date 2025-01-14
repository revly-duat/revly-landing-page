import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Footer } from "components/Footer";
import NewsletterSignup from "components/NewsletterSignup";
import { Navigation } from "components/Navigation";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const is404Page = router.pathname === "/404";

  return (
    <QueryClientProvider client={queryClient}>
      {/* Vercel Analytics */}
      <Analytics />

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

      {!is404Page && <Navigation />}
      <Component {...pageProps} />
      {!is404Page && <NewsletterSignup />}
      {!is404Page && <Footer />}
    </QueryClientProvider>
  );
}

export default MyApp;
