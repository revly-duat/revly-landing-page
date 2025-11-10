import * as React from "react";
import { Facebook, Linkedin } from "lucide-react";
import { useRouter } from "next/router";
import { scrollToSection } from "utils/smartScroll";

const COLORS = {
  navy900: "#000814",
  yellow500: "#FFC300",
  text: "#DDE3ED",
  divider: "rgba(255,255,255,0.10)",
};

export const Footer: React.FC = () => {
  const router = useRouter();
  const handleButtonClick = (link: string) => {
    scrollToSection(router, link);
  };

  return (
    <footer
      className="px-4 sm:px-6 md:px-8 pt-16 pb-12"
      style={{ background: COLORS.navy900 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Topp: logotyp + kort text */}
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-12 md:items-start md:justify-items-center mb-8">
          {/* Logo */}
          <div
            className="flex transition-opacity hover:opacity-80 justify-center md:justify-start"
            onClick={() => router.push("/")}
          >
            <img
              className="block h-16 md:h-18 cursor-pointer transition-transform hover:scale-[1.04]"
              src="/revly_logo_white_transparent.svg"
              alt="Revly logotyp"
            />
          </div>

          {/* Desktop-kolumner (syns bara md+) */}
          <div className="hidden md:block">
            <h3 className="text-xl font-semibold mb-4 text-white">Länkar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  Hem
                </a>
              </li>
              <li>
                <a
                  href="/#results"
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick("/#results");
                  }}
                  className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  Resultat
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  Om oss
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  Kontakta oss
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xl font-semibold mb-4 text-white">Kontakt</h3>
            <div className="mb-4">
              <a
                href="mailto:info@revly.se"
                className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                style={{ color: COLORS.text }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.yellow500)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = COLORS.text)
                }
              >
                info@revly.se
              </a>
              <p className="text-xs mt-2" style={{ color: COLORS.text }}>
                Måndag–fredag
                <br />
                09:00–17:00
                <br />
                Svar inom 2 timmar
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/revly-ab"
                aria-label="LinkedIn"
                className="inline-flex"
                style={{ color: COLORS.text }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.yellow500)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = COLORS.text)
                }
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/revlyab/"
                aria-label="Facebook"
                className="inline-flex"
                style={{ color: COLORS.text }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.yellow500)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = COLORS.text)
                }
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="block md:hidden flex flex-col-2 gap-12 pt-6 justify-center">
            <div className="block">
              <h3 className="text-xl font-semibold mb-4 text-white">Länkar</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                    style={{ color: COLORS.text }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = COLORS.yellow500)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = COLORS.text)
                    }
                  >
                    Hem
                  </a>
                </li>
                <li>
                  <a
                    href="/#results"
                    onClick={(e) => {
                      e.preventDefault();
                      handleButtonClick("/#results");
                    }}
                    className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                    style={{ color: COLORS.text }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = COLORS.yellow500)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = COLORS.text)
                    }
                  >
                    Resultat
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                    style={{ color: COLORS.text }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = COLORS.yellow500)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = COLORS.text)
                    }
                  >
                    Om oss
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                    style={{ color: COLORS.text }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = COLORS.yellow500)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = COLORS.text)
                    }
                  >
                    Kontakta oss
                  </a>
                </li>
              </ul>
            </div>
            {/* Kontakt (alltid öppen) */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Kontakt</h3>
              <div className="mb-4">
                <a
                  href="mailto:info@revly.se"
                  className="transition-colors rounded focus:outline-none focus-visible:ring-2"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  info@revly.se
                </a>
                <p className="text-xs mt-2" style={{ color: COLORS.text }}>
                  Måndag–fredag
                  <br />
                  09:00–17:00
                  <br />
                  Svar inom 2 timmar
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/revly-ab"
                  aria-label="LinkedIn"
                  className="inline-flex"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/revlyab/"
                  aria-label="Facebook"
                  className="inline-flex"
                  style={{ color: COLORS.text }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.yellow500)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.text)
                  }
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center"
          style={{ borderColor: COLORS.divider }}
        >
          <p style={{ color: COLORS.text }}>
            © {new Date().getFullYear()} Revly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
