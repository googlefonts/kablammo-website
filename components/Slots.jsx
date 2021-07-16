import React, { useState } from "react";
import Pill from "../components/Pill";

const Slots = (props) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = (event) => {
    event.target.classList.add("animate-it");
  };
  const handleMouseLeave = (event) => {
    event.target.classList.remove("animate-it");
  };
  const [activeEmoji, setActiveEmoji] = useState(0);
  const handleClick = () => {
    console.log(props.charset);
    if (activeEmoji+1===props.charset.length){
      setActiveEmoji(0);
    } else { setActiveEmoji(activeEmoji+1); }
  };
  return (
    <Pill
      className={`${hover ? `animate-it` : ""} bg-${props.bgColor} hover:bg-${
        props.bgColorHover
      } h-100% bg-clip-padding overflow-hidden cursor-pointer`}
    >
      <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`text-38 lg:text-24 -mt-10 w-100% text-${props.textColor} uppercase`}
      >
        {props.charset[activeEmoji]}
        
      </span>
    </Pill>
  );
};
export default Slots;
