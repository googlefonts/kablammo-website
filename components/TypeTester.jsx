import React, { Component } from "react";
import Anime from "animejs";
import Frame from "../components/Frame";
import AnimationButton from "../components/AnimationButton";
import TypeTesterSlider from "../components/TypeTesterSlider";
import InputRange from "react-input-range";
import TypeTesterSelect from "../components/TypeTesterSelect";
import Pattern from "../components/Pattern";

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

const clearCurrentAnimation = (currentAnimation) => {
    if (currentAnimation) {
        // console.log("Remove current animation...");
        currentAnimation.pause();
    }
};

class TypeTester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true,
            slider: { value: 500 },
            activeBg: bgOptions[0],
            isActive: true,
            seconds: 0,
        };

        this.typeTesterRef = React.createRef();
        this.sliderRefValue = React.createRef(500);
        this.typeTesterInputRef = React.createRef();
        this.sliderUpdating = React.createRef();
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.animationStart = this.animationStart.bind(this);
        this.sliderRefValue.current = 500;
    }

    handleSliderChange(value) {
        console.log("handleSliderChange", value);
        animation.pause();
        // if (animation.paused) {
        this.typeTesterInputRef.current.style.fontVariationSettings =
            "'move' " + value;
        // this.setState((prevState) => {
        //     const newState = {
        //         ...prevState,
        //         slider.value: value,
        //     };
        //     // console.log("newState", newState);
        //     return newState;
        // });
        this.setState({ slider: { value: value } });
        // }
    }

    handleBgClick(index, e) {
        event.preventDefault();
        this.setState({ activeBg: bgOptions[index] });
    }

    animationStart(target, handleSliderChange) {
        clearCurrentAnimation(animation);
        animation = Anime({
            targets: target.current,
            fontVariationSettings: ["'move' 1", "'move' 1000"],
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            loop: true,
            update: (anim) => {
                if (animation.paused === false) {
                    // handleSliderChange(
                    //     anim.animations[0].currentValue.substring(7)
                    // );
                    const sliderValueInt = parseInt(
                        anim.animations[0].currentValue.substring(7)
                    );
                    this.sliderRefValue.current = sliderValueInt;
                    console.log(
                        "this.sliderrefvalue",
                        this.sliderRefValue.current
                    );
                    // this.setState(
                    //     {
                    //         slider: { value: sliderValueInt },
                    //     },
                    //     () => {
                    //         console.log(this.state.slider.value);
                    //     }
                    // );
                }
                return true;
            },
        });
    }

    componentDidMount() {
        // console.log("did mount", this.state);
        if (this.state.animate) {
            // this.animationStart(
            //     this.typeTesterInputRef,
            //     this.handleSliderChange
            // );
            // let interval = null;
            // if (this.state.isActive) {
            //     interval = setInterval(() => {
            //         this.setState((prevState) => {
            //             let newSliderValue;
            //             if (prevState.slider.value <= 1000) {
            //                 newSliderValue = prevState.slider.value - 1;
            //             }
            //             if (prevState.slider.value >= 1000) {
            //                 newSliderValue = prevState.slider.value + 1;
            //             }
            //             this.typeTesterInputRef.current.style.fontVariationSettings =
            //                 "'move' " + newSliderValue;
            //             return {
            //                 ...prevState,
            //                 slider: { value: newSliderValue },
            //                 seconds: prevState.seconds + 0.1,
            //             };
            //         });
            //     }, 100);
            // } else if (!this.state.isActive && this.state.seconds !== 0) {
            //     clearInterval(interval);
            // }
            // // console.log(seconds);
            // return () => clearInterval(interval);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.slider.value !== this.state.slider.value) {
            console.log("updated in typeTester", this.state);
        }
        // console.log("prevstate", prevState, "this.state", this.state);
    }

    render() {
        console.log("render", this.sliderRefValue);

        const customStyles = {
            menu: (provided, state) => ({
                ...provided,
                width: state.selectProps.width,
                borderBottom: "1px dotted pink",
                color: state.selectProps.menuColor,
                padding: 20,
            }),

            control: (_, { selectProps: { width } }) => ({
                width: width,
            }),

            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = "opacity 300ms";
                return { ...provided, opacity, transition };
            },
        };
        // const uniqueKey = this.state.slider.value + this.state.activeBg.index;
        // console.log("uniqueKey", uniqueKey);
        return (
            <div
                ref={this.typeTesterRef}
                className={`bg-${this.state.activeBg.bgColor} h-100vh w-100% relative border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden`}
            >
                <Pattern
                    key={this.state.activeBg.index}
                    className="h-100% w-100% bg-cover grid place-items-center"
                    bgImage={this.state.activeBg.image}
                >
                    <Frame
                        className={`type-tester h-100vh absolute top-0 left-0 right-0 bottom-0 z-10`}
                    >
                        <span
                            ref={this.typeTesterInputRef}
                            className={`text-${this.state.activeBg.textColor} type-tester text-12 m-auto -mt-12 w-3/4 h-100vh absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center block leading-none text-center focus:outline-none overflow-hidden self-center break-words`}
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            spellCheck="false"
                            onKeyDown={this.handleTypeTesterInputChange}
                        >
                            ⚠ VARIABLE FONT 🌼 BY VECTOR 😵
                        </span>
                        <div className="flex justify-between">
                            <div className="pt-10 pl-20 z-50 text-1">
                                <span className="uppercase font-mono text-1">
                                    Alternates
                                </span>
                                <div className="flex">
                                    <div
                                        className={`hvr-sink type-tester-alternate grid place-items-center bg-yellow mr-2 font-mono uppercase`}
                                    >
                                        On
                                    </div>
                                    <div
                                        className={`hvr-sink type-tester-alternate grid place-items-center bg-gray font-mono uppercase`}
                                    >
                                        Off
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 pr-20 z-50">
                                <span className="uppercase font-mono text-1">
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
                                        
                                    </a>
                                    <a
                                        className={`bg-${
                                            this.state.activeBg.index === 2
                                                ? this.state.activeBg.textColor
                                                : `gray`
                                        } hvr-sink type-tester-alternate grid place-items-center mr-2 font-display uppercase`}
                                        onClick={(e) => this.handleBgClick(2)}
                                    >
                                        
                                    </a>
                                    <a
                                        className={`bg-${
                                            this.state.activeBg.index === 3
                                                ? this.state.activeBg.textColor
                                                : `gray`
                                        } hvr-sink type-tester-alternate grid place-items-center font-display uppercase`}
                                        onClick={(e) => this.handleBgClick(3)}
                                    >
                                        
                                    </a>
                                </div>{" "}
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 bottom-0 flex justify-between">
                            <TypeTesterSelect
                                handleSliderChange={this.handleSliderChange}
                            />
                            <div className="mt-auto pb-10 pr-20 w-5/6 flex flex-col ">
                                <div className="h-3 bg-purple border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden">
                                    <div className="w-1/4 bg-gray h-100% border-r-2 border-solid border-black flex justify-center items-center">
                                        <span className="uppercase font-mono text-1">
                                            Move Axis
                                        </span>
                                    </div>
                                    <div className="w-3/4">
                                        <TypeTesterSlider
                                            key={this.state.slider.value}
                                            sliderValue={
                                                this.state.slider.value
                                            }
                                            handleSliderChange={
                                                this.handleSliderChange
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Frame>
                </Pattern>
                <style global jsx>{`
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
                    input[type="range"] {
                        appearance: none;
                        width: 100%;
                        background: transparent;
                    }
                    input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        height: 2vw;
                        width: 2vw;
                        border: 0;
                        border-radius: 100%;
                        background: #ffc000;
                        cursor: pointer;
                        margin-top: -1vw;
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
