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

const Kablammo = (props) => {
	const kablammoEl = useRef(null);
	function handleKablammoMouseMove(e) {
		let multiplierWidth = e.offsetX / window.innerWidth;
		let multiplierHeight = e.offsetY / window.innerHeight;
		let randomWeight = multiplierWidth * (200 - 1000) + 1000;
		let randomWidth = multiplierHeight * (200 - 1000) + 1000;
		let value = randomWeight > randomWidth ? randomWeight : randomWidth;
		kablammoEl.current.style.fontVariationSettings = '"move" ' + value;
	}
	useEffect(() => {
		document.addEventListener("mousemove", handleKablammoMouseMove);
	});
	return (
		<Pattern
			className="flex justify-center"
			bgImage="/images/bg/purple-worms.svg"
		>
			{/* <img
                    className="w-100% items-center"
                    src={doc.data.landing_image.url}
                  /> */}
			<div
				className={`w-100% grid place-items-center`}
				onMouseMove={handleKablammoMouseMove}
			>
				<h1
					ref={kablammoEl}
					className={`relative text-40 leading-tight text-lime -mt-32`}
				>
					<span className={`scale-90%`}></span>
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
