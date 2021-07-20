import React, { useState, useRef, useEffect } from "react";
import Pill from "../components/Pill";
import TypeScale from "../components/TypeScale";
import Pattern from "../components/Pattern";
const TypeScales = () => {

  return (
    <React.Fragment>
      <TypeScale bgColor="yellow" mobileHeight="24" desktopHeight="24" bgImage="/images/bg/yellow-circles.svg" labelColor="purple" axisLabel="A" textScale="0.18" textSize="18"  copy="a font 4" mobileLabelPt="3" desktopLabelPt="10"/>
      <TypeScale bgColor="pink" mobileHeight="16" desktopHeight="16" bgImage="/images/bg/pink-pattern.svg" labelColor="blue" axisLabel="B" textScale="0.1" textSize="10"  copy="huge headlines" mobileLabelPt="3" desktopLabelPt="10"/>
      <TypeScale bgColor="orange" mobileHeight="12" desktopHeight="12" bgImage="/images/bg/orange-worms.svg" labelColor="lime" axisLabel="C" textScale="0.06" textSize="6" copy="out of this world ideas" mobileLabelPt="3" desktopLabelPt="10"/>
      <TypeScale bgColor="purple" mobileHeight="10" desktopHeight="6" bgImage="/images/bg/purple-squiggly.svg" labelColor="orange" axisLabel="D" textScale="0.03" textSize="3" copy="and feelings words just cannot describe" mobileLabelPt="3" desktopLabelPt="2"/>
  </React.Fragment>
  );
};
export default TypeScales;
