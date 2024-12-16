import type { ButtonTypes } from "./Button.types";

function getButtonClasses(styleType: string): string {
  switch (styleType) {
    case "primary":
      return "px-8 py-2 text-lg font-almaroseSemibold text-white bg-cta border border-transparent rounded-xl shadow-md hover:bg-cta/90 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
    case "primarySmall":
      return "px-4 py-2 text-sm font-almaroseSemibold text-white bg-cta border border-transparent rounded-xl shadow-md hover:bg-cta/90 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
    case "secondary":
      return "px-6 py-2 font-almaroseSemibold text-white bg-secondary border border-transparent rounded-xl shadow-md hover:bg-cta/90 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
    case "secondarySmall":
      return "px-4 py-2 text-sm font-almaroseSemibold text-white bg-secondary border border-transparent rounded-xl shadow-md hover:bg-cta/90 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
    case "activeSmall":
      return "px-4 py-2 text-sm font-almaroseSemibold text-white bg-secondary border border-transparent rounded-xl shadow-md hover:bg-cta/90 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
    case "transparent":
      return "px-4 py-2 font-almaroseSemibold text-primary bg-transparent rounded-xl hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
    case "disabled":
      return "px-4 py-2 font-almaroseSemibold text-primary bg-gray-200 border border-gray-300 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed";
    default:
      return "px-4 py-2 font-almaroseSemibold text-white bg-cta-color border border-transparent rounded-xl shadow-md hover:bg-cta/90 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed";
  }
}

function Button({
  label,
  styleType,
  onClick,
  additionalClasses,
  disabled = false,
  icon,
}: ButtonTypes): JSX.Element {
  return (
    <button
      className={`${getButtonClasses(styleType)} ${additionalClasses}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
