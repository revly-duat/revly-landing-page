import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { ChevronDown } from "lucide-react";

const seoTitle = "Revly Academy - Advanced Web Development with Next.js";
const seoDescription =
  "Master advanced Next.js techniques for building high-performance, scalable, and SEO-optimized web applications.";
const seoUrl = "https://www.revly.se/academy/nextjs";
const faviconAlt = "Revly Academy - Advanced Web Development with Next.js";

const NextJSCourse = () => {
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
      <div className="min-h-screen bg-academyGradient bg-[length:200%_200%] animate-gradient-move">
        <Navigation />
        <section className="max-w-screen mx-auto py-40 px-6 sm:px-6 lg:px-8 text-primary">
          <div className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center">
              Advanced Web Development with Next.js
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto text-center">
              Gain expert-level skills in building modern, high-performance, and
              scalable web applications with Next.js.
            </p>
          </div>
          <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
            <div className="col-span-2 space-y-6 lg:p-8">
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
                <p className="text-md leading-relaxed">
                  This course provides in-depth knowledge of Next.js, a
                  framework for building modern, high-performance web
                  applications. You will learn to use server-side rendering
                  (SSR), static site generation (SSG), and dynamic routing to
                  create fast, scalable solutions. The course focuses on
                  performance optimization, SEO enhancements, and API
                  integrations. Practical exercises include authentication,
                  stateful data management, and cloud service integration.
                  Combining theory and practice, the course equips you with the
                  tools to design robust and user-friendly systems. The goal is
                  to prepare developers with the skills needed to build the next
                  generation of efficient and scalable web solutions.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
                <ul className="text-md list-disc pl-6">
                  <li>
                    Master server-side rendering (SSR) and static site
                    generation (SSG) in Next.js.
                  </li>
                  <li>
                    Optimize performance and SEO for modern web applications.
                  </li>
                  <li>Implement dynamic routing and API integrations.</li>
                  <li>
                    Manage authentication and stateful data in web projects.
                  </li>
                  <li>Deploy and scale Next.js apps with cloud services.</li>
                  <li>
                    Design scalable, user-friendly, and high-performing
                    websites.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:p-8 lg:border-l border-gray-400 space-y-6">
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Details</h2>
                <ul className="text-md list-disc space-y-2 pl-6">
                  <li>
                    <strong>Study Pace:</strong> Half-time (50%)
                  </li>
                  <li>
                    <strong>Course Length:</strong> 8 weeks (20 YH credits)
                  </li>
                  <li>
                    <strong>Start Date:</strong> TBD
                  </li>
                  <li>
                    <strong>Format:</strong> Online with interactive tutorials
                    and real-world projects
                  </li>
                  <li>
                    <strong>Language:</strong> Primarily Swedish with English
                    resources
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold pb-4">Prerequisites</h2>
                <ul className="text-md space-y-2">
                  <li>
                    Minimum 6 months of full-time experience as a software
                    developer in the past 2 years
                  </li>
                  <li>
                    Basic knowledge of React and web development principles
                  </li>
                  <li>
                    Passing Revly's entry assessment to validate foundational
                    knowledge
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 w-full flex justify-center">
            <div className="animate-bounce">
              <ChevronDown className="h-16 w-16 text-white" />
            </div>
          </div>
        </section>
      </div>
      <ContactForm
        title="Register Your Interest in the Advanced Web Development with Next.js Course"
        subtitle="Be the first to know when our Advanced Web Development with Next.js course launches! Sign up below to receive updates on course availability and start dates."
        fields={{
          company: false,
          firstName: true,
          lastName: true,
          email: true,
          message: false,
        }}
        defaultMessage="I am interested in your course Advanced Web Development with Next.js, please send me more information!"
      />
      <Footer />
    </>
  );
};

export default NextJSCourse;
