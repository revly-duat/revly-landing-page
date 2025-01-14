import Head from "next/head";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { CourseDetails } from "components/courseDetails";

const seoTitle =
  "Revly Academy - Scalable Cloud Services with AWS, Azure, and Google Cloud";
const seoDescription =
  "Master cloud computing with in-depth knowledge of AWS, Azure, and Google Cloud. Learn to deploy, manage, and optimize scalable cloud solutions.";
const seoUrl = "https://www.revly.se/academy/cloud";
const faviconAlt =
  "Revly Academy - Scalable Cloud Services with AWS, Azure, and Google Cloud";

const CloudCourse = () => {
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
          courseName={
            "Scalable Cloud Services with AWS, Azure, and Google Cloud"
          }
          courseSubtitle={
            "Gain expertise in cloud computing with AWS, Azure, and Google Cloud. Learn to build scalable and efficient cloud solutions for modern applications."
          }
          courseSummary="This course is divided into three modules, providing an in-depth exploration of AWS, Azure, and Google Cloud, focusing on their most essential services. Each module focuses on one platform at a time, teaching you to manage virtual machines (EC2, Azure VM, Compute Engine), serverless services (Lambda, Azure Functions, Cloud Functions), and object storage (S3, Blob Storage, Cloud Storage). You'll also dive into networking solutions, DNS configuration, Infrastructure as Code (IaC) with tools like CloudFormation and Terraform, identity management, and monitoring."
          objectives={[
            "Deploy and manage virtual machines on AWS, Azure, and Google Cloud.",
            "Implement serverless solutions using Lambda, Azure Functions, and Cloud Functions.",
            "Manage object storage with S3, Blob Storage, and Cloud Storage.",
            "Use Infrastructure as Code (IaC) tools like CloudFormation and Terraform.",
            "Configure networking, DNS, and implement identity management.",
            "Monitor and optimize cloud infrastructure using tools like Prometheus and Grafana.",
            "Compare cloud providers to select the best solutions for specific business needs.",
          ]}
          studyPace={"Half-time (50%)"}
          courseLength={"8 weeks (20 YH credits)"}
          startDate={"TBD"}
          format={"Online with interactive tutorials and real-world projects"}
          language={"Primarily Swedish, with English materials available"}
          prerequisites={[
            "Minimum 6 months of full-time experience in software development or cloud computing.",
            "Basic knowledge of cloud services and networking concepts.",
            "Passing Revly's entry assessment to validate foundational knowledge.",
          ]}
        />
      </div>
      <ContactForm
        title="Register Your Interest in the Cloud Services Course"
        subtitle="Be the first to know when our Scalable Cloud Services with AWS, Azure, and Google Cloud course launches! Sign up below to receive updates on course availability and start dates."
        fields={{
          company: false,
          firstName: true,
          lastName: true,
          email: true,
          message: false,
        }}
        defaultMessage="I am interested in your course Scalable Cloud Services with AWS, Azure, and Google Cloud, please send me more information!"
      />
    </>
  );
};

export default CloudCourse;
