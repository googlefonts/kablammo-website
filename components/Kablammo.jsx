import React, {
  useEffect,
  useRef,
} from "react";
import Pattern from "../components/Pattern";
import { useInView } from 'react-intersection-observer'

const Kablammo = () => {
  const kablammoEl = useRef(null);
  const kablammoWrapper = useRef(null);
  const [kablammoEl, kablammoWrapper] = useInView({
    threshold: 1,
  })

  // function handleKablammoMouseMove(e) {
  // 	let multiplierWidth = e.offsetX / window.innerWidth;
  // 	let multiplierHeight = e.offsetY / window.innerHeight;
  // 	let randomWeight = multiplierWidth * (200 - 1000) + 1000;
  // 	let randomWidth = multiplierHeight * (200 - 1000) + 1000;
  // 	let value = randomWeight > randomWidth ? randomWeight : randomWidth;
  // 	kablammoEl.current.style.fontVariationSettings = '"move" ' + value;
  // }
  // function animationStart() {
  //   animation = Anime({
  //     targets: kablammoEl.current.style,
  //     fontVariationSettings: ["'move' 1", "'move' 1000"],
  //     easing: "linear",
  //     direction: "alternate",
  //     duration: 6000,
  //     loop: true,
  //   });
  // }
  useEffect(() => {
    // document.addEventListener("mousemove", handleKablammoMouseMove);
    // animationStart();
    let options = {
      root: document.querySelector("#kablammoWrapper"),
      rootMargin: '0px',
      threshold: 1.0
    }
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.style.animationPlayState = "running"
        else entry.target.style.animationPlayState = "paused"
      });
    };
    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector("#kablammoEl");
    observer.observe(target);
  });
  return (
    <Pattern
      className="flex justify-center py-24 px-4 lg:px-0 lg:py-0"
      bgImage="/images/bg/purple-worms.svg"
    >
      <div
        className={`w-100% h-100% lg:w-80% lg:h-auto grid place-items-center`}
        ref={kablammoWrapper}
        id="kablammoWrapper"
        // onMouseMove={handleKablammoMouseMove}
      >
        <h1
          ref={kablammoEl}
          id="kablammoEl"
          className={`animate-it relative text-35 leading-none text-lime -mt-8 -ml-8 lg:-mt-12 lg:-ml-12 xl:-mt-24`}
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
