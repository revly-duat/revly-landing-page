import type { ButtonTypes } from "./Button.types";

/**
 * Färgtema (Golden Twilight):
 *  - Primär: #FFC300 (guld) med mörkblå text
 *  - Sekundär: transparent bakgrund, gul kant, vit text
 *  - Transparent/Ghost: bara text (vit) – för textlänkar
 *  - Disabled: nedtonad med låg kontrast
 *
 * Typografi:
 *  - font-heading (Krona One) enligt din tailwind setup
 */

function getButtonClasses(styleType: string): string {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-body font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-[#FFD60A] focus:ring-offset-0 " +
    "disabled:opacity-60 disabled:cursor-not-allowed active:translate-y-[0.5px]";

  switch (styleType) {
    case "primary":
      // Gul primär
      return [
        base,
        "px-5 py-3 md:px-6 md:py-3.5 text-[15px] md:text-base",
        "bg-[#FFC300] text-[#001D3D] shadow-sm hover:brightness-110",
      ].join(" ");

    case "primarySmall":
      return [
        base,
        "px-4 py-2.5 text-sm",
        "bg-[#FFC300] text-[#001D3D] shadow-sm hover:brightness-110",
      ].join(" ");

    case "secondary":
      // Blå kontur, vit text
      return [
        base,
        "px-5 py-3 md:px-6 md:py-3.5 text-[15px] md:text-base",
        "border border-[#FFC300] text-white hover:bg-[#FFC300] hover:text-[#001D3D]",
      ].join(" ");

    case "secondarySmall":
      return [
        base,
        "px-4 py-2.5 text-sm",
        "border border-[#FFC300] text-white hover:bg-[#FFC300] hover:text-[#001D3D]",
      ].join(" ");

    case "activeSmall":
      // Liten primär (ersätter tidigare “active” med konsekvent primär)
      return [
        base,
        "px-4 py-2.5 text-sm",
        "bg-[#FFC300] text-[#001D3D] shadow-sm hover:brightness-110",
      ].join(" ");

    case "transparent":
      // Ghost/text-länk
      return [
        base,
        "px-3 py-2 text-sm md:text-[15px]",
        "bg-transparent text-[#E9EDF5] hover:text-white hover:underline underline-offset-4",
      ].join(" ");

    case "disabled":
      return [
        base,
        "px-4 py-2 text-sm",
        "bg-[#1A2A44] text-[#9AA7BD] border border-white/10",
      ].join(" ");

    default:
      // Fallback till primär
      return [
        base,
        "px-5 py-3 md:px-6 md:py-3.5 text-[15px] md:text-base",
        "bg-[#FFC300] text-[#001D3D] shadow-sm hover:brightness-110",
      ].join(" ");
  }
}

function Button({
  label,
  styleType = "primary",
  onClick,
  additionalClasses = "",
  disabled = false,
  icon,
}: ButtonTypes): JSX.Element {
  return (
    <button
      type="button"
      className={`${getButtonClasses(styleType)} ${additionalClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {icon ? <span className="-ml-0.5">{icon}</span> : null}
    </button>
  );
}

export default Button;
