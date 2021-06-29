import React, { useState, useRef, useEffect } from "react";
import Pill from "../components/Pill";
import Pattern from "../components/Pattern";
const TypeScales = () => {
  const option1El = useRef(null);
  const option2El = useRef(null);
  const option3El = useRef(null);
  const option4El = useRef(null);
  useEffect(() => {
    // console.log("option1El", window.innerWidth * 0.18);
  }, [option1El]);
  return (
    <React.Fragment>
      <Pill className=" bg-yellow h-24 overflow-hidden flex-col">
        <Pattern
          className="grid place-items-center"
          bgImage="/images/bg/yellow-circles.svg"
        >
          <div className="absolute flex justify-between w-100%">
            <div className="pt-10 pl-20 flex flex-col">
              <span className="uppercase font-mono text-1">Move Axis</span>
              <span className="uppercase font-mono text-1 bg-purple rounded-full pt-1 px-4">
                Axis A
              </span>
            </div>
            <div className="pt-10 pr-20 flex flex-col">
              <span className="uppercase font-mono text-1">Font Size</span>
              <span className="hvr-bounce-in uppercase font-mono text-1 bg-purple rounded-full pt-1 px-4">
                {parseInt(window.innerWidth * 0.18)}px
              </span>
            </div>
          </div>
          <span
            ref={option1El}
            className="text-18 w-100% block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word font-axis-1 z-50"
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning={true}
          >
            A Font 4
          </span>
        </Pattern>
      </Pill>
      <Pill className="bg-pink h-16 overflow-hidden">
        <Pattern
          className="grid place-items-center"
          bgImage="/images/bg/pink-pattern.svg"
        >
          <div className="absolute flex justify-between w-100%">
            <div className="pt-10 pl-20 flex flex-col">
              <span className="uppercase font-mono text-1">Move Axis</span>
              <span className="uppercase font-mono text-1 bg-blue rounded-full pt-1 px-4">
                Axis B
              </span>
            </div>
            <div className="pt-10 pr-20 flex flex-col">
              <span className="uppercase font-mono text-1">Font Size</span>
              <span className="uppercase font-mono text-1 bg-blue rounded-full pt-1 px-4">
                {parseInt(window.innerWidth * 0.1)}px
              </span>
            </div>
          </div>
          <span
            ref={option2El}
            className="text-10 w-100% block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word font-axis-2 z-50"
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning={true}
          >
            Huge Headlines
          </span>
        </Pattern>
      </Pill>
      <Pill className="bg-orange h-12 overflow-hidden">
        <Pattern
          className="grid place-items-center"
          bgImage="/images/bg/orange-worms.svg"
        >
          <div className="absolute flex justify-between w-100%">
            <div className="pt-8 pl-20 flex flex-col">
              <span className="uppercase font-mono text-1">Move Axis</span>
              <span className="uppercase font-mono text-1 bg-lime rounded-full pt-1 px-4">
                Axis C
              </span>
            </div>
            <div className="pt-8 pr-20 flex flex-col">
              <span className="uppercase font-mono text-1">Font Size</span>
              <span className="uppercase font-mono text-1 bg-lime rounded-full pt-1 px-4">
                {parseInt(window.innerWidth * 0.06)}px
              </span>
            </div>
          </div>
          <span
            ref={option3El}
            className="text-6 w-100% block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word font-axis-3 z-50"
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning={true}
          >
            Out Of This World Ideas
          </span>
        </Pattern>
      </Pill>
      <Pill className="bg-purple h-10 lg:h-6 overflow-hidden">
        <Pattern
          className="grid place-items-center"
          bgImage="/images/bg/purple-squiggly.svg"
        >
          <div className="absolute flex justify-between w-100%">
            <div className="pt-6 pl-20 flex flex-col">
              <span className="uppercase font-mono text-1">Move Axis</span>
              <span className="uppercase font-mono text-1 bg-orange rounded-full pt-1 px-4">
                Axis D
              </span>
            </div>
            <div className="pt-6 pr-20 flex flex-col">
              <span className="uppercase font-mono text-1">Font Size</span>
              <span className="uppercase font-mono text-1 bg-orange rounded-full pt-1 px-4">
                {parseInt(window.innerWidth * 0.03)}px
              </span>
            </div>
          </div>
          <span
            ref={option4El}
            className="text-3 w-100% block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word font-axis-4 z-50"
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning={true}
          >
            And Feelings Words Just Cannot Describe
          </span>
        </Pattern>
      </Pill>
    </React.Fragment>
  );
};
export default TypeScales;
