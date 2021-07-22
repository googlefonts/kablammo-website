import { useState, useEffect } from "react";
const Pill = (props) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    props.children && setShowChild(true);
  }, []);
// lg:border-2 border border-solid border-black
  return (
    <div
      className={`overflow-x-hidden w-100% text-black rounded-sm lg:rounded-lg text-center flex justify-center items-center ${
        props.className && `${props.className}`
      }`}
    >
      {showChild && props.children}
    </div>
  );
};

export default Pill;
