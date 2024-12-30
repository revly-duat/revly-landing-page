import Head from "next/head";
import { NextSeo } from "next-seo";
import { Navigation } from "components/Navigation";
import { FeaturesSection } from "components/Features";
import { Testimonials } from "components/Testimonials";
import { CTA } from "components/CTA";
import { Footer } from "components/Footer";
import { HeroSection } from "components/Hero";
import { BarChart, Target, Globe } from "lucide-react";
import { FAQSection } from "components/ui/FAQ";
import { ContactForm } from "components/ContactForm";

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
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
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
          title="Empower Your Career with Revly Academy"
          subtitle="Learn from industry experts and gain the skills you need to thrive in marketing, data analytics, and IT."
          buttonType="secondary"
          buttonText="Explore Courses"
          buttonLink="#contactForm"
          gradientClass="bg-academyGradient bg-[length:200%_200%] animate-gradient-move"
        />
        <FeaturesSection
          features={academyFeatures}
          heading="Why Choose Revly Academy?"
          subheading="Discover what sets our courses apart and how we can help you succeed."
        />
        <FAQSection title="Frequently Asked Questions" faqs={academyFAQs} />
        <div className="max-w-4xl mx-auto text-center mb-8 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Interested in our courses? Fill out the form below, and we’ll get
            back to you with more information.
          </p>
        </div>
        <ContactForm
          fields={{
            company: false,
            name: true,
            email: true,
            message: true,
          }}
        />
        <Footer />
      </div>
    </>
  );
}

export default Academy;
