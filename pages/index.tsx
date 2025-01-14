import Head from "next/head";
import { NextSeo } from "next-seo";
import { Navigation } from "components/Navigation";
import { HeroSection } from "components/Hero";
import { Services } from "components/Services";
import { Footer } from "components/Footer";
import { FAQSection } from "components/ui/FAQ";
import NewsletterSignup from "components/NewsletterSignup";

const landingPageFAQs = [
  {
    question: "What services does Revly offer?",
    answer:
      "Revly offers comprehensive solutions to help businesses and individuals grow. Our services include advanced media buying strategies, a powerful Reputation Management System (RMS) for online presence improvement, and industry-focused courses through Revly Academy in marketing, data analytics, and IT.",
  },
  {
    question: "Is Revly's Reputation Management System available now?",
    answer:
      "Our Reputation Management System is currently in development and will be launching soon. Sign up for our newsletter to stay updated on its release and other exciting updates!",
  },
  {
    question: "Who can benefit from Revly's services?",
    answer:
      "Revly’s solutions are designed for both businesses aiming to scale their operations and individuals seeking to enhance their professional skills. Whether you're a startup, an established company, or a professional looking to grow, we have something for you.",
  },
  {
    question: "How can I get started with Revly?",
    answer:
      "Getting started is simple! Contact us through our online form or send an email to info@revly.se. For courses, you can explore our Academy page and register your interest directly.",
  },
  {
    question: "Does Revly offer customized solutions?",
    answer:
      "Yes! We tailor our marketing strategies, reputation management solutions, and training programs to meet the specific needs of your business or personal growth goals.",
  },
];

const seoTitle = "Revly - Simplify Review Management, Marketing & Training";
const seoDescription =
  "Grow smarter with Revly's solutions for review management, marketing, and training. Simplify your business growth today.";
const seoUrl = "https://www.revly.se";
const faviconAlt = "Revly - Simplify Business Growth";

function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/revly_favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
              url: "/revly_open_graph.png",
              width: 1200,
              height: 630,
              alt: faviconAlt,
              type: "image/png",
            },
          ],
        }}
      />
      <div className="min-h-screen">
        <Navigation />
        <HeroSection
          title="Simplify Your Business Growth with Revly"
          subtitle="Simplifying success through AI-powered insights, expert marketing, and
          professional training to help your business lead in any market."
          buttonType="secondary"
          buttonText="Learn More"
          buttonLink="#services"
          gradientClass="bg-heroGradient bg-[length:200%_200%] animate-gradient-move"
          animatedText={false}
        />
        <Services />
        <FAQSection
          title={"Frequently Asked Questions"}
          faqs={landingPageFAQs}
        />
        <NewsletterSignup />
        <Footer />
      </div>
    </>
  );
}

export default Home;
