import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { CourseDetails } from "components/courseDetails";

const seoTitle = "Revly Academy - Advanced Containerization in Docker";
const seoDescription =
  "Master advanced Docker containerization techniques to build, deploy, and manage scalable and secure systems.";
const seoUrl = "https://www.revly.se/academy/docker";
const faviconAlt = "Revly Academy - Advanced Docker Course";

const DockerCourse = () => {
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
          courseName={"Advanced Containerization in Docker"}
          courseSubtitle={
            "Gain in-depth knowledge of Docker and learn how to build, deploy, and manage secure and scalable containerized systems."
          }
          courseSummary={
            "Advanced Containerization with Docker provides in-depth knowledge of container technology. Learn to create and manage Docker containers, write Dockerfiles, and optimize multi-stage builds for improved performance. The course also covers security topics like rootless containers and image vulnerability scanning. Practical exercises include troubleshooting, resource constraints, and using Docker Compose to orchestrate systems. Additionally, you will gain skills in integrating Docker into CI/CD pipelines and designing scalable, reliable systems. This course is designed for software developers looking to enhance their expertise and contribute to more efficient DevOps processes."
          }
          objectives={[
            "Create and run containers using Dockerfiles and CLI commands",
            "Implement and optimize multi-stage builds for efficiency",
            "Perform security analysis with rootless containers and image scanning",
            "Troubleshoot and optimize containers using logging and resource limits",
            "Design and manage Docker-based systems with multiple containers and networks",
            "Automate DevOps workflows with CI/CD pipelines and Docker",
          ]}
          studyPace={"Half-time (50%)"}
          courseLength={"8 weeks (20 YH credits)"}
          startDate={"TBD"}
          format={"Online with interactive tutorials and real-world projects"}
          language={"Primarily Swedish, with English materials available"}
          prerequisites={[
            "Minimum 6 months of full-time experience as a software developer in the past 2 years",
            "Passing Revly's entry assessment to validate foundational knowledge",
          ]}
        />
      </div>
      <ContactForm
        title="Register Your Interest in the Advanced Docker Course"
        subtitle="Be the first to know when our Advanced Containerization in Docker course launches! Sign up below to receive updates on course availability and start dates."
        fields={{
          company: false,
          firstName: true,
          lastName: true,
          email: true,
          message: false,
        }}
        defaultMessage="I am interested in your course Advanced Containerization in Docker, please send me more information!"
      />
    </>
  );
};

export default DockerCourse;
