import React, { Component } from "react";
import Anime from "animejs";
import Frame from "../components/Frame";
import AnimationButton from "../components/AnimationButton";
import InputRange from "react-input-range";

// Auxiliary method. Retrieves and sanitises the value of a custom property.
var getVariable = function (styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

// Auxiliary method. Sets the value of a custom property at the document level.
var setDocumentVariable = function (propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

class TypeTesterSlider extends React.Component {
  constructor(props) {
    super(props);
    this.setDocumentListener = this.setDocumentListener.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {}
  setDocumentListener() {
    document.documentElement.addEventListener("change", (event) => {
      var styles = getComputedStyle(document.documentElement);
      this.props.inputRef.current.value = getVariable(
        styles,
        "--typeTesterValue"
      );
    });
  }
  componentDidMount() {
    // console.log(this.inputRef);
    // this.inputRef.current.addEventListener("input", function (e) {
    //   setDocumentVariable("--typeTesterValue", this.inputRef.current.value);
    // });
    this.setDocumentListener();
    var styles = getComputedStyle(document.documentElement);
    this.props.inputRef.current.value = getVariable(
      styles,
      "--typeTesterValue"
    );
  }

  render() {
    return (
      <form className="form cursor-pointer">
        <input
          className="cursor-pointer"
          ref={this.props.inputRef}
          type="range"
          min="0"
          max="1000"
          onChange={this.props.handleSliderChange}
          step={1}
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
          input[type="range"] {
            appearance: none;
            outline: none;
            width: 100%;
            background: transparent;
          }
          input[type="range"]::-webkit-slider-thumb {
            outline: none;
            appearance: none;
            height: 2vw;
            width: 2vw;
            border: 0;
            border-radius: 100%;
            background: #ffc000;
            cursor: pointer;
            margin-top: 0vw;
            transition: none;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            background: #f97dda;
          }
          .input-range__slider {
            appearance: none;
            height: 2vw;
            width: 2vw;
            border: 0;
            border-radius: 100%;
            background: #ffc000;
            cursor: pointer;
            margin-top: 1vw;
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
