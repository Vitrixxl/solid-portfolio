import { Component, createEffect, createSignal } from "solid-js";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-solidjs";

const ToggleTheme: Component = () => {
  const getTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    } else {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  };
  const [dark, setDark] = createSignal<Boolean>(getTheme());
  createEffect(() => {
    document.documentElement.className = dark() ? "dark" : "light";
  });
  const handleToggle = () => {
    setDark(!dark());
    localStorage.setItem("theme", dark() ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      class=" relative flex h-8 w-16 overflow-hidden rounded-full border border-border bg-background p-1 transition-all duration-300"
    >
      <div
        class={`relative aspect-square h-full rounded-full bg-primary text-foreground transition-all duration-100 ${
          dark() ? "ml-8" : "ml-0"
        }`}
      >
        <IconMoonFilled class="absolute right-full top-1/2 mr-2 -translate-y-1/2 transform" />
        <IconSunFilled class="absolute left-full top-1/2 ml-2 -translate-y-1/2 transform" />
      </div>
    </button>
  );
};

export default ToggleTheme;
