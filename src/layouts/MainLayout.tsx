import { onMount } from "solid-js";
import Navbar from "../component/Navbar";

const MainLayout = (props: any) => {
  let mouseShadowRef!: HTMLDivElement;
  onMount(() => {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseShadowRef.style.left = x - mouseShadowRef.offsetWidth / 2 + "px";
      mouseShadowRef.style.top = y - mouseShadowRef.offsetHeight / 2 + "px";
    });
  });

  return (
    <>
      <Navbar />
      <div
        class="size-[600px] blur-[100px] contrast-150 opacity-[0.07] pointer-events-none bg-primary  rounded-full   fixed mouse-shadow"
        ref={mouseShadowRef}
      />
      {props.children}
    </>
  );
};
export default MainLayout;
