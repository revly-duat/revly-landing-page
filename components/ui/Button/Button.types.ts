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
