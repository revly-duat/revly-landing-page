import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "components/ui/Button/index";
import { useRouter } from "next/router";
import { scrollToSection } from "utils/smartScroll";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleButtonClick = (link: string) => {
    scrollToSection(router, link);
    setIsOpen(false);
  };

  // Scroll-effekt för bakgrund
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 font-body transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(0,13,29,0.8)] shadow-[0_1px_10px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 sm:px-6 lg:px-16 py-6">
        <div className="grid grid-cols-3 md:grid-cols-3 justify-center items-center h-16 text-white transition-opacity duration-700 opacity-100">
          {/* Left nav */}
          <div className="flex items-center justify-center space-x-8">
            <div className="hidden lg:flex font-bold items-center space-x-8">
              {[
                { label: "Resultat", link: "/cases" },
                { label: "Kontakt", link: "/contact" },
                { label: "Om oss", link: "/about" },
              ].map((item) => (
                <a
                  key={item.link}
                  onClick={() => router.push(item.link)}
                  className="nav-link cursor-pointer text-base transition-colors hover:text-[#FFC300]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div
            className="flex col-start-1 col-span-2 md:col-start-2 md:col-span-1 md:justify-center transition-opacity hover:opacity-80"
            onClick={() => router.push("/")}
          >
            <img
              className="block h-12 max-w-xl md:h-14 col-start-1 cursor-pointer transition-transform hover:scale-[1.04]"
              src="/revly_logo_white_transparent.svg"
              alt="Revly Transparent Logo"
            />
          </div>

          {/* Right buttons */}
          <div className="hidden lg:flex justify-center items-center space-x-4">
            <Button
              label="Gratis konsultation"
              styleType="primary"
              additionalClasses="text-[#001D3D] bg-[#FFC300] px-4 hover:brightness-110"
              onClick={() => router.push("/contact")}
            />
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex justify-end">
            <Button
              label="Kontakta oss"
              styleType="primarySmall"
              additionalClasses="text-[#001D3D] bg-[#FFC300] px-4 text-nowrap hover:brightness-110"
              onClick={() => router.push("/contact")}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-transform hover:scale-110"
              aria-label="Navigation button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="lg:hidden animate-fadeIn bg-[rgba(0,13,29,0.95)] rounded-xl mt-3 shadow-lg border border-[rgba(255,255,255,0.08)]"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <div className="px-4 pt-4 pb-5 space-y-3">
              {[
                { label: "Hem", link: "/" },
                { label: "Resultat", link: "/cases" },
                { label: "Kontakt", link: "/contact" },
                { label: "Om oss", link: "/about" },
              ].map((item) => (
                <a
                  key={item.link}
                  onClick={() => handleButtonClick(item.link)}
                  className="block px-3 py-2 text-[#E9EDF5] hover:text-[#FFC300] text-md font-semibold cursor-pointer transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                label="Gratis konsultation"
                styleType="primary"
                additionalClasses="text-[#001D3D] bg-[#FFC300] w-full hover:brightness-110"
                onClick={() => router.push("/contact")}
              />
            </div>
          </div>
        )}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};
