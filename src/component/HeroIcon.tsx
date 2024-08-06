import hljs from "highlight.js/lib/core";
import "highlight.js/styles/default.css";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import xml from "highlight.js/lib/languages/xml";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("typescript", typescript);
import { Component, createSignal, onMount } from "solid-js";
import { HeroIconType } from "../Types";
interface props extends HeroIconType {
  index: number;
  setHovered: () => void;
}
const HeroIcon: Component<{
  props: HeroIconType;
  index: number;
  setHovered: () => void;
}> = ({ props, index, setHovered }) => {
  const { position, language, name, code, link, rotate, Icon } = props;
  const { bottom, left, right, top } = position;
  const [displayedCode, setDisplayedCode] = createSignal("");
  const [isTyping, setIsTyping] = createSignal(false);

  const handleHover = async (e: MouseEvent) => {
    const currentEl = e.target as HTMLDivElement;
    currentEl.style.zIndex = "9999";
    document.querySelectorAll(".codeIcon").forEach((icon) => {
      if (icon === currentEl) return;
      (icon as HTMLDivElement).style.zIndex = "28";
    });
    setIsTyping(true);
    setDisplayedCode("");
    setHovered();
    for (let i = 0; i < code.length; i++) {
      if (!isTyping()) break;
      await new Promise((resolve) => setTimeout(resolve, 1));
      setDisplayedCode((prev) => prev + code[i]);
    }
  };
  const handleMouseLeave = () => {
    setHovered();
    setIsTyping(false);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={{
        "animation-delay": (0.2 * index).toString() + "s",
        top: top ? top + "px" : "",
        bottom: bottom ? bottom + "px" : "",
        left: left ? left + "px" : "",
        right: right ? right + "px" : "",
        rotate: rotate + "deg",
      }}
      class="codeIcon  shadow-lg flex-col hover:border-primary   absolute flex max-w-[58px] overflow-hidden border-border bg-background rounded-xl p-3 border-2  max-h-[58px] z-[28] transition-all duration-300 hover:max-w-[800px] hover:max-h-[600px] hover:!rotate-0"
    >
      <div class="w-max flex gap-5">
        <Icon class="size-[30px] flex-1" />
        <div class="min-w-max  flex justify-between items-center">
          <h3 class="text-lg font-bold text-foreground">{name}</h3>
          <a href={link}></a>
        </div>
      </div>
      <pre class=" overflow-hidden pointer-events-none   ">
        <code
          class={`language-${language} text-sm  pointer-events-none `}
          innerHTML={hljs.highlight(displayedCode(), { language }).value}
        >
          {displayedCode()}
        </code>
      </pre>
    </div>
  );
};

export default HeroIcon;
