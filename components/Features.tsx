import { Brain, Trophy, Globe, Mail } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent suggestions for improvement based on customer feedback and trends.",
  },
  {
    icon: Trophy,
    title: "Performance Leaderboard",
    description:
      "Track your business performance against competitors with our hidden leaderboard system.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Respond to comments and reviews in multiple languages with our translation tool.",
  },
  {
    icon: Mail,
    title: "Automated Reports",
    description:
      "Receive customized email reports about reviews, comments, and rating changes.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Revly can transform your business with our powerful
            features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <feature.icon className="w-12 h-12 text-cta mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
