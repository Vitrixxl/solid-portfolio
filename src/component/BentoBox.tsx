import { children, Component } from "solid-js";

interface props extends HTMLElement {
    rows: number,
    cols:number,

}

const BentoBox: Component<props> = (props) => {
    return (
        <div class=" p-[1px] relative  bg-border bento-box  rounded-xl overflow-hidden flex"
        style={{
            "grid-column":`${props.cols} span / ${props.cols} span `,
            "grid-row":`${props.rows} span / ${props.rows} span`
        }}
        >

            <div class=" bg-background w-full h-full relative   z-10 rounded-xl ">
                {props.children as any}
            </div>
        </div>
    )


}

export default BentoBox