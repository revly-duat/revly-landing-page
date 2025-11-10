// components/ui/EqualCard.tsx
import * as React from "react";

interface EqualCardProps {
  children: React.ReactNode;
  className?: string;
}

const EqualCard: React.FC<EqualCardProps> = ({ children, className = "" }) => {
  // Gör att kort kan sträckas lika högt i grid (auto-rows-fr)
  return <div className={`h-full flex flex-col ${className}`}>{children}</div>;
};

export default EqualCard;
