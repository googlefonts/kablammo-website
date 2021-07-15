import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import Link from "next/link";
const isBrowser = typeof window !== "undefined";
import { Formik, Form, Field, useFormikContext } from "formik";
import useVariableFont from "react-variable-fonts";
import Frame from "../components/Frame";
import TwoBackground from "../components/TwoBackground";
import anime from "animejs";
// import ReactAnime from "react-animejs";

// const { Anime, stagger } = ReactAnime;

const TypeTester2 = (props) => {
  const typeTesterRef = useRef(null);
  const typeTesterInputRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderValue = useRef(500);
  const sliderUpdating = useRef(false);
  const [sliderCurrentValue, setSliderCurrentValue] = useState(500);
  const [updatingSlider, setUpdatingSlider] = useState(false);
  const [typeTesterAnimation, setTypeTesterAnimation] = useState(null);

  const [typeTesterValues, setTypeTesterValues] = useState({
    min: 0,
    max: 1000,
  });
  const handleAnimationPause = (e) => typeTesterAnimation.pause();
  const handleAnimationPlay = (e) => typeTesterAnimation.play();
  useEffect(() => {
    // const animation = anime({
    // targets: typeTesterRef.current,
    // fontVariationSettings: ["'move' 0", "'move' 1000"],
    // easing: "linear",
    // direction: "alternate",
    // duration: 10000,
    // loop: true,
    // update: function(anim) {
    // 	console.log("sliderUpdating.current", sliderUpdating.current);
    // if (sliderUpdating.current === false) {
    // 	sliderValue.current = parseFloat(
    // 		anim.animations[0].currentValue.substring(7)
    // 	);
    // 	sliderRef.current.value = sliderValue.current;
    // 	console.log("hey");
    // }
    // },
    // });
  }, [updatingSlider]);
  TwoBackground(typeTesterRef);

  const handleSliderChange = (e) => {
    sliderValue.current = e.target.value;
  };

  const handleSliderHover = (e) => {
    sliderUpdating.current = !sliderUpdating.current;
    // if (sliderUpdating) typeTesterAnimation.play();
  };
  return (
    <div
      ref={typeTesterRef}
      className="h-100vh w-100% relative bg-lime lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden"
    >
      <Frame
        className={`type-tester h-100vh absolute top-0 left-0 right-0 bottom-0 z-10`}
      >
        <span
          ref={typeTesterInputRef}
          className="type-tester text-12 m-auto w-3/4 h-100vh absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center block leading-none text-center text-pink focus:outline-none overflow-hidden self-center break-word p-10"
          contentEditable="true"
          suppressContentEditableWarning={true}
          spellCheck="false"
        >
          ⚠ VARIABLE FONT 🌼 BY VECTRO 😵
        </span>

        <div className="flex justify-end">
          <div className="pt-10 pr-20">
            <span className="uppercase font-mono text-1">Background</span>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 flex justify-between">
          <div className="pb-10 pl-20 pr-2 w-1/5 flex flex-col">
            <label
              className="uppercase font-mono text-1 text-center"
              htmlFor="cars"
            >
              Font Weights
            </label>
            <select
              className="w-100% h-10 lg:h-6 bg-yellow lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-4 flex justify-center items-center"
              name="cars"
              id="cars"
            >
              <option value="Zoink">Zoink</option>
              <option value="Tweet">Tweet</option>
              <option value="Bloop">Bloop</option>
              <option value="Vroom">Vroom</option>
            </select>
          </div>
          <div className="pb-10 pr-20 w-4/5 flex flex-col ">
            <span
              className="uppercase font-mono text-1 text-center"
              htmlFor="cars"
            >
              Font Weights
            </span>
            <div
              className="h-6 bg-purple lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg relative flex justify-center items-center overflow-hidden"
              onMouseEnter={handleSliderHover}
              onMouseLeave={handleSliderHover}
            >
              <div className="w-1/4 bg-gray h-100% border-r-2 border-solid border-black flex justify-center items-center">
                <span className="uppercase font-mono text-1">Dance Axis</span>
              </div>
              <div className="w-3/4 bg-black h-2px"></div>
              <input
                className="slider appearance-none w-3/4 h-100% bg-transparent absolute right-0"
                name="moveInput"
                type="range"
                min={typeTesterValues.min}
                max={typeTesterValues.max}
                ref={sliderRef}
                defaultValue={sliderCurrentValue}
                onChange={handleSliderChange}
                step="1"
              />
            </div>
          </div>
        </div>
      </Frame>
      <style jsx>{`
        .type-tester {
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 50px;
          width: 50px;
          border: 0;
          border-radius: 100%;
          background: #ffc000;
          // cursor: pointer;
          cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
        }
        @keyframes type-tester-animation {
          0% {
            font-variation-settings: "move" 0;
          }

          100% {
            font-variation-settings: "move" 1000;
          }
        }
      `}</style>
    </div>
  );
};

export default TypeTester2;
