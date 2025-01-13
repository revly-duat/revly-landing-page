import { NextRouter } from "next/router";

/**
 * Smooth scroll to a section on the current or another page.
 * @param router Next.js router instance
 * @param path Path to navigate to (e.g., "/#services" or "/contact#form")
 */
export const scrollToSection = (router: NextRouter, path: string) => {
  const [pathname, hash] = path.split("#");

  if (router.pathname === pathname) {
    // Om vi redan är på rätt sida, scrolla direkt
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  } else {
    // Navigera till sidan och scrolla efter laddning
    router.push(pathname).then(() => {
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 500); // Vänta tills sidan laddas
      }
    });
  }
};
