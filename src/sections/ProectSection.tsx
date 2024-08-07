import { Component } from "solid-js";

const ProjectSection: Component = () => {
  return (
    <section class="h-dvh bg-primary relative mt-7 ">
      <div class="absolute left-0 -translate-y-1/2 transform rounded-[100%] h-14 w-full bg-primary -z-10" />
      <div class="container max-w-screen-2xl mx-auto px-4 md:px-6 z-10">
        <div class="w-full h-20 bg-background rounded-lg "></div>
      </div>
    </section>
  );
};

export default ProjectSection;
