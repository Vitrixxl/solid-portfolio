import { Component, JSX } from "solid-js";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "tag" | "tooltip";
}

const Tooltip: Component<props> = ({ className, ...props }) => {
  return (
    <div
      onClick={(e) => e.preventDefault()}
      class={`h-fit w-fit cursor-default rounded-md border border-border bg-background px-1 py-0.5 text-xs text-muted transition-colors duration-100 hover:bg-border hover:text-foreground ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Tooltip;
