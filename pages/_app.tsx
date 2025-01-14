import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css"; // Global styles
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"; // Importera Next.js Script
import { Footer } from "components/Footer";
import NewsletterSignup from "components/NewsletterSignup";
import { Navigation } from "components/Navigation";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <Script
        strategy="afterInteractive"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TBEeQc"
      />
      <Navigation />
      <Component {...pageProps} />
      <NewsletterSignup />
      <Footer />
    </QueryClientProvider>
  );
}

export default MyApp;
