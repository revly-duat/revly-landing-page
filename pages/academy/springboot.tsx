import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { ChevronDown } from "lucide-react";

const seoTitle =
  "Revly Academy - Secure and Scalable Microservices with Spring Boot";
const seoDescription =
  "Master building secure and scalable microservices with Spring Boot, Docker, and advanced security protocols.";
const seoUrl = "https://www.revly.se/academy/springboot";
const faviconAlt =
  "Revly Academy - Secure and Scalable Microservices with Spring Boot";

const SpringBootCourse = () => {
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
              Secure and Scalable Microservices with Spring Boot
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto text-center">
              Gain in-depth knowledge of building secure and scalable
              microservices using Spring Boot, Docker, and industry-standard
              security practices.
            </p>
          </div>

          <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
            <div className="col-span-2 space-y-6 lg:p-8">
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
                <p className="text-md leading-relaxed">
                  This course provides in-depth knowledge on building secure and
                  scalable microservices using Spring Boot. You will learn to
                  implement advanced security with OAuth2, OpenID Connect, and
                  role-based access control, as well as protect services with
                  TLS and API gateways. The focus is on creating container-ready
                  applications with Docker and optimizing performance through
                  Ahead-of-Time Compilation (AOT). The course also covers
                  monitoring and logging with Spring Boot Actuator and
                  integration with tools like Prometheus and Grafana. Through
                  theory and hands-on exercises, you will gain the skills to
                  design robust distributed systems with support for service
                  discovery and centralized configuration. This course equips
                  you to meet modern demands for security, performance, and
                  efficiency in development environments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
                <ul className="text-md list-disc pl-6">
                  <li>
                    Build scalable microservices with Spring Boot and Docker.
                  </li>
                  <li>
                    Implement OAuth2, OpenID Connect, and role-based access
                    control.
                  </li>
                  <li>Secure services using TLS and API gateways.</li>
                  <li>
                    Optimize performance with Ahead-of-Time Compilation (AOT).
                  </li>
                  <li>
                    Monitor and log services with Spring Boot Actuator,
                    Prometheus, and Grafana.
                  </li>
                  <li>
                    Design distributed systems with service discovery and
                    centralized configuration.
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
                  <li>Basic knowledge of Java and Spring Framework.</li>
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
        title="Register Your Interest in the Spring Boot Course"
        subtitle="Be the first to know when our Secure and Scalable Microservices with Spring Boot course launches! Sign up below to receive updates on course availability and start dates."
        fields={{
          company: false,
          firstName: true,
          lastName: true,
          email: true,
          message: false,
        }}
        defaultMessage="I am interested in your course Secure and Scalable Microservices with Spring Boot, please send me more information!"
      />

      <Footer />
    </>
  );
};

export default SpringBootCourse;
