import React, { useState } from "react";
import Frame from "../components/Frame";
import Pill from "../components/Pill";
import ScrollingText from "../components/ScrollingText";
import Slots from "../components/Slots";

const SlotMachine = (props) => {
  const altChars = {
    slot1: ["👀", "☀", "?", "☼"],
    slot2: ["👁", "", "♡", "💩"],
    slot3: ["", "🪐", "👁", "!"],
    slot4: ["👄", "", "🙃", "☮"],
  };
  return (
    <Frame
      className={`relative bg-black bg-clip-padding overflow-hidden h-75vh lg:h-100vh flex justify-between flex-col`}
    >
                  {/* SMALL SCROLLING TEXT 1 */}
        <Pill className="hvr-wobble-top hvr-shutter-out-horizontal bg-lime hover:bg-green h-10 lg:h-5 bg-clip-padding overflow-hidden">
              <ScrollingText
                className="cursor-pointer"
                blank
                specialRight
                hideMobile
                large
                right
              >
                <span className="animate-it-fast text-6 leading-none inline-block -mt-5 text-blue uppercase">
                  &#xE006;&#xE006;&#xE006;&#xE006;&#xE006;&#xE006;&#xE006;&#xE006;
                </span>
              </ScrollingText>
            </Pill>
      <Frame
        className={`relative bg-black bg-clip-padding overflow-hidden h-100% grid grid-cols-2 grid-rows-2`}
      >
        <Slots
          charset={altChars.slot1}
          bgColor="green"
          bgColorHover="pink"
          textColor="orange"
        />
        <Slots
          charset={altChars.slot2}
          bgColor="lime"
          bgColorHover="pink"
          textColor="blue"
        />
        <Slots
          charset={altChars.slot3}
          bgColor="yellow"
          bgColorHover="gray"
          textColor="purple"
        />
        <Slots
          charset={altChars.slot4}
          bgColor="blue"
          bgColorHover="orange"
          textColor="yellow"
        />
      </Frame>
      <Pill className="bg-purple hover:bg-orange h-10 lg:h-5 bg-clip-padding overflow-hidden">
        <ScrollingText
          className=""
          href={`#`}
          blank
          specialRight
          hideMobile
          large
          right
        >
          <span className="text-4 text-green uppercase">
            &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
          </span>
        </ScrollingText>
      </Pill>
    </Frame>
  );
};
export default SlotMachine;
