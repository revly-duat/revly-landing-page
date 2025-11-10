import { Megaphone, Star } from "lucide-react";
import Button from "components/ui/Button/index";
import { useRouter } from "next/router";

const services = [
  {
    icon: Megaphone,
    title: "Marknadsföring",
    description:
      "Skala er verksamhet med datadrivna marknadsstrategier, skräddarsydda för att hitta rätt målgrupp och driva lönsam tillväxt.",
    id: "marketing",
    link: "/marketing",
  },
  {
    icon: Star,
    title: "Review Management System",
    description:
      "Hantera recensioner och förstärk ert varumärkes rykte med insiktsdriven feedback och tydliga AI-baserade rekommendationer.",
    id: "rms",
    link: "/rms",
  },
];

export const Services = () => {
  const router = useRouter();

  return (
    <section
      id="services"
      className="scroll-mt-[calc(20vh-96px)] py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Våra tjänster
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder lösningar som hjälper er att växa smartare, snabbare och
            med full kontroll.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center p-6 bg-white"
            >
              <div className="flex flex-col items-center">
                <service.icon className="h-12 w-12 text-cta mb-4" />
                <h3 className="text-xl font-heading text-center text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
              </div>
              <Button
                label="Läs mer"
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
