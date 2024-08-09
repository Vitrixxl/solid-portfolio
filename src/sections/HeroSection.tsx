import {
  Component,
  createEffect,
  createSignal,
  JSXElement,
  onMount,
  Show,
} from "solid-js";
import {
  IconArrowRight,
  IconArrowsMoveVertical,
  IconTransfer,
} from "@tabler/icons-solidjs";
import { codeSamples } from "../libs/data";
import HeroIcon from "../component/HeroIcon";
import BentoBox from "../component/BentoBox";
import Button, { ButtonBurger } from "../component/Buttons";
import Tooltip from "../component/Tooltip";
import ProjectBentoBox from "../component/ProjectBentoBox";
const HeroSection: Component = () => {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <section class="md:px-6; container mx-auto flex min-h-screen max-w-screen-2xl flex-col px-4">
      <div class="relative mx-auto mb-16 mt-28 w-full flex-1 justify-center">
        <div
          class="pointer-events-none fixed left-0 top-0 z-[29] h-full w-full select-none backdrop-blur-[4px] transition-opacity duration-300"
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
        <div class="mb-10">
          <h1 class="my-4 text-center text-4xl font-bold tracking-tight">
            Complex or simple ? <br /> Let's build{" "}
            <span class="text-primary">your</span> web app{" "}
            <span class="text-primary">together</span>
          </h1>
          <p class="text-center text-sm text-muted">
            Absolutly passionate by my work, I'm always looking for{" "}
            <span class="font-semibold text-accent">
              new challenges and new projects.
            </span>{" "}
            <br /> Leading by a strong will to{" "}
            <span class="font-semibold text-accent">learn and improve</span> my
            skills <br />
            i'm able to deliver{" "}
            <span class="font-semibold text-accent">quality</span> and{" "}
            <span class="font-semibold text-accent">scalable</span> work within
            the shortest time possible
          </p>
        </div>
        <div class="mt-2 flex items-center justify-center gap-10">
          <Button variant="primary">Contact me</Button>
          <Button variant="secondary">My projects</Button>
        </div>
        {/* <button class="big-button w-fit ">
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
        </button> */}
      </div>
      <div class="relative my-20 flex h-screen w-full flex-1 items-center justify-center">
        <div class="relative bg-border p-[1px]"></div>
        {/* <div class="relative  rounded-lg  max-w-[450px] z-10 bg-background heroBox transition-colors duration-300 p-4">
   

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
                <h2 class="text-wrap text-xl tracking-tight font-bold uppercase  text-foreground transition-colors duration-300">
        
                    Cascales
                 
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
          </div>*/}
      </div>
      <div class="mt-20 flex-1">
        <div class="h-screen w-full">
          <div
            class="grid h-[700px] w-full grid-cols-10 grid-rows-6 gap-2"
            onMouseEnter={() => {
              (
                document.querySelector(".mouse-shadow") as HTMLDivElement
              ).style.scale = "0";
            }}
            onMouseLeave={() => {
              (
                document.querySelector(".mouse-shadow") as HTMLDivElement
              ).style.scale = "1";
            }}
          >
            <BentoBox cols={4} rows={1}>
              <Tooltip>#javascript</Tooltip>
              <ButtonBurger />
            </BentoBox>
            <ProjectBentoBox
              cols={3}
              rows={3}
              title="Map my mind"
              tags={["react", "zustand"]}
              link="/map-my-mind"
            />
            <BentoBox cols={3} rows={4}></BentoBox>
            <BentoBox cols={2} rows={2}></BentoBox>
            <BentoBox cols={2} rows={2}></BentoBox>
            <BentoBox cols={3} rows={3}></BentoBox>
            <BentoBox cols={4} rows={2}></BentoBox>
            <BentoBox cols={3} rows={2}></BentoBox>
            <BentoBox cols={4} rows={1}></BentoBox>
            {/* <div class="col-span-4 row-span-1 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div>
            <div class="col-span-2 row-span-2 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div>
            <div class="col-span-4 row-span-4 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div>
            <div class="col-span-3 row-span-2 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div>
            <div class="col-span-2 row-span-3 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div>
            <div class="col-span-3 row-span-5 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div>
            <div class="col-span-6 row-span-4 rounded-xl border-border hover:border-transparent border transition-all duration-300 bg-background bento-box"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
