import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "components/ui/Button/index";
import { useRouter } from "next/router";
import { scrollToSection } from "utils/smartScroll";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleButtonClick = (link: string) => {
    scrollToSection(router, link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-gray-50 rounded-b-2xl lg:bg-transparent lg:backdrop-blur-sm py-2 z-50 font-almarose">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center justify-center space-x-8">
            <div onClick={() => router.push("/")}>
              <img
                className="block h-10 md:h-10 w-auto cursor-pointer"
                src="/revly_logo_transparent.png"
                alt="Revly Transparent Logo"
              />
            </div>
            <div className="hidden lg:flex font-bold items-center space-x-8">
              <a
                onClick={() => router.push("/marketing")}
                className="nav-link cursor-pointer"
              >
                Marknadsföring
              </a>
              <a
                onClick={() => router.push("/rms")}
                className="nav-link cursor-pointer"
              >
                RMS
              </a>
              <a
                onClick={() => router.push("/about")}
                className="nav-link cursor-pointer"
              >
                Om oss
              </a>
              <a
                onClick={() => router.push("/contact")}
                className="nav-link cursor-pointer"
              >
                Kontakta oss
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              label="Logga in"
              styleType="transparent"
              additionalClasses="font-almaroseSemiBold px-4"
              onClick={() => router.push("https://brand.revly.se")}
            ></Button>
            <Button
              label="Testa gratis"
              styleType="secondary"
              additionalClasses="text-base font-almaroseSemiBold px-4"
              onClick={() => router.push("https://brand.revly.se/signup")}
            ></Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2"
              aria-label="Navigation button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                onClick={() => handleButtonClick("/")}
                className="block px-3 py-2 text-primary hover:text-cta cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => handleButtonClick("/marketing")}
                className="block px-3 py-2 text-primary hover:text-cta cursor-pointer"
              >
                Marketing
              </a>
              <a
                onClick={() => handleButtonClick("/rms")}
                className="block px-3 py-2 text-primary hover:text-cta cursor-pointer"
              >
                RMS
              </a>
              <a
                onClick={() => handleButtonClick("/about")}
                className="block px-3 py-2 text-primary hover:text-cta cursor-pointer"
              >
                About Us
              </a>
              <a
                onClick={() => handleButtonClick("/contact")}
                className="block px-3 py-2 text-primary hover:text-cta cursor-pointer"
              >
                Contact Us
              </a>
              <Button
                label="Sign up"
                styleType="secondary"
                additionalClasses="sm:text-xs"
                onClick={() => router.push("https://brand.revly.se/signup")}
              ></Button>
              <Button
                label="Sign in"
                styleType="transparent"
                additionalClasses="sm:text-xs"
                onClick={() => router.push("https://brand.revly.se")}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
