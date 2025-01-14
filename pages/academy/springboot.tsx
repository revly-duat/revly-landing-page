import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { CourseDetails } from "components/courseDetails";

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
        <CourseDetails
          courseName="Secure and Scalable Microservices with Spring Boot"
          courseSubtitle="Gain in-depth knowledge of building secure and scalable microservices using Spring Boot, Docker, and industry-standard security practices."
          courseSummary="This course provides in-depth knowledge on building secure and scalable microservices using Spring Boot. You will learn to implement advanced security with OAuth2, OpenID Connect, and role-based access control, as well as protect services with TLS and API gateways. The focus is on creating container-ready applications with Docker and optimizing performance through Ahead-of-Time Compilation (AOT). The course also covers monitoring and logging with Spring Boot Actuator and integration with tools like Prometheus and Grafana. Through theory and hands-on exercises, you will gain the skills to design robust distributed systems with support for service discovery and centralized configuration. This course equips you to meet modern demands for security, performance, and efficiency in development environments."
          objectives={[
            "Build scalable microservices with Spring Boot and Docker.",
            "Implement OAuth2, OpenID Connect, and role-based access control.",
            "Secure services using TLS and API gateways.",
            "Optimize performance with Ahead-of-Time Compilation (AOT).",
            "Monitor and log services with Spring Boot Actuator, Prometheus, and Grafana.",
            "Design distributed systems with service discovery and centralized configuration.",
          ]}
          studyPace="Half-time (50%)"
          courseLength="8 weeks (20 YH credits)"
          startDate="TBD"
          format="Online with video tutorials and hands-on projects"
          language="Primarily Swedish, with English materials available"
          prerequisites={[
            "Minimum 6 months of full-time experience as a software developer in the past 2 years.",
            "Basic knowledge of Java and Spring Framework.",
            "Passing Revly's entry assessment to validate foundational knowledge.",
          ]}
        />
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
    </>
  );
};

export default SpringBootCourse;
