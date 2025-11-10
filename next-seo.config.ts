// next-seo.config.ts
import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "Revly - Datadriven marknadsföring som skalar tillväxt",
  description:
    "Revly hjälper företag växa lönsamt med datadriven marknadsföring, strategi och kreativt innehåll. Meta, TikTok och Google – testat, optimerat och skalarbart.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.revly.se",
    siteName: "Revly",
    images: [
      {
        url: "/revly_og.png",
        width: 1200,
        height: 630,
        alt: "Revly - Datadriven marknadsföring som skalar tillväxt",
      },
    ],
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon_512x512.png" },
    { rel: "apple-touch-icon", href: "/favicon_180x180.png" },
  ],
};

export default config;
