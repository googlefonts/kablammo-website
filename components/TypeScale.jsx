import React, { useState, useRef, useEffect } from "react";
import Pill from "../components/Pill";
import Pattern from "../components/Pattern";

const TypeScale = props => {
    const [bgImage, setBgImage] = useState(props.bgImage);
    const [bgColor, setBgColor] = useState(props.bgColor);
    const handleMouseEnter = () => {
        setBgImage("none");
    }
    const handleMouseLeave = () => {
        setBgImage(props.bgImage);
    }
    return(
        <Pill className={` bg-`+bgColor+` h-`+props.mobileHeight+` lg:h-`+props.desktopHeight+` overflow-hidden hover:bg-gray `}>
        <Pattern
          className="grid place-items-center hover:bg-none "
          bgImage={bgImage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute flex justify-between w-100%">
            <div className={`pt-`+props.mobileLabelPt+` lg:pt-`+props.desktopLabelPt+` pl-4 md:pl-10 lg:pl-14 xl:pl-20 flex flex-col`}>
              <span className="uppercase font-mono text-10pt lg:text-14pt">Style</span>
              <span className={`uppercase font-mono text-10pt lg:text-14pt bg-`+props.labelColor+` rounded-full pt-1 px-4`}>
                {props.axisLabel}
              </span>
            </div>
            <div className={`pt-`+props.mobileLabelPt+` lg:pt-`+props.desktopLabelPt+` pr-4 md:pr-10 lg:pr-14 xl:pr-20 flex flex-col`}>
              <span className="uppercase font-mono text-10pt lg:text-14pt">Font Size</span>
              <span className={`hvr-bounce-in uppercase font-mono text-10pt lg:text-14pt bg-`+props.labelColor+` rounded-full pt-1 px-4`}>
                {parseInt(window.innerWidth * props.textScale)}px
              </span>
            </div>
          </div>
          <span
            ref={props.ref}
            className={`cursor-text text-`+props.textSize+` w-100% block text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word font-axis-1 z-50`}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning={true}
          >
            {props.copy}
          </span>
        </Pattern>
      </Pill>
    );
};
export default TypeScale;