import React, { useState } from "react";

const colors = [
  "#E4E4E4",
  "#E8F75C",
  "#73B6E7",
  "#9891E8",
  "#FFC000",
  "#EB7B57",
  "#F97DDA",
];

const CharacterSetItem = ({ item, className, keyValue }) => {
  const [bgStyle, setBgStyle] = useState({
    backgroundColor: "#e4e4e4",
  });
  const [clicked, setClicked] = useState(false);
  const handleMouseEnter = (e) => {
    setBgStyle({
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    });
  };
  const handleClicked = (e) => {
    setClicked(!clicked);
  };

  return (
    <div className={`grid-item ${className ? className : ""}`}>
      <div
        onMouseEnter={handleMouseEnter}
        onClick={handleClicked}
        style={bgStyle}
        className={`${
          clicked ? "animate-it" : ""
        } grid-item-content grid-cols-6 lg:grid-cols-12 lg:border-2 border border-solid border-black rounded-sm lg:rounded-xs text-black`}
      >
        {item.letter}
      </div>
      <style jsx>{`
        /* grid-item-content is visible, and transitions size */
        .grid-item-content {
          width: 100%;
          height: 100%;
          -webkit-transition: width 0.4s, height 0.4s;
          transition: width 0.4s, height 0.4s;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 6vw;
          line-height: 8vw;
          text-align: center;
          background-color: #e4e4e4;
        }
        /* item is invisible, but used for layout */
        .grid-item,
        .grid-sizer {
          width: calc(100% / 12);
        }

        .grid-item {
          float: left;
          height: 10vw;
        }

        .grid-item:hover .grid-item-content {
          background: #e4e4e4;
          cursor: pointer;
        }

        /* both item and item content change size */
        .grid-item.is-expanded {
          width: calc(100% / 6 - 1px);
          height: 20vw;
          z-index: 2;
        }
        .grid-item.is-expanded .grid-item-content {
          background: #ffc000;
          font-size: 15vw;
        }
        @media (max-width: 1199px) {
          .grid-item,
          .grid-sizer {
            width: calc(100% / 6);
          }
          .grid-item {
            height: 10vh;
          }
          .grid-item-content {
            font-size: 10vw;
            line-height: 10vw;
          }
        }
      `}</style>
    </div>
  );
};

export default CharacterSetItem;
