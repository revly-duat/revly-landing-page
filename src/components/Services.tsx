import { Megaphone, Shield, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';


const services = [
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Data-driven strategies and tools to scale your business effectively.",
    id: "marketing",
  },
  {
    icon: Shield,
    title: "Reputation Management System",
    description:
      "Monitor and improve your business's reputation with AI insights.",
    id: "rms",
  },
  {
    icon: GraduationCap,
    title: "Courses",
    description:
      "Professional development courses to help businesses enhance their skills.",
    id: "courses",
  },
];

export const Services = () => {
  const router = useRouter();

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <service.icon className="w-12 h-12 text-cta mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button
              label="Get Started Now"
  styleType="primary"
  className="lg:text-base sm:text-xs"
  onClick={() => router.push("https://brand.revly.se/signup")}
>
</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};