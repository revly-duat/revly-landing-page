import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Revly has transformed how we handle our online presence. The AI insights are incredibly valuable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content:
      "The multi-language support has helped us expand our business globally. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Small Business Owner",
    content:
      "The automated reports save me hours each week. Revly is a game-changer for small businesses.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-md"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cta fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
