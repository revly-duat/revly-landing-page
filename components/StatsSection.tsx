import { TrendingUp, Globe, ShoppingBag, BarChart } from "lucide-react";

const stats = [
  {
    icon: BarChart,
    value: "2M+ SEK",
    description: "Managed Ad Spend with an Average ROAS of 3.5x",
  },
  {
    icon: ShoppingBag,
    value: "300%",
    description: "Growth in E-Commerce Campaigns",
  },
  {
    icon: TrendingUp,
    value: "260%",
    description: "Average Online Revenue Increase",
  },
  {
    icon: Globe,
    value: "5+ Countries",
    description: "Reached Millions of Potential Customers",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-32 px-6 sm:px-6 lg:px-8 bg-white text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Proven Results
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Discover how Revly's marketing expertise drives measurable growth
            and delivers results for businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-lg"
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
