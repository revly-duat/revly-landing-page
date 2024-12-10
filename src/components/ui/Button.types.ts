export type ButtonTypes = {
  label: string;
  styleType:
    | "primary"
    | "primarySmall"
    | "secondary"
    | "secondarySmall"
    | "activeSmall"
    | "disabled"
    | "transparent";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  additionalClasses?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  isResponsive?: boolean;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonTypes {
  asChild?: boolean;
}