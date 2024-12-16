import Button from "components/ui/Button/index";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="bg-heroGradient bg-[length:200%_200%] animate-gradient-move pt-80 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Heading with Fade-in Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in-up">
            Control Your Reputation with Revly
          </h1>

          {/* Subtext with Fade-in Animation */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Monitor reviews and engage on social media effortlessly with our
            comprehensive management platform
          </p>

          {/* Button with Fade-in Animation */}
          <div className="mt-32 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Button
              label="Get Started Now"
              styleType="primary"
              additionalClasses="bg-cta text-white px-10 py-3 font-almaroseBold text-xl rounded-xl shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_8px_rgba(255,255,255,0.7)]"
              onClick={() => router.push("/signup")}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
