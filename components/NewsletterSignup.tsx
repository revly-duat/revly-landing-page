import { useState } from "react";
import Button from "components/ui/Button/index";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        `https://a.klaviyo.com/client/subscriptions?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY}`,
        {
          method: "POST",
          headers: {
            revision: "2024-10-15",
            "Content-Type": "application/vnd.api+json",
          },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: {
                profile: {
                  data: {
                    type: "profile",
                    attributes: {
                      email: email,
                      properties: {
                        source: "Newsletter Signup",
                      },
                    },
                  },
                },
              },
              relationships: {
                list: {
                  data: {
                    type: "list",
                    id: process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID,
                  },
                },
              },
            },
          }),
        }
      );

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        const data = await response.json();
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Stay Up To Date with Revly
        </h2>
        <p className="text-lg sm:text-xl mb-12 opacity-90">
          Subscribe to our newsletter for the latest updates on our products,
          features, and courses.
        </p>

        <div className="flex flex-col justify-center items-center space-y-6 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-cta sm:flex-1"
          />
          <Button
            label={isSubmitting ? "Subscribing..." : "Subscribe"}
            styleType="primary"
            additionalClasses="font-almaroseBold text-md px-8 py-3"
            disabled={isSubmitting}
            onClick={handleSubmit}
          />
        </div>

        {message && (
          <p className="mt-6 text-md font-almaroseSemiBold">{message}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
