import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import Button from "components/ui/Button/index";
import { useRouter } from "next/router";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed w-full backdrop-blur-sm z-50 py-4 font-almarose">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="/">
              <img
                className="block h-12 w-auto"
                src="revly_logo_transparent.png"
                alt="Revly logo"
              />
            </a>

            {/* Desktop Navigation moved here */}
            <div className="hidden md:flex font-bold items-center space-x-8">
              <a href="/" className="nav-link">
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="#marketing">Marketing</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#rms">RMS</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#courses">Courses</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#about" className="nav-link">
                Learn more
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              label="Sign in"
              styleType="transparent"
              additionalClasses="font-almaroseSemiBold px-8"
              onClick={() => router.push("/signup")}
            ></Button>
            <Button
              label="Sign up"
              styleType="primary"
              additionalClasses="text-base font-almaroseSemiBold px-8"
              onClick={() => router.push("/signup")}
            ></Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 text-primary hover:text-cta"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-primary hover:text-cta"
              >
                Our Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-primary hover:text-cta"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-primary hover:text-cta"
              >
                Contact Us
              </a>
              <Button
                label="Sign up"
                styleType="secondary"
                additionalClasses="sm:text-xs"
                onClick={() => router.push("/signup")}
              ></Button>

              <Button
                label="Sign in"
                styleType="transparent"
                additionalClasses="sm:text-xs"
                onClick={() => router.push("/signup")}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
