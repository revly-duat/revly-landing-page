import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { CourseDetails } from "components/courseDetails";

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
        <CourseDetails
          courseName={"Advanced Web Development with Next.js"}
          courseSubtitle={
            "Gain expert-level skills in building modern, high-performance, and scalable web applications with Next.js."
          }
          courseSummary="This course provides in-depth knowledge of Next.js, a framework for building modern, high-performance web applications. You will learn to use server-side rendering (SSR), static site generation (SSG), and dynamic routing to create fast, scalable solutions. The course focuses on performance optimization, SEO enhancements, and API integrations. Practical exercises include authentication, stateful data management, and cloud service integration. Combining theory and practice, the course equips you with the tools to design robust and user-friendly systems. The goal is to prepare developers with the skills needed to build the next generation of efficient and scalable web solutions."
          objectives={[
            "Master server-side rendering (SSR) and static site generation (SSG) in Next.js.",
            "Optimize performance and SEO for modern web applications.",
            "Implement dynamic routing and API integrations.",
            "Manage authentication and stateful data in web projects.",
            "Deploy and scale Next.js apps with cloud services.",
            "Design scalable, user-friendly, and high-performing websites.",
          ]}
          studyPace={"Half-time (50%)"}
          courseLength={"8 weeks (20 YH credits)"}
          startDate={"TBD"}
          format={"Online with interactive tutorials and real-world projects"}
          language={"Primarily Swedish, with English materials available"}
          prerequisites={[
            "Minimum 6 months of full-time experience as a software developer in the past 2 years",
            "Basic knowledge of React and web development principles",
            "Passing Revly's entry assessment to validate foundational knowledge",
          ]}
        />
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
    </>
  );
};

export default NextJSCourse;
