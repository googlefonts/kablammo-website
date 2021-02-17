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
  const [state, toggle] = useState(props.initial || 0);

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });
  const componentName = state === 0 ? "FadeBox" : "WidthBox";

  return (
    <Component {...props} ref={ref} ratio={entry.intersectionRatio}>
      intersectionRatio: {format(entry.intersectionRatio)}
      <button onClick={() => toggle(state === 0 ? 1 : 0)}>
        Switch to {componentName}
      </button>
    </Component>
  );
};

export default IntersectBox;
