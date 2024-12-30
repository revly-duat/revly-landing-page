import { Megaphone, Star, GraduationCap } from "lucide-react";
import Button from "components/ui/Button/index";
import { useRouter } from "next/router";

const services = [
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Scale your business with advanced data-driven marketing strategies tailored to reach new markets.",
    id: "marketing",
    link: "/marketing",
  },
  {
    icon: Star,
    title: "Reputation Management System",
    description:
      "Manage reviews and strengthen your brand's reputation with actionable AI-driven insights.",
    id: "rms",
    link: "/rms",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description:
      "Upskill your team with industry-focused courses in Data and IT to drive innovation.",
    id: "courses",
    link: "/academy",
  },
];

export const Services = () => {
  const router = useRouter();

  return (
    <section
      id="services"
      className="scroll-mt-[calc(50vh-96px)] py-16 px-4 sm:px-6 lg:px-8 bg-white"
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
              className="flex flex-col justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center">
                <service.icon className="h-12 w-12 text-cta mb-4" />
                <h3 className="text-xl font-almaroseSemiBold text-center text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
              </div>
              <Button
                label="Learn More"
                styleType="primary"
                additionalClasses="mt-auto"
                onClick={() => router.push(service.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
