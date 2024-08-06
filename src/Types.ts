import { Component, JSX, JSXElement } from "solid-js";

export type HeroIconType = {
  language: string;
  Icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
  code: string;
  name: string;
  link: string;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  rotate: number;
};
