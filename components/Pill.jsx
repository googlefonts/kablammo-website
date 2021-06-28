import { useState, useEffect } from "react";
const Pill = (props) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    props.children && setShowChild(true);
  }, []);

  return (
    <div
      className={`pill w-100% lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center flex justify-center items-center ${
        props.className && `${props.className}`
      }`}
    >
      {showChild && props.children}
      <style jsx>{`
        .pill {
          overflow-x: hidden;
        }
        .right-vertical {
          transform: rotate(90deg);
          transform-origin: bottom right;
          width: 76vh;
          bottom: 12vh;
        }
        .left-vertical {
          transform: rotate(270deg);
          transform-origin: top left;
          width: 76vh;
          bottom: 0vh;
        }
      `}</style>
    </div>
  );
};

export default Pill;
