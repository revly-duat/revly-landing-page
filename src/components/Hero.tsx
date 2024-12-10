import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Empower Your Business with{" "}
            <span className="text-cta">Intelligent Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revly combines cutting-edge technology with actionable insights to
            transform how you grow your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cta hover:bg-cta-hover text-white text-lg px-8 py-6">
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-white text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};