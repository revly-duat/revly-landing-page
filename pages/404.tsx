import * as React from "react";
import { useRouter } from "next/router";
import { COLORS } from "components/theme/colors";
import FadeIn from "components/ui/FadeIn";
import Container from "components/layout/Container";
import Button from "components/ui/Button";

const Custom404: React.FC = () => {
  const router = useRouter();

  return (
    <section
      className="flex flex-col justify-center items-center text-center py-32 md:py-48 px-6 overflow-hidden"
      style={{ background: COLORS.navy900, color: COLORS.text }}
    >
      <div className="absolute inset-0 opacity-30" />

      <Container>
        <FadeIn>
          <h1
            className="text-7xl md:text-8xl font-extrabold tracking-tight mb-4"
            style={{ color: COLORS.yellow400 }}
          >
            404
          </h1>

          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: COLORS.white }}
          >
            Sidan kunde inte hittas
          </h2>

          <p
            className="text-base md:text-lg max-w-xl mx-auto mb-10"
            style={{ color: COLORS.textMuted }}
          >
            Vi kunde inte hitta sidan du letade efter. Den kan ha flyttats,
            tagits bort eller så har du kanske skrivit in fel adress.
          </p>

          <div className="flex justify-center">
            <Button
              label="Tillbaka till startsidan"
              styleType="primary"
              onClick={() => router.push("/")}
              additionalClasses="px-8 py-3"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Custom404;
