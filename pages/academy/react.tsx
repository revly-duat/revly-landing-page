import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { CourseDetails } from "components/courseDetails";

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
        <CourseDetails
          courseName="Component-Based Web Development with React"
          courseSubtitle="Gain in-depth knowledge of React and learn to build scalable, reusable components for modern web applications."
          courseSummary="This course provides in-depth knowledge of React, focusing on building scalable and reusable components for modern web applications. You will learn to manage state effectively with React Context, utilize advanced techniques such as hooks and lazy loading, and optimize performance for dynamic user interfaces. The course also covers creating responsive designs, integrating external APIs, and developing robust authentication and form-handling systems. Practical exercises will equip you with the skills to design and implement high-quality, future-proof web applications. By combining theory and hands-on practice, this course prepares developers to fully leverage React's capabilities and excel in modern web development."
          objectives={[
            "Build scalable and reusable components in React.",
            "Manage state effectively using React Context and Hooks.",
            "Optimize performance with lazy loading and advanced techniques.",
            "Integrate external APIs and manage dynamic data.",
            "Develop secure authentication and form-handling systems.",
            "Create responsive and interactive user interfaces.",
          ]}
          studyPace="Half-time (50%)"
          courseLength="8 weeks (20 YH credits)"
          startDate="TBD"
          format="Online with video tutorials and hands-on projects"
          language="Primarily Swedish, with English materials available"
          prerequisites={[
            "Minimum 6 months of full-time experience as a software developer in the past 2 years.",
            "Basic knowledge of JavaScript, HTML, and CSS.",
            "Passing Revly's entry assessment to validate foundational knowledge.",
          ]}
        />
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
    </>
  );
};

export default ReactCourse;
