import { Component, createSignal, JSX, Match, Show, Switch } from "solid-js";
import { BsThreeDotsVertical } from "solid-icons/bs";
import { BiSolidUpvote } from "solid-icons/bi";
import { TbShare2, TbLink, TbArrowBigUp } from "solid-icons/tb";
import { BiRegularUpvote } from "solid-icons/bi";

interface props extends JSX.HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

interface propsBurger extends JSX.HTMLAttributes<HTMLButtonElement> {
  onClick?: (e: MouseEvent) => void;
}

const Button: Component<props> = ({ variant, ...props }) => {
  let containerClass =
    "custom-button p-[1px] relative  rounded-lg focus-visible:outline-4  focus-visible:outline-offset-1 focus-visible:outline-primary  ring-0 transition-all duration-100 outline-0 ";
  let baseClass =
    " px-4 rounded-[7px] w-full relative z-[2] px-4 py-2  font-medium ";
  let variantClass: string;
  switch (variant) {
    case "primary":
      containerClass += " primary-button bg-primary-accent";
      variantClass = " bg-primary text-foreground ";
      break;

    case "secondary":
      containerClass += " secondary-button bg-border";
      variantClass = " bg-background text-foreground";

      break;
  }
  const buttonClass = baseClass + variantClass;

  return (
    <button class={containerClass}>
      <div class={buttonClass}>
        <p class="rounded-lg"></p>
        {props.children}
      </div>
    </button>
  );
};

export const ButtonBurger: Component<propsBurger> = ({ ...props }) => {
  const [isOpen, setIsOpen] = createSignal(false);
  let triggerRef!: HTMLButtonElement;
  let listRef!: HTMLDivElement;
  const handleOutsideClick = (e: MouseEvent) => {
    if (!listRef.contains(e.target as Node)) {
      setIsOpen(false);
      document.removeEventListener("click", handleOutsideClick);
    }
  };
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen());
    props.onClick && props.onClick(e);
    document.addEventListener("click", handleOutsideClick);
  };

  return (
    <div class="relative h-7 w-7">
      <button
        class={`h-7 w-7 rounded-lg p-1.5 transition-colors duration-100 hover:bg-border ${isOpen() ? "bg-border" : "bg-transparent"}`}
        onClick={handleClick}
        {...props}
        ref={triggerRef}
      >
        <BsThreeDotsVertical class="size-full text-foreground" />
      </button>

      <Show when={isOpen()}>
        <div
          class="absolute right-0 z-10 mt-2 w-[200px] transform rounded-lg border border-border bg-background p-1"
          ref={listRef}
        >
          <ButtonBurgerAction icon={<TbShare2 class="size-5" />}>
            Share the project
          </ButtonBurgerAction>
          <ButtonBurgerAction
            icon={<TbArrowBigUp class="size-5 transition-all duration-200" />}
          >
            Upvote
          </ButtonBurgerAction>
          <ButtonBurgerAction icon={<TbArrowBigUp class="size-5 rotate-180" />}>
            Downvote
          </ButtonBurgerAction>
          <ButtonBurgerAction icon={<TbLink class="size-5" />}>
            Copy link
          </ButtonBurgerAction>
        </div>
      </Show>
    </div>
  );
};

interface propsBurgerAction extends JSX.HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

export const ButtonBurgerAction: Component<propsBurgerAction> = ({
  ...props
}) => {
  let className =
    "flex w-full max-w-[300px] items-center justify-between gap-4 rounded-[6px] px-2 py-1 text-sm text-muted hover:bg-border hover:text-foreground transition-none  ";
  if (props.children == "Upvote" || props.children == "Downvote") {
    className += " [&>svg]:hover:fill-current";
  }

  return (
    <button class={className}>
      {props.children}
      {props.icon}
    </button>
  );
};

export default Button;
