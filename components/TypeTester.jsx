import React, { Component } from "react";
import Anime from "animejs";
import Frame from "../components/Frame";
import AnimationButton from "../components/AnimationButton";
import Slider from "../components/Slider";
import InputRange from "react-input-range";
import Select from "react-select";
import TwoBackground from "../components/TwoBackground";
import Pattern from "../components/Pattern";

let animation = null;

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const clearCurrentAnimation = (currentAnimation) => {
    if (currentAnimation) {
        console.log("Remove current animation...");
        currentAnimation.pause();
    }
};

const AnimationStart = (target, handleSliderChange) => {
    return new Promise((resolve, reject) => {
        clearCurrentAnimation(animation);

        animation = Anime({
            targets: target.current,
            fontVariationSettings: ["'move' 0", "'move' 1000"],
            easing: "linear",
            direction: "alternate",
            duration: 10000,
            loop: true,
            update: (anim) => {
                if (animation.paused === false) {
                    handleSliderChange(
                        anim.animations[0].currentValue.substring(7)
                    );
                    // sliderValue.current = parseFloat(
                    // anim.animations[0].currentValue.substring(7)
                    // );
                    // sliderRef.current.value = sliderValue.current;
                    // console.log("hey");
                }
            },
        });
    });
};

class TypeTester extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true,
            inProgress: false,
            inputStyle: {
                fontSize: "12vw",
                fontVariationSettings: "'move' 500",
            },
            sliderValue: 500,
            selectedOption: null,
        };

        this.typeTesterRef = React.createRef();
        this.typeTesterInputRef = React.createRef();
        this.sliderRef = React.createRef();
        this.sliderRefValue = React.createRef();
        this.sliderUpdating = React.createRef();

        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTypeTesterInputChange = this.handleTypeTesterInputChange.bind(
            this
        );
        this.setOrReset = this.setOrReset.bind(this);
        this.handleSliderHover = this.handleSliderHover.bind(this);
    }

    setOrReset() {
        if (!this.state.inProgress) {
            this.setState({
                animate: !this.state.animate,
            });
        }
    }

    handleSliderHover(event) {
        if (!animation.paused) {
            animation.pause();
            setInterval(() => {
                const randomWeight = Math.random() * (200 - 35) + 35;
            }, 0);
        } else {
        }
    }

    handleSliderChange(value) {
        // console.log("sliderValue", value);
        if (animation.paused) {
            this.typeTesterInputRef.current.style.fontVariationSettings =
                "'move' " + value;
            this.sliderRefValue.current = value;
            this.setState((prevState) => {
                const newState = {
                    ...prevState,
                    inputStyle: {
                        ...prevState.inputStyle,
                        sliderValue: value,
                        fontVariationSettings: "'move' " + value,
                    },
                };
                return newState;
            });
        }
    }

    handleTypeTesterInputChange(event) {
        this.setState((prevState) => {
            return {
                inputStyle: { ...prevState.inputStyle, fontSize: "14vw" },
            };
        });
    }

    handleSelectChange(selectedOption) {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    }

    componentDidMount() {
        console.log("did mount", this.state);
        if (this.state.animate) {
            this.setState({
                inProgress: true,
            });
            AnimationStart(
                this.typeTesterInputRef,
                this.handleSliderChange
            ).then(() => {
                console.log("Time to enter...");
                this.setState({
                    inProgress: false,
                });
            });
        }
        TwoBackground(this.typeTesterRef);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sliderValue !== this.state.sliderValue) {
            console.log("updated");
        }
    }

    render() {
        console.log("render", this.state);

        return (
            <div
                ref={this.typeTesterRef}
                className="h-100vh w-full relative bg-lime border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden"
            >
                <Pattern
                    className="h-100% w-full bg-cover grid place-items-center"
                    bgImage="/images/bg/lime-circles.svg"
                >
                    <Frame
                        className={`type-tester h-100vh absolute top-0 left-0 right-0 bottom-0 z-10`}
                    >
                        <span
                            ref={this.typeTesterInputRef}
                            className="type-tester text-12 m-auto -mt-12 w-3/4 h-100vh absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center block leading-none text-center text-pink focus:outline-none overflow-hidden self-center break-word"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            spellCheck="false"
                            onKeyDown={this.handleTypeTesterInputChange}
                        >
                            ⚠ VARIABLE FONT 🌼 BY VECTOR 😵
                        </span>

                        <div className="flex justify-between">
                            <div className="pt-10 pl-20">
                                <span className="uppercase font-mono text-1">
                                    Alternates
                                </span>
                            </div>
                            <div className="pt-10 pr-20">
                                <span className="uppercase font-mono text-1">
                                    Background
                                </span>
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
                                {/*<Select
                                    className="w-100% h-4 bg-yellow border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-2 flex justify-center items-center"
                                    value={this.state.selectedOption}
                                    onChange={this.handleSelectChange}
                                    options={options}
                                />*/}
                                <div className="w-100% h-4 bg-yellow border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-2 flex justify-center items-center">
                                    Zoink
                                </div>
                            </div>
                            <div className="pb-10 pr-20 w-4/5 flex flex-col ">
                                <span
                                    className="uppercase font-mono text-1 text-center"
                                    htmlFor="cars"
                                >
                                    Font Weights
                                </span>
                                <div
                                    className="h-4 bg-purple border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden"
                                    onMouseEnter={this.handleSliderHover}
                                    onMouseLeave={this.handleSliderHover}
                                >
                                    <div className="w-1/4 bg-gray h-100% border-r-2 border-solid border-black flex justify-center items-center">
                                        <span className="uppercase font-mono text-1">
                                            Dance Axis
                                        </span>
                                    </div>
                                    <div className="w-3/4">
                                        <Slider
                                            key={this.sliderRefValue}
                                            sliderValue={this.state.sliderValue}
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
                <style jsx>{`
                    select option[data-default] {
                        color: red;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}

export default TypeTester;
