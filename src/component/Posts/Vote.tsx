import { TbArrowBigUp } from "solid-icons/tb";
import { Component, JSX } from "solid-js";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {
  upvotes: number;
  downvotes: number;
}

const VoteButtons: Component<props> = ({ upvotes, downvotes }) => {
  return (
    <div class="flex h-7 divide-x divide-border overflow-hidden rounded-lg border border-border text-accent">
      <button class="flex items-center gap-1 px-2 py-0.5 leading-[1] hover:text-foreground [&>svg]:fill-transparent [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:hover:fill-primary [&>svg]:hover:stroke-primary">
        <TbArrowBigUp class="size-5" /> {upvotes}
      </button>
      <button class="flex items-center gap-1 px-2 py-0.5 leading-[1] hover:text-foreground [&>svg]:fill-transparent [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:hover:fill-foreground [&>svg]:hover:stroke-foreground">
        {downvotes}
        <TbArrowBigUp class="size-5 rotate-180" />
      </button>
    </div>
  );
};

export default VoteButtons;
