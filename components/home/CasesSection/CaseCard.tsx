// components/home/CasesSection/CaseCard.tsx
import * as React from "react";
import Panel from "components/ui/Panel";
import EqualCard from "components/ui/Cards";
import { COLORS } from "components/theme/colors";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "components/ui/Button";

export interface CaseItem {
  client: string;
  goal: string;
  approach: string[];
  results: string[];
  badge: string;
  img: string;
}

interface CaseCardProps {
  item: CaseItem;
}

const CaseCard: React.FC<CaseCardProps> = ({ item }) => {
  return (
    <Panel border={COLORS.navy700} className="h-full">
      <EqualCard>
        <div className="aspect-[16/9] w-full flex items-center rounded-t-2xl justify-center bg-[#000814] border-b border-[rgba(255,255,255,0.08)]">
          <img
            src={item.img}
            alt={`${item.client} case`}
            className="max-h-48 object-contain opacity-90 brightness-0 invert p-8 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-xs font-semibold mb-2">
            <span
              className="px-2 py-1 rounded-full"
              style={{ background: COLORS.overlaySoft, color: COLORS.white }}
            >
              {item.badge}
            </span>
          </div>
          <h3 className="text-xl font-bold" style={{ color: COLORS.white }}>
            {item.client}
          </h3>
          <p className="mt-1 text-sm" style={{ color: COLORS.textMuted }}>
            Mål: {item.goal}
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p
                className="text-xs font-semibold"
                style={{ color: COLORS.yellow400 }}
              >
                Metod
              </p>
              <ul className="mt-1 space-y-1">
                {item.approach.map((a) => (
                  <li
                    key={a}
                    className="text-sm flex items-start gap-2"
                    style={{ color: COLORS.text }}
                  >
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5"
                      style={{ color: COLORS.yellow500 }}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="text-xs font-semibold"
                style={{ color: COLORS.yellow400 }}
              >
                Resultat
              </p>
              <ul className="mt-1 space-y-1">
                {item.results.map((r) => (
                  <li
                    key={r}
                    className="text-sm"
                    style={{ color: COLORS.text }}
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-auto" />
          <div className="flex justify-bottom">
            <Button
              additionalClasses="mt-4 flex-grow"
              label="Läs mer"
              styleType="secondarySmall"
              icon={<ArrowRight className="h-4 w-4" />}
              onClick={() => {
                if (typeof window !== "undefined")
                  window.location.href = "/contact";
              }}
            />
          </div>
        </div>
      </EqualCard>
    </Panel>
  );
};

export default CaseCard;
