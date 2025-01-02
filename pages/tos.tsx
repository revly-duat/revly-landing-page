import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";

const TermsOfServicePage = () => {
  return (
    <>
      <Head>
        <title>Revly - Terms of Service</title>
        <meta
          name="description"
          content="Learn about Revly's Terms of Service and your responsibilities when using our platform and services."
        />
        <link rel="icon" href="/revly_favicon.png" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        {/* Hero Section */}
        <section className="py-40 px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              These Terms of Service govern your use of Revly’s website and
              services. Please read them carefully.
            </p>
          </div>
          {/* Terms of Service Content */}
          <div className="max-w-4xl mx-auto text-gray-600 space-y-8">
            <h2 className="text-2xl font-bold text-primary">
              1. Services Offered
            </h2>
            <p className="text-lg leading-relaxed">
              Currently, Revly offers media buying and marketing services
              designed to help businesses grow. Additional services, such as our
              Reputation Management System (RMS) and courses, will be launched
              in the future:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>RMS:</strong> Expected launch Q2 2025.
              </li>
              <li>
                <strong>Courses:</strong> Expected launch Q3 2025.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">
              2. Future Account Registration
            </h2>
            <p className="text-lg leading-relaxed">
              Account registration will be required for accessing RMS and other
              features. Users will be responsible for providing accurate
              information during registration. These requirements will be
              detailed further upon the launch of RMS.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              3. Payments and Refunds
            </h2>
            <p className="text-lg leading-relaxed">
              Revly does not currently process payments for services. Once RMS
              is launched, the following payment policies will apply:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Subscription Payments:</strong> Payments will be
                processed through third-party providers, such as Stripe or
                PayPal.
              </li>
              <li>
                <strong>Refunds:</strong> For yearly subscriptions, a refund can
                be requested, subject to a 20% fee on the expected subscription
                revenue.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">
              4. User Responsibilities
            </h2>
            <p className="text-lg leading-relaxed">Users agree to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the services in compliance with all applicable laws.</li>
              <li>
                Refrain from unauthorized or harmful activities, such as
                distributing malware or attempting to access restricted areas of
                the platform.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">
              5. Limitation of Liability
            </h2>
            <p className="text-lg leading-relaxed">
              Revly strives to provide high-quality services but does not
              guarantee uninterrupted or error-free use of its platform.
              Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Media Buying Services:</strong> Revly takes full
                responsibility for the performance and results of its marketing
                services.
              </li>
              <li>
                <strong>RMS and Other Tools:</strong> Customers will be fully
                responsible for how they use the RMS platform and related tools.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">
              6. Ownership of Content
            </h2>
            <p className="text-lg leading-relaxed">
              All intellectual property related to Revly’s website, services,
              and tools, including text, graphics, and software, remains the
              exclusive property of Revly. Users may not copy, modify, or
              redistribute any part of the platform without explicit permission.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              7. Changes to Terms
            </h2>
            <p className="text-lg leading-relaxed">
              Revly reserves the right to update these Terms periodically.
              Updates will be communicated to users via email if they have
              signed up on our website. Continued use of our services
              constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              8. Governing Law
            </h2>
            <p className="text-lg leading-relaxed">
              These Terms are governed by the laws of Sweden. Any disputes will
              be resolved in accordance with Swedish legal regulations.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              9. Contact Information
            </h2>
            <p className="text-lg leading-relaxed">
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:info@revly.se" className="text-cta">
                info@revly.se
              </a>
              .
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfServicePage;
