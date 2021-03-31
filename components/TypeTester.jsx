import React, { Component } from "react";
import Anime from "animejs";
import Frame from "../components/Frame";
import AnimationButton from "../components/AnimationButton";
import TypeTesterSlider from "../components/TypeTesterSlider";
import InputRange from "react-input-range";
import TypeTesterSelect from "../components/TypeTesterSelect";
import Pattern from "../components/Pattern";

let animation = null;

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
            inProgress: false,
            sliderValue: 500,
        };

        this.typeTesterRef = React.createRef();
        this.typeTesterInputRef = React.createRef();
        this.sliderRef = React.createRef();
        this.sliderRefValue = React.createRef();
        this.sliderUpdating = React.createRef();

        this.handleSliderChange = this.handleSliderChange.bind(this);

        this.setOrReset = this.setOrReset.bind(this);
        this.animationStart = this.animationStart.bind(this);
    }

    setOrReset() {
        if (!this.state.inProgress) {
            this.setState({
                animate: !this.state.animate,
            });
        }
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
        //         sliderValue: value,
        //     };
        //     // console.log("newState", newState);
        //     return newState;
        // });
        this.setState({ sliderValue: value });
        // }
    }

    animationStart(target, handleSliderChange) {
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
                        // handleSliderChange(
                        //     anim.animations[0].currentValue.substring(7)
                        // );

                        this.setState({
                            sliderValue: anim.animations[0].currentValue.substring(
                                7
                            ),
                        });
                        {
                            /*
                        this.sliderValue.current = parseFloat(
                            anim.animations[0].currentValue.substring(7)
                        );
                        this.sliderRef.current.value = sliderValue.current;
                        console.log("hey", this.sliderValue.current);*/
                        }
                    }
                },
            });
        });
    }

    componentDidMount() {
        console.log("did mount", this.state);
        if (this.state.animate) {
            this.setState({
                inProgress: true,
            });
            this.animationStart(
                this.typeTesterInputRef,
                this.handleSliderChange
            ).then(() => {
                // console.log("Time to enter...");
                this.setState({
                    inProgress: false,
                });
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sliderValue !== this.state.sliderValue) {
            // console.log("updated in typeTester", this.state);
        }
        console.log("prevstate", prevState, "this.state", this.state);
    }

    render() {
        console.log("render", this.state);

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

        return (
            <div
                ref={this.typeTesterRef}
                className="h-100vh w-100% relative bg-lime border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden"
            >
                <Pattern
                    className="h-100% w-100% bg-cover grid place-items-center"
                    bgImage="/images/bg/lime-circles.svg"
                >
                    <Frame
                        className={`type-tester h-100vh absolute top-0 left-0 right-0 bottom-0 z-10`}
                    >
                        <span
                            ref={this.typeTesterInputRef}
                            className="type-tester text-12 m-auto -mt-12 w-3/4 h-100vh absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center block leading-none text-center text-pink focus:outline-none overflow-hidden self-center break-words"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            spellCheck="false"
                            onKeyDown={this.handleTypeTesterInputChange}
                        >
                            ⚠ VARIABLE FONT 🌼 BY VECTOR 😵
                        </span>
                        <div className="flex justify-between">
                            <div className="pt-10 pl-20 text-1">
                                <span className="uppercase font-mono text-1">
                                    Alternates
                                </span>
                                <div className="flex">
                                    <div
                                        className={`type-tester-alternate grid place-items-center bg-yellow mr-2 font-mono uppercase`}
                                    >
                                        On
                                    </div>
                                    <div
                                        className={`type-tester-alternate grid place-items-center bg-gray font-mono uppercase`}
                                    >
                                        Off
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 pr-20">
                                <span className="uppercase font-mono text-1">
                                    Background
                                </span>
                                <div className="flex text-1">
                                    <div
                                        className={`type-tester-alternate grid place-items-center bg-yellow mr-2 font-display uppercase`}
                                    >
                                        
                                    </div>
                                    <div
                                        className={`type-tester-alternate grid place-items-center bg-gray font-display uppercase`}
                                    >
                                        
                                    </div>
                                    <div
                                        className={`type-tester-alternate grid place-items-center bg-gray font-display uppercase`}
                                    >
                                        
                                    </div>
                                    <div
                                        className={`type-tester-alternate grid place-items-center bg-gray font-display uppercase`}
                                    >
                                        
                                    </div>
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
                                            key={this.state.sliderValue}
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
                `}</style>
            </div>
        );
    }
}

export default TypeTester;
