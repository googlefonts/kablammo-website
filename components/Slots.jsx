import React, { useState } from "react";
import Pill from "../components/Pill";

const Slots = (props) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(!hover);
    console.log(hover);
  };
  const [Alt, setAlt] = useState(false);
  const handleClick = () => {
    console.log("clicked!");
    console.log("alt b4: " + Alt);
    setAlt(!Alt);
    console.log("alt after: " + Alt);
  };
  const activeEmoji = Alt ? props.alt : props.content;
  return (
    <Pill
      // onMouseEnter={handleMouseEnter}
      className={`${hover ? `animate-it` : ""} bg-${props.bgColor} hover:bg-${
        props.bgColorHover
      } h-100% bg-clip-padding overflow-hidden cursor-pointer`}
    >
      <span
        onClick={handleClick}
        className={`text-50 lg:text-24 -mt-10 w-100% text-${props.textColor} uppercase`}
      >
        {activeEmoji}
      </span>
    </Pill>
  );
};
export default Slots;
