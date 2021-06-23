import React, { useState } from "react";
import Frame from "../components/Frame";
import Pill from "../components/Pill";
import ScrollingText from "../components/ScrollingText";

const SlotMachine = (props) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(!hover);
  };
  const [slot1Alt, setSlot1Alt] = useState(true);
  const [slot2Alt, setSlot2Alt] = useState(true);
  const [slot3Alt, setSlot3Alt] = useState(true);
  const [slot4Alt, setSlot4Alt] = useState(true);
  const altChars = {
    slot1: ["👀", "?"],
    slot2: ["👁", ""],
    slot3: ["", "🪐"],
    slot4: ["👄", "🙃"],
  }
  const handleClickSlot1 = () => {
    // setSlot1Alt(!slot1Alt);
    altChars.slot1[0]="?";
  }
  const handleClickSlot2 = () => {
    setSlot2Alt(!slot2Alt);
  }
  const handleClickSlot3 = () => {
    setSlot3Alt(!slot3Alt);
  }
  const handleClickSlot4 = () => {
    setSlot4Alt(!slot4Alt);
  }
  return (
    <Frame
      className={`relative bg-black border-2 border-solid border-black bg-clip-padding overflow-hidden h-100vh flex justify-between flex-col`}
    >
      <Pill className="bg-pink hover:bg-orange h-6 bg-clip-padding overflow-hidden">
        <ScrollingText
          className=""
          href={`#`}
          blank
          specialRight
          hideMobile
          borderTop
          large
        >
          <span className="text-4 text-lime uppercase">
            &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
          </span>
        </ScrollingText>
      </Pill>
      <Frame
        className={`relative bg-black border-2 border-solid border-black bg-clip-padding overflow-hidden h-100% grid grid-cols-2 grid-rows-2`}
      >
        <Pill
          onMouseEnter={handleMouseEnter}
          onClick = {handleClickSlot1}
          className={`${
            hover && `animate-it`
          } bg-green hover:bg-pink h-100% bg-clip-padding overflow-hidden cursor-pointer`}
        >
          <span className="text-24 -mt-10 text-orange uppercase">{slot1Alt ? altChars.slot1[0] : altChars.slot1[1]}</span>
        </Pill>
        <Pill
          onMouseEnter={handleMouseEnter}
          onClick = {handleClickSlot2}
          className={`${
            hover && `animate-it`
          } bg-lime hover:bg-pink h-100% bg-clip-padding overflow-hidden cursor-pointer`}
        >
          <span className="text-24 -mt-10 text-blue  uppercase">{slot2Alt ? altChars.slot2[0] : altChars.slot2[1]}</span>
        </Pill>
        <Pill
          onMouseEnter={handleMouseEnter}
          onClick = {handleClickSlot3}
          className={`${
            hover && `animate-it`
          } bg-yellow hover:bg-gray h-100% bg-clip-padding overflow-hidden cursor-pointer`}
        >
          <span className="text-24 -mt-10 text-purple uppercase">{slot3Alt ? altChars.slot3[0] : altChars.slot3[1]}</span>
        </Pill>
        <Pill
          onMouseEnter={handleMouseEnter}
          onClick = {handleClickSlot4}
          className={`${
            hover && `animate-it`
          } bg-blue hover:bg-orange h-100% bg-clip-padding overflow-hidden cursor-pointer`}
        >
          <span className="text-24 -mt-10 text-yellow uppercase">{slot4Alt ? altChars.slot4[0] : altChars.slot4[1]}</span>
        </Pill>
      </Frame>
      <Pill className="bg-purple hover:bg-orange h-6 bg-clip-padding overflow-hidden">
        <ScrollingText
          className=""
          href={`#`}
          blank
          specialRight
          hideMobile
          borderTop
          large
          right
        >
          <span className="text-4 text-green uppercase">
            &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
          </span>
        </ScrollingText>
      </Pill>
      {/* <Pill className="right-vertical absolute right-6 bottom-0 bg-blue hover:bg-yellow h-6 bg-clip-padding overflow-hidden">
                <ScrollingText
                  className=""
                  href={`#`}
                  blank
                  specialRight
                  hideMobile
                  borderTop
                  large
                  right
                >
                  <span className="text-4 text-yellow uppercase">
                    &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
                  </span>
                </ScrollingText>
              </Pill>
              <Pill className="left-vertical absolute left-0 bg-orange hover:bg-purple h-6 bg-clip-padding overflow-hidden">
                <ScrollingText
                  className=""
                  href={`#`}
                  blank
                  specialRight
                  hideMobile
                  borderTop
                  large
                  right
                >
                  <span className="text-4 text-purple uppercase">
                    &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
                  </span>
                </ScrollingText>
              </Pill> */}
    </Frame>
  );
};
export default SlotMachine;
