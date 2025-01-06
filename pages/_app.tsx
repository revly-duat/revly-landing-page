import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css"; // Global styles
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
