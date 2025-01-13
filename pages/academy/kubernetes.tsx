import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { ChevronDown } from "lucide-react";

const seoTitle = "Revly Academy - Advanced Orchestration with Kubernetes";
const seoDescription =
  "Master Kubernetes orchestration to deploy, manage, and scale containerized applications efficiently and securely.";
const seoUrl = "https://www.revly.se/academy/kubernetes";
const faviconAlt = "Revly Academy - Advanced Kubernetes Course";

const KubernetesCourse = () => {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Orchestration with Kubernetes
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto">
              Learn to manage and optimize containerized applications using
              Kubernetes. Master tools like Helm, and implement secure, and
              efficient systems.
            </p>
          </div>

          <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
            <div className="col-span-2 space-y-6 lg:p-8">
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
                <p className="text-md leading-relaxed">
                  Advanced Orchestration with Kubernetes is a course designed to
                  deepen your skills in managing and optimizing containerized
                  applications using Kubernetes. The course covers critical
                  topics such as pod and node management, networking
                  configuration, and security, as well as designing scalable,
                  distributed systems. You'll also learn to use tools like Helm
                  and implement CI/CD workflows with Kubernetes. Practical
                  exercises include troubleshooting clusters, managing stateful
                  applications, and integrating with cloud platforms. This
                  course is ideal for software developers and DevOps engineers
                  aiming to enhance their expertise and build robust, efficient
                  systems for production environments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
                <ul className="text-md list-disc pl-6">
                  <li>
                    Deploy and manage Kubernetes clusters across multiple
                    environments.
                  </li>
                  <li>
                    Implement Helm for streamlined application deployment.
                  </li>
                  <li>Configure networking and ensure cluster security.</li>
                  <li>
                    Design scalable and distributed systems using Kubernetes.
                  </li>
                  <li>
                    Integrate Kubernetes with CI/CD workflows for automation.
                  </li>
                  <li>
                    Troubleshoot and optimize Kubernetes clusters for high
                    performance.
                  </li>
                  <li>Manage stateful applications and persistent storage.</li>
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
                    Minimum 6 months of full-time experience in software
                    development or DevOps.
                  </li>
                  <li>
                    Basic understanding of Docker and containerization concepts.
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

      <Footer />
    </>
  );
};

export default KubernetesCourse;
