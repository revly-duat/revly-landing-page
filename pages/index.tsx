import Head from "next/head";
import { NextSeo } from "next-seo";
import { HeroSection } from "components/Hero";
import { Services } from "components/Services";
import { FAQSection } from "components/ui/FAQ";
import { StatsSection } from "components/StatsSection";
import { FeaturesSection } from "components/Features";
import {
  MessageCircle,
  BarChart,
  TrendingUp,
  Calendar,
  Settings,
  Trophy,
} from "lucide-react";
import { CoursesList } from "components/CoursesList";
import Button from "components/ui/Button";
import { useRouter } from "next/router";

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
  {
    icon: Trophy,
    title: "Competitive Benchmarking",
    description:
      "Visualize your ranking among competitors. Gain insights into how your business compares with others and see if you're in the top 1% based on customer ratings.",
  },
];

const landingPageFAQs = [
  {
    question: "What services does Revly offer?",
    answer:
      "Revly offers comprehensive solutions to help businesses and individuals grow. Our services include advanced media buying strategies, a powerful Review Management System (RMS) for online presence improvement, and industry-focused courses through Revly Academy in marketing, data analytics, and IT.",
  },
  {
    question: "Is Revly's Review Management System available now?",
    answer:
      "Our Review Management System is currently in development and will be launching soon. Sign up for our newsletter to stay updated on its release and other exciting updates!",
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
      "Yes! We tailor our marketing strategies, review management solutions, and training programs to meet the specific needs of your business or personal growth goals.",
  },
];

const seoTitle = "Revly - Simplify Review Management, Marketing & Training";
const seoDescription =
  "Grow smarter with Revly's solutions for review management, marketing, and training. Simplify your business growth today.";
const seoUrl = "https://www.revly.se";
const faviconAlt = "Revly - Simplify Business Growth";

function Home() {
  const router = useRouter();

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
        <StatsSection />
        <div className="w-full flex justify-center bg-gray-50 pb-32">
          <Button
            label={"Learn More"}
            styleType={"primary"}
            onClick={() => router.push("/marketing")}
          ></Button>
        </div>
        <FeaturesSection
          features={rmsFeatures}
          heading="Review Management System"
          subheading="Discover the tools you need to simplify review management and drive online success."
        />
        <div className="w-full flex justify-center bg-white pb-32">
          <Button
            label={"Learn More"}
            styleType={"primary"}
            onClick={() => router.push("/rms")}
          ></Button>
        </div>
        <CoursesList />
        <FAQSection
          title={"Frequently Asked Questions"}
          faqs={landingPageFAQs}
        />
      </div>
    </>
  );
}

export default Home;
