import Head from "next/head";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";
import { NextSeo } from "next-seo";

const seoTitle = "Revly - Privacy Policy";
const seoDescription =
  "Learn about Revly's commitment to protecting your privacy and handling your data responsibly.";
const seoUrl = "https://www.revly.se/privacy";
const faviconAlt = "Revly - Privacy Policy";

const PrivacyPolicyPage = () => {
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
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <section className="py-40 px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              At Revly, we value your privacy and are committed to protecting
              your personal information.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-8">
            <h2 className="text-2xl font-bold text-primary">
              1. Data We Collect
            </h2>
            <p className="text-lg leading-relaxed">
              We collect the following types of data:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Personal Information: Name, email address, phone number, payment
                details, etc.
              </li>
              <li>
                Technical Information: IP address, browser type, device
                information, and cookies.
              </li>
              <li>
                Usage Data: Interaction with our website and services, collected
                through tools like Google Analytics.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">
              2. How We Collect Data
            </h2>
            <p className="text-lg leading-relaxed">
              Data is collected via contact forms, account registration, payment
              processing, and tracking tools.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              3. Purpose of Data Collection
            </h2>
            <p className="text-lg leading-relaxed">
              Your data is used to provide services, communicate with you,
              improve our products, and for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              4. Sharing Data with Third Parties
            </h2>
            <p className="text-lg leading-relaxed">
              We may share your data with payment providers and analytics tools
              like Google Analytics. We do not sell your data to third parties.
            </p>

            <h2 className="text-2xl font-bold text-primary">5. Cookies</h2>
            <p className="text-lg leading-relaxed">
              Our website uses cookies to enhance your experience. You can
              manage cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              6. Data Security
            </h2>
            <p className="text-lg leading-relaxed">
              All personal information is encrypted and access is restricted to
              authorized personnel.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Your Rights</h2>
            <p className="text-lg leading-relaxed">
              As a user, you have the right to access, correct, or delete your
              data. These features will be available soon.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              8. Legal Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              Revly complies with GDPR and other data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-primary">
              9. Updates to This Policy
            </h2>
            <p className="text-lg leading-relaxed">
              We may update this policy periodically. Continued use of our
              services indicates your acceptance of the changes.
            </p>

            <h2 className="text-2xl font-bold text-primary">10. Contact Us</h2>
            <p className="text-lg leading-relaxed">
              For any questions, please contact us at{" "}
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

export default PrivacyPolicyPage;
