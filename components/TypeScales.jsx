import React from "react";
import TypeScale from "../components/TypeScale";
const TypeScales = () => {

  return (
    <div>
      <TypeScale pillClassName="bg-yellow h-60 lg:h-24" bgImage="/images/bg/yellow-circles.svg" labelClassName="pt-3 lg:pt-10" labelColorClassName="bg-purple" axisLabel="A" textScale="0.18" textSizeClassName="text-55 lg:text-18"  copyDesktop="a font 4" copyMobile="a"/>
      <TypeScale pillClassName="bg-pink h-40 lg:h-16" bgImage="/images/bg/pink-pattern.svg" labelClassName="pt-3 lg:pt-10" labelColorClassName="bg-blue" axisLabel="B" textScale="0.1" textSizeClassName="text-30 lg:text-10"  copyDesktop="huge headlines" copyMobile="bop" />
      <TypeScale pillClassName="bg-orange h-30 lg:h-12" bgImage="/images/bg/orange-worms.svg" labelClassName="pt-3 lg:pt-10" labelColorClassName="bg-lime" axisLabel="C" textScale="0.06" textSizeClassName="text-22 lg:text-6" copyDesktop="out of this world ideas" copyMobile="and a"/>
      
      <TypeScale pillClassName="bg-purple h-24 lg:h-6" bgImage="/images/bg/purple-squiggly.svg" labelClassName="pt-3 lg:pt-2" labelColorClassName="bg-orange" axisLabel="D" textScale="0.03" textSizeClassName="text-11 lg:text-3" copyDesktop="and feelings words just cannot describe" copyMobile="bloop 👻💎 "/>
  </div>
  );
};
export default TypeScales;
