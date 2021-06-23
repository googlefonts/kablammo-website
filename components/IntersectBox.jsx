import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
} from "react";

import useIntersect from "../util/useIntersect";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);
const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

const IntersectBox = (props) => {
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });
  return (
    <section {...props} ref={ref} ratio={entry.intersectionRatio}>
      {props.children}
    </section>
  );
};

export default IntersectBox;
