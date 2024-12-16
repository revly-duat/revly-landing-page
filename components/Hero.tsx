import Button from "components/ui/Button/index";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  buttonType:
    | "primary"
    | "primarySmall"
    | "secondary"
    | "secondarySmall"
    | "activeSmall"
    | "disabled"
    | "transparent";
  gradientClass?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  buttonType,
  gradientClass,
}) => {
  return (
    <div
      className={`${gradientClass} min-h-screen flex flex-col justify-between`}
    >
      <div className="relative flex-grow flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up text-center">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-up text-center">
          {subtitle}
        </p>
        <div className="animate-fade-in-up lg:mt-24">
          <Button
            label={buttonText}
            styleType={buttonType}
            additionalClasses="bg-cta text-white py-3 font-almaroseBold w-64 sm:w-72 text-lg sm:text-xl"
            onClick={() => (window.location.href = buttonLink)}
          ></Button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="animate-bounce">
          <ChevronDown className="h-16 w-16 text-white" />
        </div>
      </div>
    </div>
  );
};
