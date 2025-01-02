import Head from "next/head";
import { NextSeo } from "next-seo";
import { Navigation } from "components/Navigation";
import { HeroSection } from "components/Hero";
import { Services } from "components/Services";
import { CTA } from "components/CTA";
import { Footer } from "components/Footer";
import { FAQSection } from "components/ui/FAQ";

const seoTitle = "Revly - Simplify Review Management, Marketing & Training";
const seoDescription =
  "Grow smarter with Revly's solutions for review management, marketing, and training. Simplify processes and achieve success today.";
const seoUrl = "https://www.revly.se";
const faviconAlt = "Revly - Simplify Business Growth";

const landingPageFAQs = [
  {
    question: "What services does Revly offer?",
    answer:
      "Revly specializes in media buying, reputation management, and professional training. Our media buying services are designed to optimize your ad spend and help you scale your campaigns effectively. Our Reputation Management System (RMS) enables businesses to monitor and improve their online presence using powerful AI insights and tools. Additionally, we offer professional training courses for both businesses and individuals, including free Higher Vocational Education (HVE) courses as well as paid programs tailored to upskill your team or enhance your personal expertise.",
  },
  {
    question: "Is Revly's Reputation Management System available now?",
    answer:
      "Not yet. We're actively developing our Reputation Management System and plan to launch it soon. Stay tuned for updates!",
  },
  {
    question: "Who can benefit from Revly's services?",
    answer:
      "Revly's services are tailored for businesses of all sizes, from startups to established companies, looking to enhance their marketing, manage their online presence, or train their teams.",
  },
  {
    question: "How can I get started with Revly?",
    answer:
      "Getting started with Revly is easy. Simply fill out our contact form or email us at info@revly.se to start the conversation.",
  },
  {
    question: "Does Revly offer customized solutions?",
    answer:
      "Absolutely! We work closely with each client to understand their unique needs and deliver personalized strategies that drive results.",
  },
];

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
          buttonLink="#services"
          gradientClass="bg-heroGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <Services />
        <CTA />
        <FAQSection
          title={"Frequently Asked Questions"}
          faqs={landingPageFAQs}
        />
        <Footer />
      </div>
    </>
  );
}

export default Home;
