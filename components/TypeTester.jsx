import React, { Component } from "react";
import Anime from "animejs";
import Frame from "../components/Frame";
import AnimationButton from "../components/AnimationButton";
import TypeTesterSlider from "../components/TypeTesterSlider";
import InputRange from "react-input-range";
import TypeTesterSelect from "../components/TypeTesterSelect";
import Pattern from "../components/Pattern";
import Pill from "../components/Pill";

let animation = null;

const bgOptions = [
  {
    index: 0,
    image: "/images/bg/lime-circles.svg",
    bgColor: "lime",
    textColor: "pink",
  },
  {
    index: 1,
    image: "/images/bg/pink-pattern.svg",
    bgColor: "blue",
    textColor: "lime",
  },
  {
    index: 2,
    image: "/images/bg/purple-squiggly.svg",
    bgColor: "purple",
    textColor: "yellow",
  },
  {
    index: 3,
    image: "/images/bg/orange-worms.svg",
    bgColor: "green",
    textColor: "gray",
  },
];

// Auxiliary method. Retrieves and sanitises the value of a custom property.
var getVariable = function (styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

// Auxiliary method. Sets the value of a custom property at the document level.
var setDocumentVariable = function (propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

const clearCurrentAnimation = (currentAnimation) => {
  if (currentAnimation) {
    currentAnimation.pause();
  }
};

class TypeTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBg: bgOptions[0],
      isActive: true,
      seconds: 0,
      animationPlaying: true,
    };

    this.typeTesterRef = React.createRef();
    this.sliderRefValue = React.createRef(500);
    this.typeTesterInputRef = React.createRef();
    this.sliderUpdating = React.createRef();
    this.toggleCurrentAnimation = this.toggleCurrentAnimation.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.animationStart = this.animationStart.bind(this);
    this.sliderRefValue.current = 500;
    this.inputRef = React.createRef();
  }
  toggleCurrentAnimation() {
    if (animation) {
      if (this.state.animationPlaying) {
        animation.pause();
        this.setState({ animationPlaying: false });
      } else {
        animation.play();
        this.setState({ animationPlaying: true });
      }
    }
  }
  handleSliderChange(event, value) {
    if (event) {
      this.inputRef.current.value = event.target.value;
      setDocumentVariable("--typeTesterValue", event.target.value);
      this.typeTesterInputRef.current.style.fontVariationSettings =
        "'move' " + event.target.value;
    } else if (value) {
      this.inputRef.current.value = value;
      setDocumentVariable("--typeTesterValue", value);
      this.typeTesterInputRef.current.style.fontVariationSettings =
        "'move' " + value;
    }
  }

  handleBgClick(index, e) {
    e.preventDefault();
    this.setState({ activeBg: bgOptions[index] });
  }

  handleClick() {
    clearCurrentAnimation(animation);
  }

  handleControllerClick() {
    this.toggleCurrentAnimation(animation);
  }

  animationStart() {
    clearCurrentAnimation(animation);

    animation = Anime({
      targets: this.typeTesterInputRef.current,
      fontVariationSettings: ["'move' 1", "'move' 1000"],
      easing: "linear",
      direction: "alternate",
      duration: 6000,
      loop: true,
      update: (anim) => {
        const animationValue = parseInt(
          anim.animations[0].currentValue.substring(7)
        );
        this.inputRef.current.value = animationValue;
        return true;
      },
    });
  }

  componentDidMount() {
    this.animationStart();
  }

  render() {
    return (
      <div>
        <div
          ref={this.typeTesterRef}
          id="typetester"
          className={`bg-${this.state.activeBg.bgColor} lg:h-100vh md:h-75vh h-50vh w-100% relative lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden`}
        >
          <Pattern
            key={this.state.activeBg.index}
            className="h-100% w-100% bg-cover grid place-items-center"
            bgImage={this.state.activeBg.image}
          >
            <Frame
              className={`type-tester lg:h-100vh md:h-75vh h-50vh absolute top-0 left-0 right-0 bottom-0 z-10`}
            >
              <span
                ref={this.typeTesterInputRef}
                className={`text-${this.state.activeBg.textColor} type-tester text-13 lg:text-12 m-auto lg:-mt-12 w-3/4 lg:h-100vh md:h-60vh h-40vh absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center block leading-none text-center focus:outline-none overflow-hidden self-center break-words`}
                contentEditable="true"
                suppressContentEditableWarning={true}
                spellCheck="false"
                onKeyDown={this.handleTypeTesterInputChange}
                id="typetestereditablefield"
              >
                ⚠ VARIABLE FONT 🌼 BY VECTRO 😵
              </span>
              <div className="justify-end hidden lg:flex ">
                <div className="pt-5 pr-5 lg:pr-20 z-50">
                  <span className="uppercase font-mono text-black text-1">
                    Background
                  </span>
                  <div className="flex text-1">
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 0
                          ? this.state.activeBg.textColor
                          : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                      onClick={(e) => this.handleBgClick(0)}
                    >
                      
                    </a>
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 1
                          ? this.state.activeBg.textColor
                          : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                      onClick={(e) => this.handleBgClick(1)}
                    >
                      
                    </a>
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 2
                          ? this.state.activeBg.textColor
                          : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                      onClick={(e) => this.handleBgClick(2)}
                    >
                      
                    </a>
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 3 ? `purple` : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center font-display uppercase`}
                      onClick={(e) => this.handleBgClick(3)}
                    >
                      
                    </a>
                  </div>{" "}
                </div>
              </div>
              <div className="hidden lg:flex absolute left-0 right-0 bottom-0 flex justify-between">
                <TypeTesterSelect
                  key={this.typeTesterInputRef.current}
                  inputRef={this.inputRef}
                  handleSliderChange={this.handleSliderChange}
                  onClick={this.handleClick}
                />
                <div className="mt-auto pb-10 pr-20 w-5/6 flex flex-col ">
                  <div className="h-3 bg-purple lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg relative flex justify-center items-center overflow-hidden">
                    <div
                      onClick={this.toggleCurrentAnimation}
                      className="w-1/4 bg-gray h-100% border-r-2 border-solid border-black flex justify-center items-center"
                    >
                      <span className="uppercase font-mono text-1">
                        {this.state.animationPlaying === true
                          ? `Pause`
                          : `Play`}
                      </span>
                    </div>
                    <div
                      className="w-3/4 cursor-pointer"
                      onClick={this.handleClick}
                    >
                      <TypeTesterSlider
                        key={this.typeTesterInputRef.current}
                        inputRef={this.inputRef}
                        handleSliderChange={this.handleSliderChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Frame>
          </Pattern>
        </div>
        <Pill className="bg-purple h-10 lg:h-6 flex w-100vw lg:hidden">
          <div className="w-100% h-100%">
            {/* <TypeTesterSelect
                key={this.typeTesterInputRef.current}
                inputRef={this.inputRef}
                handleSliderChange={this.handleSliderChange}
                onClick={this.handleClick}
              /> */}
            <div className="flex flex-col w-100% h-100%">
              <div className="h-100% w-100% bg-purple lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg flex justify-center items-center overflow-hidden">
                <div className="w-1/4 bg-gray h-100% flex justify-center items-center">
                  <span className="uppercase font-mono text-3">Move Axis</span>
                  <span
                    onClick={this.toggleCurrentAnimation}
                    className="cursor-pointer"
                  >
                    <img
                      id="controlicon"
                      src="/images/icons/playpauselight.png"
                    />
                  </span>
                </div>
                <div
                  className="w-3/4 cursor-pointer"
                  onClick={this.handleClick}
                >
                  <TypeTesterSlider
                    key={this.typeTesterInputRef.current}
                    inputRef={this.inputRef}
                    handleSliderChange={this.handleSliderChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </Pill>
        <style global jsx>{`
          #typetestereditablefield {
            cursor: url("/images/icons/textcursor.svg"), move;
          }
          #controlicon {
            height: 15px;
            width: auto;
            margin-left: 15px;
          }
          .type-tester {
            transition: font-variation-settings 0.6s ease;
          }
          .type-tester-alternate {
            height: 2vw;
            width: 2vw;
            border: 0;
            border-radius: 100%;
            cursor: pointer;
            transition: none;
          }
          .select {
          }
          .select-options {
            animation: height 600ms;
          }
          .select-current-option {
          }
          .hide-options {
            height: 0;
          }
          /* Slider.css */

          .slider {
            // margin-bottom: 40px;
            transition: none;
          }

          .slider label {
            display: none;
            transition: none;
          }
          .input-range__slider {
            appearance: none;
            height: 2vw;
            width: 2vw;
            border: 0;
            border-radius: 100%;
            background: #ffc000;
            cursor: pointer;
            margin-top: -1vw;
            transition: none;
          }
          .input-range__slider:active {
            transform: none;
          }
          .input-range__track {
            background: black;
            height: 2px;
            transition: none;
            margin-top: 2px;
          }

          .input-range__track--active {
            display: none;
            transition: none;
          }

          .input-range__label--value .input-range__label-container {
            display: none;
            transition: none;
          }

          .input-range__label--min .input-range__label-container,
          .input-range__label--max .input-range__label-container {
            display: none;
            transition: none;
          }

          .input-range__label--max .input-range__label-container {
            display: none;
            transition: none;
          }
        `}</style>
      </div>
    );
  }
}

export default TypeTester;
