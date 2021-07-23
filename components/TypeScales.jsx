import React from "react";
import TypeScale from "../components/TypeScale";
const TypeScales = () => {

  return (
    <div>
      <TypeScale pillClassName="bg-yellow h-24 lg:h-24" bgImage="/images/bg/yellow-circles.svg" labelClassName="pt-3 lg:pt-10" labelColorClassName="bg-purple" axisLabel="A" textScale="0.18" textSizeClassName="text-18"  copy="a font 4"/>
      <TypeScale pillClassName="bg-pink h-16 lg:h-16" bgImage="/images/bg/pink-pattern.svg" labelClassName="pt-3 lg:pt-10" labelColorClassName="bg-blue" axisLabel="B" textScale="0.1" textSizeClassName="text-10"  copy="huge headlines" />
      <TypeScale pillClassName="bg-orange h-12 lg:h-12" bgImage="/images/bg/orange-worms.svg" labelClassName="pt-3 lg:pt-10" labelColorClassName="bg-lime" axisLabel="C" textScale="0.06" textSizeClassName="text-6" copy="out of this world ideas"/>
      
      <TypeScale pillClassName="bg-purple h-10 lg:h-6" bgImage="/images/bg/purple-squiggly.svg" labelClassName="pt-3 lg:pt-2" labelColorClassName="bg-orange" axisLabel="D" textScale="0.03" textSizeClassName="text-3" copy="and feelings words just cannot describe"/>
  </div>
  );
};
export default TypeScales;
