import { TrendingUp, Globe, ShoppingBag, BarChart } from "lucide-react";

const stats = [
  {
    icon: BarChart,
    value: "2M+ SEK",
    description: "Hanterad annonsbudget med ett genomsnittligt ROAS på 3,1",
  },
  {
    icon: ShoppingBag,
    value: "300%",
    description: "Tillväxt i e-handelskampanjer",
  },
  {
    icon: TrendingUp,
    value: "260%",
    description: "Snittökning i intäkter online",
  },
  {
    icon: Globe,
    value: "5+ Countries",
    description: "Kampanjer med räckvidd över hela Europa",
  },
];

export const StatsSection = () => {
  return (
    <section className="pt-32 pb-12 px-6 sm:px-6 lg:px-8 bg-gray-50 text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bevisat resultat
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Se hur Revlys expertis inom marknadsföring skapar mätbar tillväxt
            för e-handelsföretag i Sverige och Europa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <stat.icon className="w-12 h-12 text-cta mb-4" />
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-primary/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
