import {
  createSignal,
  Component,
  onMount,
  createEffect,
  createMemo,
} from "solid-js";
import ToggleTheme from "./ToggleTheme";
import { useLocation, A } from "@solidjs/router";

const Navbar: Component = () => {
  const location = useLocation();

  const pathname = createMemo(() => location.pathname);

  const handleMouseEnter = (e: MouseEvent) => {
    const selector = document.querySelector(".selector") as HTMLElement;
    const navList = document.querySelector(".navList") as HTMLElement;
    const link = e.target as HTMLElement;
    const navListRect = navList.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    selector.style.left = `${linkRect.left - navListRect.left + 4}px`;
    selector.style.width = `${linkRect.width - 8}px`;
  };
  const handleMouseLeave = () => {
    const selector = document.querySelector(".selector") as HTMLElement;
    const activeLink = document.querySelector(".activeLink") as HTMLElement;
    const navList = document.querySelector(".navList") as HTMLElement;
    const navListRect = navList.getBoundingClientRect();
    const activeLinkRect = activeLink.getBoundingClientRect();
    selector.style.left = `${activeLinkRect.left - navListRect.left + 4}px`;
    selector.style.width = `${activeLinkRect.width - 8}px`;
  };

  onMount(() => {
    const links = document.querySelectorAll(".navLink");
    links.forEach((link) => {
      //@ts-expect-error - Don't know how to type this shit
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    setTimeout(() => {
      handleMouseLeave();
    }, 500);
  });

  const links = [
    { name: "home", href: "/" },
    { name: "projects", href: "/about" },
    { name: "stack", href: "/#stack" },
    { name: "pricing", href: "#pricing" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header class="sticky top-0 z-[99999999] flex w-full items-center justify-center border-b border-border bg-faded-background px-6 py-1 backdrop-blur-sm md:px-4  transition-colors duration-300">
      <nav class=" flex w-full items-center justify-between">
        <div>
          <a
            href="/"
            class=" logo relative text-2xl font-bold text-primary tracking-tighter"
          >
            VSX
          </a>
        </div>
        <div class="flex items-center gap-2">
          <ul class="navList relative flex text-lg text-muted items-center">
            <div class="absolute h-[1px] bg-primary rounded-full -bottom-[6px]  selector transition-all duration-300" />
            {links.map((link) => (
              <li class="h-min flex items-center">
                <A
                  href={link.href}
                  class={`navLink px-1 hover:text-foreground transition-all text-sm duration-300 leading-[1] ${
                    pathname() === link.href
                      ? "text-foreground activeLink"
                      : "text-muted"
                  }`}
                >
                  {link.name}
                </A>
              </li>
            ))}
            <div class="selector absolute -bottom-0 h-0.5 bg-primary" />
          </ul>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
