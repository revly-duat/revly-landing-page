import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { ChevronDown } from "lucide-react";

const seoTitle = "Revly Academy - Component-Based Web Development with React";
const seoDescription =
  "Master React to build scalable, reusable components and modern web applications with high performance.";
const seoUrl = "https://www.revly.se/academy/react";
const faviconAlt = "Revly Academy - Component-Based Web Development with React";

const ReactCourse = () => {
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
        <section className="max-w-screen mx-auto py-40 text-primary">
          <div className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center">
              Component-Based Web Development with React
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto text-center">
              Gain in-depth knowledge of React and learn to build scalable,
              reusable components for modern web applications.
            </p>
          </div>

          <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
            <div className="col-span-2 space-y-6 lg:p-8">
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
                <p className="text-md leading-relaxed">
                  This course provides in-depth knowledge of React, focusing on
                  building scalable and reusable components for modern web
                  applications. You will learn to manage state effectively with
                  React Context, utilize advanced techniques such as hooks and
                  lazy loading, and optimize performance for dynamic user
                  interfaces. The course also covers creating responsive
                  designs, integrating external APIs, and developing robust
                  authentication and form-handling systems. Practical exercises
                  will equip you with the skills to design and implement
                  high-quality, future-proof web applications. By combining
                  theory and hands-on practice, this course prepares developers
                  to fully leverage React's capabilities and excel in modern web
                  development.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
                <ul className="text-md list-disc pl-6">
                  <li>Build scalable and reusable components in React.</li>
                  <li>
                    Manage state effectively using React Context and Hooks.
                  </li>
                  <li>
                    Optimize performance with lazy loading and advanced
                    techniques.
                  </li>
                  <li>Integrate external APIs and manage dynamic data.</li>
                  <li>
                    Develop secure authentication and form-handling systems.
                  </li>
                  <li>Create responsive and interactive user interfaces.</li>
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
                    <strong>Format:</strong> Online with video tutorials and
                    hands-on projects
                  </li>
                  <li>
                    <strong>Language:</strong> Primarily Swedish, with English
                    materials available
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold pb-4">Prerequisites</h2>
                <ul className="text-md space-y-2">
                  <li>
                    Minimum 6 months of full-time experience as a software
                    developer in the past 2 years.
                  </li>
                  <li>Basic knowledge of JavaScript, HTML, and CSS.</li>
                  <li>
                    Passing Revly's entry assessment to validate foundational
                    knowledge.
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
        title="Register Your Interest in the React Course"
        subtitle="Be the first to know when our Component-Based Web Development with React course launches! Sign up below to receive updates on course availability and start dates."
        fields={{
          company: false,
          firstName: true,
          lastName: true,
          email: true,
          message: false,
        }}
        defaultMessage="I am interested in your course Component-Based Web Development with React, please send me more information!"
      />

      <Footer />
    </>
  );
};

export default ReactCourse;
