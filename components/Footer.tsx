import { Facebook, Linkedin } from "lucide-react";
import { useRouter } from "next/router";
import { scrollToSection } from "utils/smartScroll";

export const Footer = () => {
  const router = useRouter();
  const handleButtonClick = (link: string) => {
    scrollToSection(router, link);
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Länkar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-cta">
                  Hem
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick("/#services");
                  }}
                  className="text-gray-600 hover:text-cta"
                >
                  Våra tjänster
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-cta">
                  Om oss
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-cta">
                  Kontakta oss
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
            <ul className="space-y-2">
              <li>
                <a href="/marketing" className="text-gray-600 hover:text-cta">
                  Marknadsföring
                </a>
              </li>
              <li>
                <a href="/rms" className="text-gray-600 hover:text-cta">
                  Review Management System
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Övrigt</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-cta">
                  Integritetspolicy
                </a>
              </li>
              <li>
                <a href="/tos" className="text-gray-600 hover:text-cta">
                  Villkor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="text-gray-600 hover:text-cta mb-4">
              <a href="mailto:info@revly.se">info@revly.se</a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/revly-ab"
                className="text-gray-600 hover:text-cta"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/revlyab/"
                className="text-gray-600 hover:text-cta"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Revly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
