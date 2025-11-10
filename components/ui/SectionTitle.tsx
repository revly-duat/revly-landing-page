// components/ui/SectionTitle.tsx
import * as React from "react";
import { COLORS } from "components/theme/colors";
import FadeIn from "components/ui/FadeIn";

interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  kicker,
  title,
  subtitle,
  center = true,
  className = "",
}) => {
  return (
    <FadeIn>
      <div
        className={`max-w-3xl mx-auto px-4 ${
          center ? "text-center" : ""
        } mb-12 ${className}`}
      >
        {kicker && (
          <p
            className="uppercase tracking-wider mb-4 text-sm font-semibold"
            style={{ color: COLORS.yellow500 }}
          >
            {kicker}
          </p>
        )}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          style={{ color: COLORS.white }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: COLORS.textMuted }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
};

export default SectionTitle;
