import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm font-almarose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-primary">
              Revly
            </a>
            {/* Desktop Navigation moved here */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="nav-link">
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link">
                  Our Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="#marketing">Marketing</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#rms">Reputation Management</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#courses">Courses</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#about" className="nav-link">
                About Us
              </a>
              <a href="#contact" className="nav-link">
                Contact Us
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-cta text-cta hover:bg-cta hover:text-white">
              Sign In
            </Button>
            <Button className="bg-cta hover:bg-cta-hover text-white">
              Sign Up
            </Button>
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
              <Button variant="outline" className="w-full border-cta text-cta hover:bg-cta hover:text-white mt-4">
                Sign In
              </Button>
              <Button className="w-full bg-cta hover:bg-cta-hover text-white mt-4">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};