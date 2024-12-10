import { Button }from "@/components/ui/button";
import { useRouter } from 'next/router';

export const Hero = () => {
  const router = useRouter();

  return (
  <div className="bg-gradient-to-b from-cta/80 to-cta/60 pt-64 pb-64 px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 "></div>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
          Control Your Reputation with Revly
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-thin mb-8 max-w-3xl mx-auto">
          Monitor reviews and engage on social media effortlessly with our
          comprehensive management platform
        </p>
        <div className="mt-24 flex flex-col sm:flex-row justify-center gap-4">
        <Button
        label="Get Started Now"
  styleType="primary"
  className="lg:text-base sm:text-xs"
  onClick={() => router.push("https://brand.revly.se/signup")}
>
</Button>
        </div>
      </div>
    </div>
  </div>
  );
};