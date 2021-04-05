import React, { Component } from "react";
import Anime from "animejs";
import Frame from "../components/Frame";
import AnimationButton from "../components/AnimationButton";
import InputRange from "react-input-range";

class TypeTesterSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.sliderValue };
    // console.log("constructor", this.props);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }
  handleSliderChange(event) {
    this.props.handleSliderChange(event.target.value);
    const value = event.target.value;
    this.setState({ value });
  }
  componentDidMount() {
    // console.log("componentdidmount", this.props);
    // console.log("updated", this.props.sliderValue);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "prevProps",
      prevProps,
      "prevState",
      prevState,
      "this.props",
      this.props
    );
    if (prevProps.sliderValue !== this.props.sliderValue) {
      console.log("hello");
    }

    if (prevState.sliderValue !== this.state.value) {
      console.log("updated in componentDidUpdate", this.state);
    }
    if (prevProps.sliderValue !== this.state.value) {
      console.log("updated in componentDidUpdate", this.state);
    }
  }

  render() {
    // console.log("updated slider value", this.props.sliderValue);
    return (
      <form className="form">
        <input
          type="range"
          min="0"
          max="1000"
          value={this.state.value}
          onChange={this.handleSliderChange}
          step="1"
        />
        <style jsx global>{`
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
      </form>
    );
  }
}
export default TypeTesterSlider;
