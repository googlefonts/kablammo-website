import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";
import Pattern from "../components/Pattern";
import Anime from "animejs";

let animation = null;

const Kablammo = (props) => {
	const kablammoEl = useRef(null);
	// function handleKablammoMouseMove(e) {
	// 	let multiplierWidth = e.offsetX / window.innerWidth;
	// 	let multiplierHeight = e.offsetY / window.innerHeight;
	// 	let randomWeight = multiplierWidth * (200 - 1000) + 1000;
	// 	let randomWidth = multiplierHeight * (200 - 1000) + 1000;
	// 	let value = randomWeight > randomWidth ? randomWeight : randomWidth;
	// 	kablammoEl.current.style.fontVariationSettings = '"move" ' + value;
	// }
	function animationStart() {
        animation = Anime({
            targets: kablammoEl.current.style,
            fontVariationSettings: ["'move' 1", "'move' 1000"],
            easing: "linear",
            direction: "alternate",
            duration: 6000,
            loop: true,
        });
    }
	useEffect(() => {
		// document.addEventListener("mousemove", handleKablammoMouseMove);
		animationStart();
	});
	return (
		<Pattern
			className="flex justify-center"
			bgImage="/images/bg/purple-worms.svg"
		>
			<div
				className={`w-100% h-100% grid place-items-center`}
				// onMouseMove={handleKablammoMouseMove}
			>
				<h1
					ref={kablammoEl}
					className={`relative text-44 leading-none text-lime -mt-12 -ml-12`}
				>
					<span className={`mt-12 ml-12`}></span>
					<span className={`absolute inset-0 text-pink`}></span>
				</h1>
			</div>
			<style jsx>{`
				.scale-90% {
					transform: scale(0.9);
				}
			`}</style>
		</Pattern>
	);
};

export default Kablammo;
