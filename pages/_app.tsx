import { AppProps } from "next/app";
import { Toaster } from "components/ui/toaster";
import { Toaster as Sonner } from "unused components/sonner";
import { TooltipProvider } from "unused components/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css"; // Add global styles if applicable

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Component {...pageProps} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
