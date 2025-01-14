import Head from "next/head";
import { NextSeo } from "next-seo";
import { FeaturesSection } from "components/Features";
import { HeroSection } from "components/Hero";
import { BarChart, Target, Globe } from "lucide-react";
import { FAQSection } from "components/ui/FAQ";
import { CoursesList } from "components/CoursesList";

const academyFAQs = [
  {
    question: "What types of courses does Revly Academy offer?",
    answer:
      "Revly Academy provides hands-on courses in marketing, data analytics, and IT to help you and your team grow professionally.",
  },
  {
    question: "Are the courses online or in-person?",
    answer:
      "All courses will be held online to ensure accessibility for participants globally. In-person options may be available in the future.",
  },
  {
    question: "Who teaches the courses?",
    answer:
      "Our courses are led by industry professionals with years of experience in their respective fields, ensuring you learn practical and applicable skills.",
  },
  {
    question: "How can I express my interest in a course?",
    answer:
      "You can fill out the contact form below, and we’ll notify you as soon as the courses become available.",
  },
];

const academyFeatures = [
  {
    icon: BarChart,
    title: "Hands-On Learning",
    description:
      "Practical exercises and real-world examples to help you apply new skills immediately.",
  },
  {
    icon: Target,
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals who are leaders in their fields.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Join our online courses from anywhere in the world at your convenience.",
  },
];

const seoTitle = "Revly Academy - Learn, Grow, Succeed";
const seoDescription =
  "Revly Academy offers hands-on courses in marketing, data analytics, and IT, empowering professionals and businesses to grow and succeed.";
const seoUrl = "https://www.revly.se/academy";
const faviconAlt = "Revly Academy - Learn, Grow, Succeed";

function Academy() {
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
          title="Empower Your Career with Revly Academy"
          subtitle="Learn from industry experts and gain the skills you need to thrive in marketing, data analytics, and IT."
          buttonType="secondary"
          buttonText="Explore Courses"
          buttonLink="#coursesList"
          gradientClass="bg-academyGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <FeaturesSection
          features={academyFeatures}
          heading="Why Choose Revly Academy?"
          subheading="Discover what sets our courses apart and how we can help you succeed."
        />
        <CoursesList />
        <FAQSection title="Frequently Asked Questions" faqs={academyFAQs} />
      </div>
    </>
  );
}

export default Academy;
