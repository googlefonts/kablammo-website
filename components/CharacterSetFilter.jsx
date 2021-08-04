import React from "react";
const CharacterSetFilter = (props) => {
  // useEffect(() => {
  //   console.log("activeFilters: ");
  // });
    return(
      <button
      data-filter= {props.name}
      onClick={props.onClickProp}
      className={`charsetfilters `+props.activeColor+` `+props.color+` h-12 lg:h-6 text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase cursor-pointer` }
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
