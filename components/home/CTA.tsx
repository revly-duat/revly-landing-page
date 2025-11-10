// components/home/CTA.tsx
import * as React from "react";
import { useRouter } from "next/router";
import Container from "components/layout/Container";
import Button from "components/ui/Button";
import { COLORS } from "components/theme/colors";
import FadeIn from "components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  const router = useRouter();

  const handleBookMeeting = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://calendar.app.google/3ocMe1wZk9gim9HZ6",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section id="contact" className="relative isolate pt-24 pb-20">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[0vh] -bottom-[35vh] w-[100vw] -z-10" />

      <FadeIn>
        <Container>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: COLORS.navy850,
              border: `1px solid ${COLORS.overlay}`,
            }}
          >
            {/* Lokal highlight inuti panelen */}
            <div className="absolute inset-0 pointer-events-none" />
            <div className="relative p-12 md:p-16">
              <h3
                className="text-3xl md:text-4xl text-white font-extrabold"
                style={{ lineHeight: 1.2 }}
              >
                Vill du också växa lönsamt?
              </h3>
              <p
                className="mt-3 text-base md:text-lg max-w-2xl"
                style={{ color: COLORS.text }}
              >
                Boka ett kostnadsfritt samtal. Vi gör en snabb audit och skissar
                en tydlig plan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  additionalClasses="flex flex-grow lg:flex-none"
                  label="Kontakta oss"
                  styleType="primary"
                  icon={<ArrowRight className="h-5 w-5" />}
                  onClick={() => router.push("/contact")}
                />
                <Button
                  additionalClasses="flex flex-grow lg:flex-none"
                  label="Boka möte"
                  styleType="secondary"
                  icon={<ArrowRight className="h-5 w-5" />}
                  onClick={handleBookMeeting}
                />
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </section>
  );
};

export default CTA;
