import { children, Component, JSX, JSXElement } from "solid-js";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {
  rows: number;
  cols: number;
  className?: string;
}

const BentoBox: Component<props> = ({
  rows,
  cols,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      class={`bento-box relative overflow-hidden rounded-xl bg-border p-[1px]`}
      style={{
        "grid-column": `${cols} span / ${cols} span `,
        "grid-row": `${rows} span / ${rows} span`,
      }}
    >
      <div
        class="relative z-10 h-full w-full rounded-xl bg-[#131313]"
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default BentoBox;
