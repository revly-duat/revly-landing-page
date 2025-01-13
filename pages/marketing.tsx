import Head from "next/head";
import { NextSeo } from "next-seo";
import { Navigation } from "components/Navigation";
import { FeaturesSection } from "components/Features";
import { Footer } from "components/Footer";
import { HeroSection } from "components/Hero";
import { BarChart, Target, Globe } from "lucide-react";
import { StatsSection } from "components/StatsSection";
import { ContactForm } from "components/ContactForm";
import { FAQSection } from "components/ui/FAQ";

const marketingFAQs = [
  {
    question: "What platforms do you advertise on?",
    answer:
      "We primarily work with Meta (Facebook and Instagram), but we are able to work with Google, TikTok, and other platforms.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We don't have fixed pricing. Instead, we tailor our pricing to what works best for each customer. The cost is based on the amount of workload from Revly and the budget of the customer. Our goal is to create a pricing structure that ensures both value and success for your business.",
  },
  {
    question: "Do you provide reporting?",
    answer:
      "Yes, we provide weekly detailed reporting and analytics to help you understand the performance of your campaigns.",
  },
];

const marketingPageFeatures = [
  {
    icon: BarChart,
    title: "Data-Driven Campaigns",
    description:
      "Leverage analytics to optimize ad spend and maximize return on investment.",
  },
  {
    icon: Target,
    title: "Precise Audience Targeting",
    description:
      "Reach your ideal customers with tailored strategies that drive engagement and sales.",
  },
  {
    icon: Globe,
    title: "Scalable Campaigns",
    description:
      "Expand your reach and grow your brand globally with scalable marketing solutions.",
  },
];

const seoTitle = "Revly Marketing - Effective Media Buying for Business Growth";
const seoDescription =
  "Revly helps businesses scale with expert media buying. Optimize your advertising budget, reach the right audience, and drive measurable growth with our data-driven approach.";
const seoUrl = "https://www.revly.se/marketing";
const faviconAlt = "Revly - Media Buying Solutions for Business Growth";

function Marketing() {
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
          title="Take Your Marketing to the Next Level"
          subtitle="Drive growth, optimize your campaigns, and expand your reach with Revly's expert media buying solutions."
          buttonType="secondary"
          buttonText="Let's Grow Together"
          buttonLink="#contactForm"
          gradientClass="bg-marketingGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <FeaturesSection
          features={marketingPageFeatures}
          heading="Marketing Features"
          subheading="Explore how Revly's marketing services can help your business grow and succeed."
        />
        <StatsSection />
        <FAQSection title="FAQ" faqs={marketingFAQs} />
        <ContactForm
          title="Get in Touch"
          subtitle="Ready to grow your business? Fill out the form below, and we’ll get
            back to you shortly."
          fields={{
            company: true,
            firstName: true,
            lastName: true,
            email: true,
            message: true,
          }}
        />

        <Footer />
      </div>
    </>
  );
}

export default Marketing;
