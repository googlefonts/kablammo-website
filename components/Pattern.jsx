import React, { useEffect, useState } from "react";

const Pattern = ({ className, children, bgImage, id, onMouseEnter, onMouseLeave }) => {
 const backgroundImage = bgImage ? "url('" + bgImage + "')" : "none";

  return (
    <div
      className={`h-100% w-100% bg bg-center ${className ? className : ""}`}
      id={id}
      style={{
        backgroundImage: backgroundImage,
        // backgroundPosition: bgPosition,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/*<MatterType />*/}
      {children}
      <style jsx>{`
				.bg {
					background-size: 125%;
				}
				// .bgAnimation {
					// animation: bgPosition 1s steps(4, jump-start);
				// }
				// @keyframes bgPosition {
				// 	0% {
				// 		background-position: center;
				// 	}
				// 	33% {
				// 		background-position: top right;
				// 	}
				// 	66% {
				// 		background-position: top left;
				// 	}
				// 	100% {
				// 		background-position: bottom right;
				// 	}
				}
			`}</style>
    </div>
  );
};
export default Pattern;
