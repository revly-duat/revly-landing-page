import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { CourseDetails } from "components/courseDetails";

const seoTitle = "Revly Academy - Advanced Orchestration with Kubernetes";
const seoDescription =
  "Master Kubernetes orchestration to deploy, manage, and scale containerized applications efficiently and securely.";
const seoUrl = "https://www.revly.se/academy/kubernetes";
const faviconAlt = "Revly Academy - Advanced Kubernetes Course";

const KubernetesCourse = () => {
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
          courseName="Advanced Orchestration with Kubernetes"
          courseSubtitle="Learn to manage and optimize containerized applications using Kubernetes. Master tools like Helm, and implement secure, and efficient systems."
          courseSummary="Advanced Orchestration with Kubernetes is a course designed to deepen your skills in managing and optimizing containerized applications using Kubernetes. The course covers critical topics such as pod and node management, networking configuration, and security, as well as designing scalable, distributed systems. You'll also learn to use tools like Helm and implement CI/CD workflows with Kubernetes. Practical exercises include troubleshooting clusters, managing stateful applications, and integrating with cloud platforms. This course is ideal for software developers and DevOps engineers aiming to enhance their expertise and build robust, efficient systems for production environments."
          objectives={[
            "Deploy and manage Kubernetes clusters across multiple environments.",
            "Implement Helm for streamlined application deployment.",
            "Configure networking and ensure cluster security.",
            "Design scalable and distributed systems using Kubernetes.",
            "Integrate Kubernetes with CI/CD workflows for automation.",
            "Troubleshoot and optimize Kubernetes clusters for high performance.",
            "Manage stateful applications and persistent storage.",
          ]}
          studyPace="Half-time (50%)"
          courseLength="8 weeks (20 YH credits)"
          startDate="TBD"
          format="Online with interactive tutorials and real-world projects"
          language="Primarily Swedish with English resources"
          prerequisites={[
            "Minimum 6 months of full-time experience in software development or DevOps.",
            "Basic understanding of Docker and containerization concepts.",
            "Passing Revly's entry assessment to validate foundational knowledge.",
          ]}
        />
      </div>

      <ContactForm
        title="Register Your Interest in the Kubernetes Course"
        subtitle="Be the first to know when our Advanced Orchestration with Kubernetes course launches! 
                  Sign up below to receive updates on course availability and start dates."
        fields={{
          company: false,
          firstName: true,
          lastName: true,
          email: true,
          message: false,
        }}
        defaultMessage="I am interested in the Advanced Orchestration with Kubernetes course. Please send me more information!"
      />
    </>
  );
};

export default KubernetesCourse;
