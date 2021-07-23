import React, { Component } from "react";
import Anime from "animejs";
import TypeTesterSlider from "../components/TypeTesterSlider";
import Pattern from "../components/Pattern";
import Pill from "../components/Pill";

let animation;

let setDocumentVariable = function (propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

const bgOptions = [
  {
    index: 0,
    image: "/images/bg/lime-circles.svg",
    bgColor: "lime",
    textColor: "pink",
    sliderColor: "pink"
  },
  {
    index: 1,
    image: "/images/bg/pink-pattern.svg",
    bgColor: "blue",
    textColor: "green",
    sliderColor: "green"
  },
  {
    index: 2,
    image: "/images/bg/purple-squiggly.svg",
    bgColor: "purple",
    textColor: "yellow",
    sliderColor: "lightpurple"
  },
  {
    index: 3,
    image: "/images/bg/orange-worms.svg",
    bgColor: "green",
    textColor: "gray",
    sliderColor: "green"
  },
];

class TypeTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBg: bgOptions[0],
      isActive: true,
      animationPlaying: true,
      inputContent: "⚠ click and type 💩 try me out 😵",
      inputAnimateValue: 1
    };

    this.typeTesterRef = React.createRef();
    this.sliderRefValue = React.createRef(500);
    this.typeTesterInputRef = React.createRef();
    this.sliderUpdating = React.createRef();
    this.toggleCurrentAnimation = this.toggleCurrentAnimation.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleTypeTesterInputChange = this.handleTypeTesterInputChange.bind(this);
    this.animationStart = this.animationStart.bind(this);
    this.sliderRefValue.current = 500;
    this.sliderRef = React.createRef();
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
  handleSliderChange(event) {
    animation.pause();
    this.setState({ animationPlaying: false });
    this.sliderRef.current.value = event.target.value;
    setDocumentVariable("--typeTesterValue", event.target.value);
    this.typeTesterInputRef.current.style.fontVariationSettings =
      "'move' " + event.target.value;
  }

  handleBgClick(index) {
    this.setState({ activeBg: bgOptions[index] });
  }

  handleControllerClick() {
    this.toggleCurrentAnimation(animation);
  }

  handleTypeTesterInputChange(e){
    this.setState({ inputContent: e.target.textContent });
  }

  animationStart() {
    this.typeTesterInputRef.current.style.fontVariationSettings = "'move' 1";
    animation = Anime({
      targets: this.typeTesterInputRef.current,
      fontVariationSettings: ["'move' "+this.state.inputAnimateValue, "'move' 1000"],
      easing: "linear",
      direction: "alternate",
      duration: 6000,
      loop: true,
      update: (anim) => {
        const animationValue = parseInt(
          anim.animations[0].currentValue.substring(7)
        );
        this.sliderRef.current.value = animationValue;
        this.setState({ inputAnimateValue: animationValue });
        return true;
      },
    });
    setDocumentVariable("--typeTesterValue", 1);
  }

  componentDidMount() {
    this.animationStart();
  }

  render() {
    return (
      <div className="lg:h-100vh md:h-75vh h-50vh">
        <div
          ref={this.typeTesterRef}
          id="typetester"
          className={`bg-${this.state.activeBg.bgColor} h-tester-mobile lg:h-tester-desktop w-100% relative rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden`}
        >
          <Pattern
            className="h-100% w-100% bg-cover grid place-items-center"
            bgImage={this.state.activeBg.image}
          >
            <div
              className="w-100% bg-contain bg-no-repeat bg-center type-tester h-100% absolute inset-0 z-10"
            >
              <span
                ref={this.typeTesterInputRef}
                className={`text-${this.state.activeBg.textColor} type-tester text-13 lg:text-12 m-auto w-3/4 h-100% absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center block text-center focus:outline-none overflow-hidden self-center break-words`}
                contentEditable="true"
                suppressContentEditableWarning={true}
                spellCheck="false"
                onKeyUp={this.handleTypeTesterInputChange}
                id="typetestereditablefield"
              >
                {this.state.inputContent}
              </span>
              <div className="justify-end hidden lg:flex ">
                <div className="pt-10 pr-5 lg:pr-20 z-50">
                  <span className="uppercase font-mono text-black text-14pt">
                    Background
                  </span>
                  <div className="flex text-1">
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 0
                          ? this.state.activeBg.textColor
                          : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                      onClick={(e) => this.handleBgClick(0,e)}
                    >
                      
                    </a>
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 1
                          ? this.state.activeBg.textColor
                          : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                      onClick={(e) => this.handleBgClick(1,e)}
                    >
                      
                    </a>
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 2
                          ? this.state.activeBg.textColor
                          : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                      onClick={(e) => this.handleBgClick(2,e)}
                    >
                      
                    </a>
                    <a
                      className={`bg-${
                        this.state.activeBg.index === 3 ? `purple` : `gray`
                      } hvr-sink type-tester-alternate grid place-items-center font-display uppercase`}
                      onClick={(e) => this.handleBgClick(3,e)}
                    >
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Pattern>
        </div>
        <Pill className="h-10 lg:h-5 flex w-100vw">
          <div className="w-100% h-100%">
            <div className="flex flex-col w-100% h-100%">
              <div className={`h-100% w-100% bg-`+this.state.activeBg.sliderColor+` rounded-sm lg:rounded-lg flex justify-center items-center overflow-hidden`}>
                <div className="w-1/5 lg:w-10% bg-gray h-100% flex justify-center items-center">
                  <span
                    onClick={this.toggleCurrentAnimation}
                    className="cursor-pointer"
                  >
                    <img
                      src="/images/icons/playpause.png"
                      className="h-6 lg:h-3"
                    />
                  </span>
                </div>
                <div
                  className="w-4/5 lg:w-90% cursor-pointer"
                  onClick={this.handleClick}
                >
                  <TypeTesterSlider
                    key={this.typeTesterInputRef.current}
                    sliderRef={this.sliderRef}
                    handleSliderChange={this.handleSliderChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </Pill>
        <style global jsx>{`
          #typetestereditablefield {
            cursor: url("/images/icons/textcursor.svg"), text;
            line-height:1;
          }
          #typetestereditablefield::selection{
            color:black;
            background: white;
          }
          #typetestereditablefield::-webkit-selection{
            color:black;
            background: white;
          }
          #typetestereditablefield::-moz-selection{
            color:black;
            background: white;
          }
          .type-tester {
            transition: font-variation-settings 0.6s ease;
          }
          .type-tester-alternate {
            height: 2vw;
            width: 2vw;
            border: 0;
            border-radius: 100%;
            // cursor: pointer;
            cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
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
            // cursor: pointer;
            cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
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
