import React from "react";

var getVariable = function (styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

class TypeTesterSlider extends React.Component {
  constructor(props) {
    super(props);
    this.setDocumentListener = this.setDocumentListener.bind(this);
  }
  componentDidUpdate() {}
  setDocumentListener() {
    document.documentElement.addEventListener("change", (event) => {
      var styles = getComputedStyle(document.documentElement);
      this.props.sliderRef.current.value = getVariable(
        styles,
        "--typeTesterValue"
      );
     });
  }
  componentDidMount() {
    this.setDocumentListener();
    var styles = getComputedStyle(document.documentElement);
    this.props.sliderRef.current.value = getVariable(
      styles,
      "--typeTesterValue"
    );
  }

  render() {
    return (
      <form className="form cursor-pointer">
        <input
          className="cursor-pointer mt-1"
          ref={this.props.sliderRef}
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
              margin-top: -2vw;
            }
            input[type="range"]::-moz-range-thumb {
              height: 4.5vw;
              width: 4.5vw;
            }
            ::-webkit-slider-runnable-track {
              background: #3D3D3D;
              margin-top:2.25vw;
              margin-bottom:2.25vw;
              height: 0.5vw;
              transition: none;
            }
          }
          @media only screen and (max-width: 1024px) {
            input[type="range"]::-webkit-slider-thumb {
              height: 9.6vw;
              width: 9.6vw;
              margin-top: -4.5vw;
            }
            input[type="range"]::-moz-range-thumb {
              height: 8vw;
              width: 8vw;
            }
            ::-webkit-slider-runnable-track {
              background: #3D3D3D;
              margin-top:2vw;
              margin-bottom:2vw;
              height: 1vw;
              transition: none;
            }
          }
          .slider {
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
          ::-moz-range-track {
            background: #3D3D3D;
            height: 7px;
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
