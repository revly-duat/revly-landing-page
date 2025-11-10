// components/ui/Panel.tsx
import * as React from "react";
import { COLORS } from "components/theme/colors";

interface PanelProps {
  children: React.ReactNode;
  border?: string;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({
  children,
  border = COLORS.overlay,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl shadow-2xl shadow-[#003566]/30 transition-shadow ${className}`}
      style={{ border: `1px solid ${border}`, backgroundColor: COLORS.navy900 }}
    >
      {children}
    </div>
  );
};

export default Panel;
