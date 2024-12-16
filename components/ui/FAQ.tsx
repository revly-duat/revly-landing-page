import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQProps> = ({ title, faqs }) => {
  return (
    <section className="py-16 px-6 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-300 rounded-xl p-4"
            >
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-primary">
                <span>{faq.question}</span>
                <span className="text-gray-500 group-open:rotate-180 transform transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
