import { Component, JSX } from "solid-js";

interface props extends JSX.HTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary",


}

const Button: Component<props> = ({ variant, ...props }) => {
    let containerClass= "custom-button p-[1px] relative  rounded-lg focus-visible:outline-4  focus-visible:outline-offset-1 focus-visible:outline-primary  ring-0 transition-all duration-100 outline-0 "
    let baseClass = " px-4 rounded-lg w-full relative z-[2] px-4 py-2  font-medium "
    let variantClass: string
    switch (variant) {
        case "primary":
            containerClass +=" primary-button bg-primary-accent"
            variantClass = " bg-primary text-foreground "
            break;

        case "secondary":
            containerClass+=" secondary-button bg-border"
            variantClass = " bg-background text-foreground"
           
            break;
    }
    const buttonClass = baseClass + variantClass

    return (

        <button class={containerClass}>
            <div class={buttonClass}>
                {props.children}
            </div>
        </button>


    )
}

export default Button