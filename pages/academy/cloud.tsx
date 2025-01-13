import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { ChevronDown } from "lucide-react";

const seoTitle =
  "Revly Academy - Scalable Cloud Services with AWS, Azure, and Google Cloud";
const seoDescription =
  "Master cloud computing with in-depth knowledge of AWS, Azure, and Google Cloud. Learn to deploy, manage, and optimize scalable cloud solutions.";
const seoUrl = "https://www.revly.se/academy/cloud";
const faviconAlt =
  "Revly Academy - Scalable Cloud Services with AWS, Azure, and Google Cloud";

const CloudCourse = () => {
  const router = useRouter();

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
              Scalable Cloud Services with AWS, Azure, and Google Cloud
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto text-center">
              Gain expertise in cloud computing with AWS, Azure, and Google
              Cloud. Learn to build scalable and efficient cloud solutions for
              modern applications.
            </p>
          </div>

          <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
            <div className="col-span-2 space-y-6 lg:p-8">
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
                <p className="text-md leading-relaxed">
                  This course is divided into three modules, providing an
                  in-depth exploration of AWS, Azure, and Google Cloud, focusing
                  on their most essential services. Each module focuses on one
                  platform at a time, teaching you to manage virtual machines
                  (EC2, Azure VM, Compute Engine), serverless services (Lambda,
                  Azure Functions, Cloud Functions), and object storage (S3,
                  Blob Storage, Cloud Storage). You'll also dive into networking
                  solutions, DNS configuration, Infrastructure as Code (IaC)
                  with tools like CloudFormation and Terraform, identity
                  management, and monitoring. The course concludes with a
                  comparative analysis to identify the best cloud solutions for
                  different technical needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
                <ul className="text-md list-disc pl-6">
                  <li>
                    Deploy and manage virtual machines on AWS, Azure, and Google
                    Cloud.
                  </li>
                  <li>
                    Implement serverless solutions using Lambda, Azure
                    Functions, and Cloud Functions.
                  </li>
                  <li>
                    Manage object storage with S3, Blob Storage, and Cloud
                    Storage.
                  </li>
                  <li>
                    Use Infrastructure as Code (IaC) tools like CloudFormation
                    and Terraform.
                  </li>
                  <li>
                    Configure networking, DNS, and implement identity
                    management.
                  </li>
                  <li>
                    Monitor and optimize cloud infrastructure using tools like
                    Prometheus and Grafana.
                  </li>
                  <li>
                    Compare cloud providers to select the best solutions for
                    specific business needs.
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
                    <strong>Language:</strong> Primarily Swedish, with English
                    materials available
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold pb-4">Prerequisites</h2>
                <ul className="text-md space-y-2">
                  <li>
                    Minimum 6 months of full-time experience in software
                    development or cloud computing.
                  </li>
                  <li>
                    Basic knowledge of cloud services and networking concepts.
                  </li>
                  <li>
                    Passing Revly's entry assessment to validate foundational
                    knowledge.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute bottom w-full flex justify-center">
            <div className="animate-bounce">
              <ChevronDown className="h-16 w-16 text-white" />
            </div>
          </div>
        </section>
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

      <Footer />
    </>
  );
};

export default CloudCourse;
