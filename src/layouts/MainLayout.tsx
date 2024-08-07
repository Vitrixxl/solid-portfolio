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

    const bentoBoxes = document.querySelectorAll(".bento-box")
    const heroIcons = document.querySelectorAll(".hero-icon")
    const customButtons = document.querySelectorAll(".custom-button")
    const handleMouseMove = (e: MouseEvent) => {
      bentoBoxes.forEach(bentoBox => {
        const { left, top, width, height } = bentoBox.getBoundingClientRect()

        const relativeX = ((e.clientX - left) / width) * 100;
        const relativeY = ((e.clientY - top) / height) * 100;

        (bentoBox as HTMLDivElement).style.setProperty('--mouse-x', `${relativeX}%`);
        (bentoBox as HTMLDivElement).style.setProperty('--mouse-y', `${relativeY}%`);
      });
      heroIcons.forEach(heroIcon => {
        const { left, top, width, height } = heroIcon.getBoundingClientRect()

        const relativeX = ((e.clientX - left) / width) * 100;
        const relativeY = ((e.clientY - top) / height) * 100;

        (heroIcon as HTMLDivElement).style.setProperty('--mouse-x', `${relativeX}%`);
        (heroIcon as HTMLDivElement).style.setProperty('--mouse-y', `${relativeY}%`);
      });
      customButtons.forEach(customButton => {
        const { left, top, width, height } = customButton.getBoundingClientRect()

        const relativeX = ((e.clientX - left) / width) * 100;
        const relativeY = ((e.clientY - top) / height) * 100;

        (customButton as HTMLButtonElement).style.setProperty('--mouse-x', `${relativeX}%`);
        (customButton as HTMLButtonElement).style.setProperty('--mouse-y', `${relativeY}%`);
      });
    }
    document.addEventListener("mousemove", handleMouseMove)

  });

  return (
    <>
      <Navbar />
      <div
        class="size-[600px] blur-[100px] contrast-150 opacity-[0] pointer-events-none bg-primary  rounded-full   fixed mouse-shadow"
        ref={mouseShadowRef}
      />
      {props.children}
    </>
  );
};
export default MainLayout;
