import { Component } from "solid-js";
import BentoBox from "./BentoBox";
import { ButtonBurger } from "./Buttons";
import mapmind from "../assets/mapmind.png";
import { TbExternalLink, TbLink } from "solid-icons/tb";
import Tooltip from "./Tooltip";
import VoteButtons from "./Posts/Vote";
interface props {
  rows: number;
  cols: number;
  title: string;
  tags: string[];
  link?: string;
  description?: string;
}
const ProjectBentoBox: Component<props> = ({
  cols,
  rows,
  title,
  tags,
  link,
  description,
}) => {
  return (
    <BentoBox cols={cols} rows={rows}>
      <article class="flex h-full w-full flex-col gap-4 p-2 [&_a]:hover:text-foreground">
        <div class="flex-shrink-0">
          <header class="flex w-full items-start justify-between gap-2">
            <a
              href={link}
              class="flex flex-1 items-center text-wrap text-xl font-semibold tracking-tight text-accent transition-colors duration-300"
            >
              {title}
              <TbExternalLink class="ml-2 size-4 text-muted" />
            </a>
            <ButtonBurger />
          </header>
          <div class="flex gap-1">
            {tags.map((tag) => (
              <Tooltip>#{tag}</Tooltip>
            ))}
          </div>
        </div>
        <main class="relative flex flex-1 overflow-hidden">
          <a
            href="https://map-my-mind.vercel.app"
            class="overflow-hidden rounded-lg"
          >
            <img src={mapmind} class="absolute bottom-0 rounded-lg" alt="" />
          </a>
        </main>
        <footer class="flex h-7 w-full flex-shrink-0 items-center justify-between">
          <VoteButtons upvotes={10} downvotes={10} />
          <button class="size-7 rounded-lg border border-border hover:bg-border">
            <TbLink class="mx-auto size-5" />
          </button>
        </footer>
      </article>
    </BentoBox>
  );
};

export default ProjectBentoBox;
