// components/home/ProcessSection/ProcessCard.tsx
import * as React from "react";
import { COLORS } from "components/theme/colors";

export interface ProcessItem {
  title: string;
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ProcessCardProps {
  item: ProcessItem;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="rounded-2xl p-6 h-full h-full bg-[#000814] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl shadow-[#003566]/30">
      <Icon className="h-5 w-5" style={{ color: COLORS.yellow500 }} />
      <h3 className="mt-3 text-xl font-bold" style={{ color: COLORS.white }}>
        {item.title}
      </h3>
      <p className="mt-2 text-sm" style={{ color: COLORS.text }}>
        {item.text}
      </p>
    </div>
  );
};

export default ProcessCard;
