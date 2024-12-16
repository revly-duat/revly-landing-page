import Button from "components/ui/Button/index";
import { useRouter } from "next/router";

export const CTA = () => {
  const router = useRouter();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Join hundreds of businesses already succeeding with Revly
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Start your free trial today and see the difference
        </p>
        <Button
          label="Get Started Now"
          styleType="primary"
          additionalClasses="lg:text-base sm:text-xs"
          onClick={() => router.push("/signup")}
        ></Button>
      </div>
    </section>
  );
};
