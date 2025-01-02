import React from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
  heading: string;
  subheading: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features,
  heading,
  subheading,
}) => {
  return (
    <section className="py-32 px-6 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
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
