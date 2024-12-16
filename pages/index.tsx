import Head from "next/head";
import { NextSeo } from "next-seo";
import { Navigation } from "components/Navigation";
import { HeroSection } from "components/Hero";
import { FeaturesSection } from "components/Features";
import { Services } from "components/Services";
import { Testimonials } from "components/Testimonials";
import { CTA } from "components/CTA";
import { Footer } from "components/Footer";
import { Laptop2, MessageCircle, TrendingUp } from "lucide-react";

const landingPageFeatures = [
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Expand your business with targeted campaigns. Reach a larger audience and scale your operations effectively using data-driven strategies.",
  },
  {
    icon: MessageCircle,
    title: "Reputation Management System",
    description:
      "Unify your online reputation management with review tools, social media insights, and AI-powered analytics to maintain your competitive edge.",
  },
  {
    icon: Laptop2,
    title: "Courses",
    description:
      "Empower your team with skills in Data, IT, and analytics through hands-on courses led by industry professionals.",
  },
];

const seoTitle = "Revly - Simplify Review Management, Marketing & Training";
const seoDescription =
  "Grow smarter with Revly's solutions for review management, marketing, and training. Simplify processes and achieve success today.";
const seoUrl = "https://www.revly.se";
const faviconAlt = "Revly - Simplify Business Growth";

function Home() {
  return (
    <>
      <Head>
        <title>Revly - Simplify Review Management & Business Growth</title>
        <meta
          name="description"
          content="Revly helps businesses succeed with tools for review management, marketing, and professional training."
        />
        <link rel="icon" href="/revly_favicon.png" />
      </Head>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          url: seoUrl,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: "/revly_favicon.png",
              width: 800,
              height: 600,
              alt: faviconAlt,
              type: "image/png",
            },
          ],
        }}
      />
      <div className="min-h-screen">
        <Navigation />
        <HeroSection
          title="Accelerate Your Business Growth with Revly"
          subtitle="Simplifying success through AI-powered insights, expert marketing, and
          professional training to help your business lead in any market."
          buttonType="secondary"
          buttonText="Learn More"
          buttonLink="/services"
          gradientClass="bg-heroGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default Home;
