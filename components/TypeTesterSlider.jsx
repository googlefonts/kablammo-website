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
          className="cursor-pointer mt-1"
          ref={this.props.inputRef}
          type="range"
          min="0"
          max="1000"
          onChange={this.props.handleSliderChange}
          step={1}
        />
        <style jsx global>{`
          /* Slider.css */
          @media only screen and (min-width: 1024px) {
            input[type="range"]::-webkit-slider-thumb {
              height: 4.5vw;
              width: 4.5vw;
              margin-top: -2.2vw;
            }
            input[type="range"]::-moz-range-thumb {
              height: 4.5vw;
              width: 4.5vw;
            }
          }
          @media only screen and (max-width: 1024px) {
            input[type="range"]::-webkit-slider-thumb {
              height: 8vw;
              width: 8vw;
              margin-top: -4vw;
            }
            input[type="range"]::-moz-range-thumb {
              height: 8vw;
              width: 8vw;
            }
          }
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
            border: 0;
            border-radius: 100%;
            background-image: url("images/icons/sliderbutton.png");
            background-position: center;
            background-repeat: no-repeat; 
            background-size: cover; 
            // cursor: pointer;
            cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
            transition: none;
          }
          input[type="range"]::-ms-thumb {
            margin: 0; /* Reset margin in Edge since it supports -webkit-slider-thumb as well */
          }
          input[type="range"]::-moz-range-thumb {
            outline: none;
            appearance: none;
            border: 0;
            border-radius: 100%;
            background-image: url("images/icons/sliderbutton.png");
            background-position: center;
            background-repeat: no-repeat; 
            background-size: cover; 
            cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
            // cursor: pointer;
            margin-top: 0vw;
            transition: none;
          }
          // input[type="range"]::-webkit-slider-thumb:hover {
          //   background: #f97dda;
          // }
          .input-range__slider {
            appearance: none;
            height: 2vw;
            width: 2vw;
            border: 0;
            border-radius: 100%;
            background: #ffc000;
            cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
            // cursor: pointer;
            margin-top: 1vw;
            transition: none;
          }
          .input-range__slider:active {
            transform: none;
          }
          ::-webkit-slider-runnable-track {
            // box-sizing: border-box
            background: black;
            margin-top:2.4vw;
            margin-bottom:2.4vw;
            height: 0.2vw;
            transition: none;
          }
          ::-moz-range-track {
            background: black;
            height: 2px;
            transition: none;
          }

          // .input-range__track--active {
          //   display: none;
          //   transition: none;
          // }

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
