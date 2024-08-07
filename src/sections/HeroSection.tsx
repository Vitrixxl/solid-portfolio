import { Component, createEffect, createSignal, Show } from "solid-js";
import {
  IconArrowRight,
  IconArrowsMoveVertical,
  IconTransfer,
} from "@tabler/icons-solidjs";
import { codeSamples } from "../libs/data";
import HeroIcon from "../component/HeroIcon";
const HeroSection: Component = () => {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <section class="min-h-screen flex   container mx-auto max-w-screen-2xl px-4  md:px-6; ">
      <div class="flex-1 space-y-8  sticky top-0 flex h-screen  justify-center flex-col">
        <h1 class="text-[50px] font-semibold text-foreground transition-colors duration-300 uppercase leading-[1.2]">
          <span class="text-primary font-black italic ">complex</span> or{" "}
          <span class="text-primary font-black italic">simple</span> <br />{" "}
          let's create your <br /> web app{" "}
          <span class="text-primary font-black italic">together</span>
        </h1>
        <button class="big-button w-fit ">
          <span class="z-10 text-xl font-bold italic block">HIRE ME</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            class="z-10 text-primary transition-all duration-300 "
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m9 19l9.18-9.006c.748-.734 1.122-1.1 1.444-.967c.323.134.329.659.34 1.708l.036 3.31M15 5l-9.18 9.006c-.748.734-1.122 1.1-1.444.967c-.323-.134-.329-.659-.34-1.708L4 9.955"
              color="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-1 ">
        <div class="flex-1 flex items-center justify-center h-screen w-full relative   ">
          <div class="relative border-primary border-4 rounded-2xl  max-w-[450px] z-10 bg-background heroBox transition-colors duration-300 p-4">
            <div
              class="fixed z-[29] select-none pointer-events-none w-full h-full top-0 left-0  backdrop-blur-[4px] transition-opacity duration-300"
              style={{
                opacity: isHovered() ? "1" : "0",
              }}
            />

            {codeSamples.map((code, i) => (
              <HeroIcon
                props={code}
                index={i}
                setHovered={() => setIsHovered(!isHovered())}
              />
            ))}
            <div class="mb-2 flex w-full items-center justify-between text-muted ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                class="   translate-x-0 transform fill-primary stroke-primary"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <div class="flex-1 px-2">
                <h2 class="text-wrap text-lg font-bold uppercase italic text-foreground transition-colors duration-300">
                  <span class="text-wrap text-lg font-extrabold text-primary">
                    Cascales
                  </span>{" "}
                  Vitrice
                </h2>
              </div>

              <button class="flex aspect-square items-center justify-center p-1 rounded-lg bg-transparent transition-all duration-100 hover:bg-primary hover:text-foreground hover:shadow-[0_0_7px_0] hover:shadow-primary">
                <IconArrowsMoveVertical size={25} class="rotate-45" />
              </button>
            </div>
            <div class=" text-base text-muted">
              <p class="relative z-10">
                <span class="z-10 block">
                  Absolutly passionate by my work, I'm always looking for new
                  challenges and new projects, Leading by a strong will to learn
                  and improve my skills to be able to deliver the best quality of
                  work wihin the shortest time possible.
                </span>
              </p>
              <a
                href="/"
                class="mt-2 flex items-center gap-2 font-medium text-primary"
              >
                Improve your buisness with me. <IconArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
        <div class="h-screen w-full">
          <div class="grid grid-cols-9 gap-2 grid-rows-6 h-[500px] w-full">
            <div class="col-span-2 row-span-1 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-3 row-span-2 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-4 row-span-1 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-2 row-span-1 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-4 row-span-4 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-3 row-span-2 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-2 row-span-3 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-3 row-span-5 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
            <div class="col-span-6 row-span-4 rounded-xl border-border hover:border-primary border transition-all duration-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
