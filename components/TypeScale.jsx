import React, { useState, useRef, useEffect } from "react";
import Pill from "../components/Pill";
import Pattern from "../components/Pattern";
const isBrowser = typeof window !== "undefined";

const TypeScale = props => {
    const [bodyCopy, setBodyCopy] = useState(null);
    const [innerWidth, setInnerWidth] = useState(null);
    isBrowser && window.addEventListener("resize", ()=>{
      if (window.innerWidth < 1024){
        setBodyCopy(props.copyMobile);
        setInnerWidth(window.innerWidth)
      } else { setBodyCopy(props.copyDesktop); }
    })
    useEffect(()=>{
      if (window.innerWidth < 1024){
        setBodyCopy(props.copyMobile);
        setInnerWidth(window.innerWidth)
      } else { setBodyCopy(props.copyDesktop); }
    })
    return(
        <Pill className={`${props.pillClassName ? props.pillClassName : ``} overflow-hidden`}>
        <Pattern
          className="grid place-items-center hover:bg-none"
          bgImage={props.bgImage}
        >
          <div className="absolute flex justify-between w-100%">
            <div className={`${props.labelClassName ? props.labelClassName : ``} pl-4 md:pl-10 lg:pl-14 xl:pl-20 flex flex-col`}>
              <span className="uppercase font-mono text-10pt lg:text-14pt">Style</span>
              <span className={`${props.labelColorClassName ? props.labelColorClassName : `bg-gray`} uppercase font-mono text-10pt lg:text-14pt rounded-full pt-1 px-4`}>
                {props.axisLabel}
              </span>
            </div>
            <div className={`${props.labelClassName ? props.labelClassName : ``} pr-4 md:pr-10 lg:pr-14 xl:pr-20 flex flex-col`}>
              <span className="uppercase font-mono text-10pt lg:text-14pt">Font Size</span>
              <span className={`${props.labelColorClassName ? props.labelColorClassName : `bg-gray`} uppercase font-mono text-10pt lg:text-14pt rounded-full pt-1 px-4`}>
                {parseInt(innerWidth * props.textScale)}px
              </span>
            </div>
          </div>
          <span
            ref={props.ref}
            className={`${props.textClassName ? props.textClassName : ``} cursor-text w-100% block text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-centerbreak-word z-50`}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning={true}
          >
            { bodyCopy }
          </span>
        </Pattern>
      </Pill>
    );
};
export default TypeScale;