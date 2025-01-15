import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { FAQSection } from "components/ui/FAQ";

const contactFAQs = [
  {
    question: "How long does it take to get a response?",
    answer:
      "We aim to respond to all inquiries within 24-48 hours. Our team works diligently to ensure that your questions or concerns are addressed as quickly as possible. If you have an urgent request, please don't hesitate to email us directly at info@revly.se.",
  },
  {
    question: "What services does Revly offer?",
    answer:
      "Revly specializes in media buying, review management, and professional training. Our media buying services are designed to optimize your ad spend and help you scale your campaigns effectively. Our Review Management System (RMS) enables businesses to monitor and improve their online presence using powerful AI insights and tools. Additionally, we offer professional training courses for both businesses and individuals, including free Higher Vocational Education (HVE) courses as well as paid programs tailored to upskill your team or enhance your personal expertise.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started with Revly is easy. Simply fill out our contact form or email us at info@revly.se to start the conversation.",
  },
];

const seoTitle = "Revly - Contact Us";
const seoDescription =
  "Get in touch with Revly to learn more about our services and how we can help grow your business.";
const seoUrl = "https://www.revly.se/contact";
const faviconAlt = "Revly - Contact Us";

function ContactPage() {
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
        <ContactForm
          title="Get in Touch"
          subtitle="Have questions or need assistance? Fill out the form below or
              email us at info@revly.se."
          fields={{
            company: false,
            firstName: true,
            lastName: true,
            email: true,
            message: true,
          }}
        />
        <FAQSection title="FAQ" faqs={contactFAQs} />
      </div>
    </>
  );
}

export default ContactPage;
