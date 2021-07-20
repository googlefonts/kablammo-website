import React, { useState, useEffect } from "react";
const CharacterSetFilter = (props) => {
  // useEffect(() => {
  //   console.log("activeFilters: ");
  // });
    return(
      <button
      data-filter= {props.name}
      onClick={props.onClickProp}
      className={`bg-`+ (props.activeColor) +` hover:bg-`+props.color+` h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase cursor-pointer` }
      >
      {props.label}<style jsx>{`
        button {
          appearance: none;
          outline: none;
        }
      `}</style>

</button>
    )}
export default CharacterSetFilter;
