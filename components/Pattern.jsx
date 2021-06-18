import React, { useEffect, useState } from "react";
import MatterType from "../components/MatterType";
// var positions = ["top left", "bottom center", "top right"];

const Pattern = ({ className, children, bgImage }) => {
	// const [seconds, setSeconds] = useState(0);
	// const [isActive, setIsActive] = useState(true);
	// const [bgPosition, setBgPosition] = useState(positions[0]);
	const backgroundImage = bgImage ? "url('" + bgImage + "')" : "none";

	// useEffect(() => {
	// 	let interval = null;
	// 	if (isActive) {
	// 		interval = setInterval(() => {
	// 			setSeconds((seconds) => seconds + 0.5);
	// 			setBgPosition(positions[Math.floor(Math.random() * 3)]);
	// 		}, 500);
	// 	} else if (!isActive && seconds !== 0) {
	// 		clearInterval(interval);
	// 	}
	// 	// console.log(seconds);
	// 	return () => clearInterval(interval);
	// }, [isActive, seconds]);

	return (
		<div
			className={`h-100% w-100% bg bg-center ${
				className ? className : ""
			}`}
			style={{
				backgroundImage: backgroundImage,
				// backgroundPosition: bgPosition,
			}}
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
