import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Join hundreds of businesses already succeeding with Revly
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Start your free trial today and see the difference
        </p>
        <Button className="bg-cta hover:bg-cta-hover text-white text-lg px-8 py-6">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};