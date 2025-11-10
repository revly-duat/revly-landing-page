// components/layout/Container.tsx
import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Tag = "div",
}) => {
  return (
    <Tag className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</Tag>
  );
};

export default Container;
