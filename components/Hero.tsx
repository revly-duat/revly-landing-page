import Button from "components/ui/Button/index";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import { scrollToSection } from "utils/smartScroll";

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
  animatedText?: boolean; // Boolean to toggle animated text
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  buttonType,
  gradientClass,
  animatedText,
}) => {
  const router = useRouter();
  const handleButtonClick = () => {
    scrollToSection(router, buttonLink);
  };

  return (
    <div
      className={`${gradientClass} min-h-screen flex flex-col justify-between`}
    >
      <div className="relative flex-grow flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-center">
          {animatedText ? (
            <>
              <span className="overflow-hidden">Simplify Your Business </span>
              <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                  <li>Growth</li>
                  <li>Marketing</li>
                  <li>Reputation</li>
                  <li>Training</li>
                  <li aria-hidden="true">Growth</li>
                </ul>
              </span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto text-center">
          {subtitle}
        </p>
        <div className="mt-12 lg:mt-24">
          <Button
            label={buttonText}
            styleType={buttonType}
            additionalClasses="bg-cta text-white py-3 font-almaroseBold w-64 sm:w-72 text-lg sm:text-xl"
            onClick={handleButtonClick}
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
