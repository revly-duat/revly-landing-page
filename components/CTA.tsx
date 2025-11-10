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
          Get informed about our RMS, or contact us to learn more about our
          marketing services or our courses.
        </p>
        <div className="flex space-x-4 justify-center">
          <Button
            label="Get Started Now"
            styleType="primary"
            additionalClasses="font-heading text-md"
            onClick={() => router.push("/rms")}
          ></Button>
          <Button
            label="Contact us"
            styleType="transparent"
            additionalClasses="text-white text-md font-heading"
            onClick={() => router.push("/contact")}
          ></Button>
        </div>
      </div>
    </section>
  );
};
