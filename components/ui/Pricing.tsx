import { Check } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/router";
import { useState } from "react";

const pricingPlans = {
  monthly: [
    {
      title: "Starter",
      price: "$19",
      features: [
        "Manage reviews across platforms",
        "Social media insights",
        "AI-powered sentiment analysis",
      ],
      cta: "Sign Up Now",
      ctaLink: "/pricing/monthly/starter",
    },
    {
      title: "Pro",
      price: "$49",
      features: [
        "All Basic features",
        "Custom analytics reports",
        "Engagement predictions",
        "Priority support",
      ],
      cta: "Sign Up Now",
      ctaLink: "/pricing/monthly/pro",
    },
    {
      title: "Enterprise",
      price: "Contact us",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom AI feedback models",
        "Team training and onboarding",
      ],
      cta: "Contact Sales",
      ctaLink: "/pricing/monthly/enterprise",
    },
  ],
  yearly: [
    {
      title: "Starter",
      price: "$149",
      features: [
        "Manage reviews across platforms",
        "Social media insights",
        "AI-powered sentiment analysis",
      ],
      cta: "Sign Up Now",
      ctaLink: "/pricing/yearly/starter",
    },
    {
      title: "Pro",
      price: "$449",
      features: [
        "All Basic features",
        "Custom analytics reports",
        "Engagement predictions",
        "Priority support",
      ],
      cta: "Sign Up Now",
      ctaLink: "/pricing/yearly/pro",
    },
    {
      title: "Enterprise",
      price: "Contact us",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom AI feedback models",
        "Team training and onboarding",
      ],
      cta: "Contact Sales",
      ctaLink: "/pricing/yearly/enterprise",
    },
  ],
};

export const Pricing = () => {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const toggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <section className="pt-16 pb-32 px-6 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Flexible Pricing for Your Business
        </h2>
        <p className="text-gray-600 mb-6">
          Choose a plan that fits your needs and start improving your brand
          today!
        </p>
        <div className="flex justify-center mb-12">
          <button
            className={`py-2 px-6 rounded-l-lg ${
              billingCycle === "monthly"
                ? "bg-cta text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-6 rounded-r-lg ${
              billingCycle === "yearly"
                ? "bg-cta text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans[billingCycle].map((plan, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow flex flex-col justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-almaroseSemiBold text-primary mb-4">
                  {plan.title}
                </h3>
                <p className="text-4xl font-almaroseBold text-cta mb-12">
                  {plan.price}
                </p>
                <ul className="text-gray-600 space-y-2 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-cta mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                label={plan.cta}
                styleType="primary"
                additionalClasses="max-w-48"
                onClick={() => router.push(plan.ctaLink)}
              ></Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
