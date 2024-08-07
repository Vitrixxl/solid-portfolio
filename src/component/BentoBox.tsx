import { children, Component, JSX, JSXElement } from "solid-js";

interface props extends  JSX.HTMLAttributes<HTMLDivElement> {
    rows: number,
    cols:number,
   
}

const BentoBox: Component<props> = ({rows,cols,children,...props}) => {
    return (
        <div class=" p-[1px] relative  bg-border bento-box  rounded-xl overflow-hidden flex"
        style={{
            "grid-column":`${cols} span / ${cols} span `,
            "grid-row":`${rows} span / ${rows} span`
        }}
        
        >

            <div class=" bg-background w-full h-full relative   z-10 rounded-xl " {...props}>
               {children}
            </div>
        </div>
    )


}

export default BentoBox