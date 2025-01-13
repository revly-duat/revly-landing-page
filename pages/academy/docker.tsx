import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ContactForm } from "components/ContactForm";
import { ChevronDown } from "lucide-react";

const seoTitle = "Revly Academy - Advanced Containerization in Docker";
const seoDescription =
  "Master advanced Docker containerization techniques to build, deploy, and manage scalable and secure systems.";
const seoUrl = "https://www.revly.se/academy/docker";
const faviconAlt = "Revly Academy - Advanced Docker Course";

const DockerCourse = () => {
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
              Advanced Containerization in Docker
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto text-center">
              Gain in-depth knowledge of Docker and learn how to build, deploy,
              and manage secure and scalable containerized systems.
            </p>
          </div>
          <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
            <div className="col-span-2 space-y-6 lg:p-8">
              <div className="">
                <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
                <p className="text-md leading-relaxed">
                  Advanced Containerization with Docker provides in-depth
                  knowledge of container technology. Learn to create and manage
                  Docker containers, write Dockerfiles, and optimize multi-stage
                  builds for improved performance. The course also covers
                  security topics like rootless containers and image
                  vulnerability scanning. Practical exercises include
                  troubleshooting, resource constraints, and using Docker
                  Compose to orchestrate systems. Additionally, you will gain
                  skills in integrating Docker into CI/CD pipelines and
                  designing scalable, reliable systems. This course is designed
                  for software developers looking to enhance their expertise and
                  contribute to more efficient DevOps processes.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
                <ul className="text-md list-disc pl-6">
                  <li>
                    Create and run containers using Dockerfiles and CLI commands
                  </li>
                  <li>
                    Implement and optimize multi-stage builds for efficiency
                  </li>
                  <li>
                    Perform security analysis with rootless containers and image
                    scanning
                  </li>
                  <li>
                    Troubleshoot and optimize containers using logging and
                    resource limits
                  </li>
                  <li>
                    Design and manage Docker-based systems with multiple
                    containers and networks
                  </li>
                  <li>
                    Automate DevOps workflows with CI/CD pipelines and Docker
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:p-8 lg:border-l border-gray-400 space-y-6">
              <div className="">
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
                    <strong>Language:</strong> Primarily Swedish, but English is
                    included due to industry standards
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold pb-4">Prerequisites</h2>
                <ul className="text-md space-y-2">
                  <li>
                    Minimum 6 months of full-time experience as a software
                    developer in the past 2 years
                  </li>
                  <li>
                    Passing Revly's entry assessment to validate foundational
                    knowledge
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
      <Footer />
    </>
  );
};

export default DockerCourse;
