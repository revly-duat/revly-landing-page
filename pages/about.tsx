import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import Button from "components/ui/Button";
import { useRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About Revly - Empowering Business Growth</title>
        <meta
          name="description"
          content="Learn more about Revly's journey, mission, and commitment to helping businesses grow."
        />
        <link rel="icon" href="/revly_favicon.png" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        {/* Hero Section */}
        <section className="py-40 px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              About Revly
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Revly was created with a vision to empower businesses to scale
              effectively and achieve sustainable growth.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-8">
            <p className="text-lg leading-relaxed">
              Revly was born out of a passion for building long-lasting
              partnerships and creating meaningful growth for businesses. At its
              core, Revly believes in the power of collaboration and mutual
              success. When you grow, we grow—and that symbiosis is what drives
              everything we do. Seeing measurable results and working
              hand-in-hand with clients to achieve their goals is what makes
              this journey exciting.
            </p>
            <p className="text-lg leading-relaxed">
              What makes Revly unique is our comprehensive approach to business
              growth. We don’t just focus on one aspect of your business; we
              provide a full suite of solutions. From our Reputation Management
              System (RMS) to the training programs and our media buying
              services, Revly offers a complete package. Whether it’s
              strengthening your online reputation, expanding your market reach,
              or scaling your business, we have the tools and expertise to help
              you succeed.
            </p>
            <p className="text-lg leading-relaxed">
              At Revly, we’re all about creating real value for our clients. Our
              mission is to help businesses build a stronger online presence and
              grow sustainably. With our tailored solutions, you can expect to
              see your brand flourish, backed by a reliable partner who’s with
              you every step of the way. Together, we’ll build something
              impactful, durable, and ready for the future.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Button
              label="Explore Our Services"
              styleType="primary"
              additionalClasses="px-8"
              onClick={() => router.push("/services")}
            ></Button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
