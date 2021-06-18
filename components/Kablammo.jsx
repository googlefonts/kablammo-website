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
				className={`w-100% h-100% grid place-items-center`}
				onMouseMove={handleKablammoMouseMove}
			>
				<h1
					ref={kablammoEl}
					className={`relative text-44 leading-none text-lime -mt-12 -ml-12`}
				>
					<span className={`mt-12 ml-12`}></span>
					<span className={`absolute inset-0 text-pink`}></span>
				</h1>
			</div>
			{/* <div className="hvr-grow-rotate bg-blue rounded-full p-6 animate-it-fast text-gray absolute top-6 left-5 text-4 leading-none pointer-events-none">
				💩
			</div>
			<div className="hvr-grow-rotate bg-yellow rounded-full p-6 animate-it text-gray absolute top-2 left-30 text-6 leading-none pointer-events-none">
				⚠
			</div>
			<div className="hvr-grow-rotate bg-purple rounded-full p-6 animate-it-slow text-yellow absolute top-2 left-55 text-6 leading-none pointer-events-none">
				👀
			</div>
			<div className="hvr-grow-rotate bg-green rounded-full p-6 animate-it text-gray absolute top-6 left-80 text-6 leading-none pointer-events-none">
				👽
			</div>
			<div className="hvr-grow-rotate bg-black rounded-full p-6 animate-it-slow text-gray absolute top-26 left-24 text-6 leading-none pointer-events-none">
				🪐
			</div>
			<div className="hvr-grow-rotate bg-blue rounded-full p-6 animate-it-fast text-gray absolute top-20 left-70 text-6 leading-none pointer-events-none">
				🕒
			</div>*/}
			<style jsx>{`
				.scale-90% {
					transform: scale(0.9);
				}
			`}</style>
		</Pattern>
	);
};

export default Kablammo;
