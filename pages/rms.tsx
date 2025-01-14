import Head from "next/head";
import { HeroSection } from "components/Hero";
import { FeaturesSection } from "components/Features";
import {
  MessageCircle,
  BarChart,
  TrendingUp,
  Calendar,
  Settings,
} from "lucide-react";
import { ContactForm } from "components/ContactForm";
import { NextSeo } from "next-seo";

const rmsFeatures = [
  {
    icon: MessageCircle,
    title: "Review Management",
    description:
      "Centralize and manage reviews from multiple platforms like Google Reviews, Trustpilot, and more. Respond directly and maintain your reputation effortlessly.",
  },
  {
    icon: BarChart,
    title: "Social Media Insights",
    description:
      "Monitor and analyze social media engagement. Manage comments, likes, and trends while using AI-generated insights to optimize your strategy.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description:
      "Generate custom reports with powerful analytics. Track trends across reviews, social media, and customer engagement to make informed decisions.",
  },
  {
    icon: Calendar,
    title: "Content Manager",
    description:
      "Schedule posts for Instagram, Twitter, Facebook, and more. Streamline your content planning and ensure consistent online presence.",
  },
  {
    icon: Settings,
    title: "AI Feedback & Ratings",
    description:
      "Receive actionable AI-driven feedback based on reviews and social media trends. Understand customer sentiment and improve your strategies.",
  },
];

const seoTitle = "Revly RMS - Manage Your Online Reputation";
const seoDescription =
  "Manage reviews, social media, analytics, and content efficiently with Revly's RMS. Streamline your online presence and scale your business.";
const seoUrl = "https://www.revly.se/rms";
const faviconAlt = "Revly RMS - Manage Your Online Reputation";

const RMSPage = () => {
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
        <HeroSection
          title="Take Control of Your Online Reputation"
          subtitle="Manage reviews, social media accounts, and analyze performance
            with Revly's comprehensive RMS."
          buttonType="secondary"
          buttonText="Get Started Now"
          buttonLink="https://brand.revly.se/signup"
          gradientClass="bg-rmsGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <FeaturesSection
          features={rmsFeatures}
          heading="RMS Features"
          subheading="Discover the tools you need to simplify reputation management and drive online success."
        />
        <section className="py-16 px-6 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              AI-Powered Insights
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let AI guide your business decisions with smart, actionable
              feedback based on your data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rating Trends",
                  description:
                    "Track your ratings' trends on platforms like Google Reviews, Trustpilot, and more.",
                },
                {
                  title: "Sentiment Analysis",
                  description:
                    "Understand customer sentiment through AI-powered comment analysis.",
                },
                {
                  title: "Engagement Predictions",
                  description:
                    "Optimize your social media strategy with predicted engagement trends.",
                },
              ].map((insight, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-white shadow-md text-left"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactForm
          title="Lets us know you're interested"
          subtitle="Fill out the form below, and we’ll get
            back to you with more information about our upcoming RMS."
          fields={{
            company: false,
            firstName: true,
            lastName: true,
            email: true,
            message: true,
          }}
        />
      </div>
    </>
  );
};

export default RMSPage;
