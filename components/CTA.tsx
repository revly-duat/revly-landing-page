import Button from "components/ui/Button/index";
import { useRouter } from "next/router";

export const CTA = () => {
  const router = useRouter();

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Discover how Revly can help your business grow
        </h2>
        <p className="text-lg sm:text-xl mb-12 opacity-90">
          Get started today with our RMS, or contact us to learn more about our
          marketing service or our courses.
        </p>
        <div className="flex space-x-4 justify-center">
          <Button
            label="Get Started Now"
            styleType="primary"
            additionalClasses="font-almaroseBold text-md"
            onClick={() => router.push("https://brand.revly.se/signup")}
          ></Button>
          <Button
            label="Contact us"
            styleType="transparent"
            additionalClasses="text-white text-md font-almaroseBold"
            onClick={() => router.push("/contact")}
          ></Button>
        </div>
      </div>
    </section>
  );
};
