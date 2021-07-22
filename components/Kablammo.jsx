import React, { useEffect } from "react";
import Pattern from "../components/Pattern";
import { useInView } from 'react-intersection-observer'

const Kablammo = () => {
  const [kablammoEl, inView
  ] = useInView({
    threshold: 0,
  })

  return (
    <Pattern
      className="flex justify-center py-24 px-4 lg:px-0 lg:py-0"
      bgImage="/images/bg/purple-worms.svg"
    >
      <div
        className={`w-100% h-100% lg:w-80% lg:h-auto grid place-items-center`}
        id="kablammoWrapper"
      >
        <h1
          ref={kablammoEl}
          id="kablammoEl"
          className={`${ inView ? `animate-it` : ``} relative text-35 leading-none text-lime -mt-8 -ml-8 lg:-mt-12 lg:-ml-12 xl:-mt-24`}
        >
          <span className={`mt-12 ml-4 lg:mt-12 lg:ml-12`}></span>
          <span className={`absolute inset-0 text-pink`}></span>
        </h1>
      </div>
      <style jsx>{`
        #kablammowrapper {
          height: 100% !important;
        }
      `}</style>
    </Pattern>
  );
};

export default Kablammo;
