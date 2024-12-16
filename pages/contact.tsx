import Head from "next/head";
import { NextSeo } from "next-seo";
import { Navigation } from "components/Navigation";
import { ContactForm } from "components/ContactForm";
import { Footer } from "components/Footer";
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
      "Revly specializes in media buying, reputation management, and professional training. Our media buying services are designed to optimize your ad spend and help you scale your campaigns effectively. Our Reputation Management System (RMS) enables businesses to monitor and improve their online presence using powerful AI insights and tools. Additionally, we offer professional training courses for both businesses and individuals, including free Higher Vocational Education (HVE) courses as well as paid programs tailored to upskill your team or enhance your personal expertise.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started with Revly is easy. Simply fill out our contact form or email us at info@revly.se to start the conversation. For media buying, we’ll discuss your business goals and current advertising strategies to create a tailored plan. If you're interested in our training courses, we’ll help you find the right program for your needs, whether it’s a free Higher Vocational Education (HVE) course or a specialized paid course. For businesses seeking to improve their online reputation, our RMS platform offers tools and insights to manage reviews, engage with customers, and track performance—all designed to help your business succeed.",
  },
];

function ContactPage() {
  return (
    <>
      <Head>
        <title>Revly - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Revly to learn more about our services and how we can help grow your business."
        />
        <link rel="icon" href="/revly_favicon.png" />
      </Head>
      <NextSeo
        title="Revly - Contact Us"
        description="Get in touch with Revly to learn more about our services and how we can help grow your business."
        openGraph={{
          url: "https://www.revly.se/contact",
          title: "Revly - Contact Us ",
          description:
            "Get in touch with Revly to learn more about our services and how we can help grow your business.",
          images: [
            {
              url: "/revly_favicon.png",
              width: 800,
              height: 600,
              alt: "Revly Favicon",
              type: "image/png",
            },
          ],
        }}
      />
      <div className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-2 px-6 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600">
              Have questions or need assistance? Fill out the form below or
              email us at{" "}
              <a
                href="mailto:info@revly.se"
                className="text-cta hover:underline"
              >
                info@revly.se
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </section>
        <FAQSection title="FAQ" faqs={contactFAQs} />
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
