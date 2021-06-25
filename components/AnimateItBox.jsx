import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
} from "react";

import useIntersect from "../util/useIntersect";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const AnimateItBox = (props) => {
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });

  return (
    <React.Fragment {...props} ref={ref} ratio={entry.intersectionRatio}>
      {props.children}
    </React.Fragment>
  );
};

export default AnimateItBox;
