import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cta to-cta/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Control Your Reputation with Revly
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Monitor reviews and engage on social media effortlessly with our
            comprehensive management platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white hover:bg-white/90 text-cta text-lg px-8 py-6">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};