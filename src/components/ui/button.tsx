import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "./Button.types"; // Import ButtonProps from the types file
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, styleType, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(className)} // You can customize the className as needed
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };