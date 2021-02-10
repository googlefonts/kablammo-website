import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";
import Link from "next/link";
const isBrowser = typeof window !== "undefined";
import { Formik, Form, Field, useFormikContext } from "formik";
import useVariableFont from "react-variable-fonts";
import Frame from "../components/Frame";
import anime from "animejs";

const initialSettings = {
	move: 500,
};

const TypeMoveContext = ({ setTypeMove }) => {
	const { values, submitForm } = useFormikContext();
	useEffect(() => {
		const newTypeMove = values.moveInput.toString();
		setTypeMove(newTypeMove);
	}, [values]);

	return null;
};
const getStyles = (value) => {
	return getComputedStyle(document.documentElement)
		.getPropertyValue(value)
		.trim();
};

const setStyles = (property, value) => {
	return document.documentElement.style.setProperty(property, value);
};

const TypeTester = (props) => {
	const [showChild, setShowChild] = useState(false);
	const [typeTesterValues, setTypeTesterValues] = useState({
		min: 0,
		max: 1000,
		currentValue: 500,
	});
	const slider = useRef(null);
	const typeTester = useRef(null);
	let typeTesterAnimation = null;
	const handleAnimationPause = (e) => typeTesterAnimation.pause();
	const handleAnimationPlay = (e) => typeTesterAnimation.play();

	useEffect(() => {
		console.log(typeTesterValues);
		slider.current.value = typeTesterValues.currentValue;
		typeTesterAnimation = anime({
			targets: typeTester.current,
			fontVariationSettings: ["'move' 0", "'move' 1000"],
			easing: "linear",
			direction: "alternate",
			duration: 3000,
			loop: true,
			update: function () {},
		});
	}, [typeTesterValues]);
	const handleSlider = (e, v) => {
		const sliderValue = parseInt(slider.current.value);
		// typeTester.current.style.fontVariationSettings = `'move' ${sliderValue}`;
		// setTypeTesterValues({
		// 	...typeTesterValues,
		// 	currentValue: parseInt(sliderValue),
		// });
	};
	return (
		<Frame
			className={`type-tester bg-lime border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh grid grid-rows-6`}
		>
			<div className="flex justify-between row-span-1">
				<div className="pt-10 pl-20">
					<span className="uppercase font-mono text-1">
						Alternates
					</span>
				</div>
				<div className="pt-10 pr-20">
					<span className="uppercase font-mono text-1">
						Background
					</span>
				</div>
			</div>
			<div className="row-span-4 flex justify-center">
				<div className="flex justify-center align-middle h-100% w-3/4">
					<span
						ref={typeTester}
						className="type-tester text-12 w-full block leading-none text-center text-pink focus:outline-none overflow-hidden self-center break-word"
						contentEditable="true"
						suppressContentEditableWarning={true}
						spellCheck="false"
						onClick={handleAnimationPause}
						onMouseLeave={handleAnimationPlay}
					>
						⚠ VARIABLE FONT 🌼 BY VECTOR 😵
					</span>
				</div>
			</div>
			<div className="flex justify-between row-span-1">
				<div className="pt-10 pl-20"></div>
				<div className="pt-10 pr-20">
					<input
						className="slider"
						name="moveInput"
						type="range"
						min={typeTesterValues.min}
						max={typeTesterValues.max}
						value={typeTesterValues.currentValue}
						ref={slider}
						onChange={handleSlider}
					/>
				</div>
			</div>
			<style jsx>{`
				.type-tester {
				}
				.slider {
				}
				@keyframes type-tester-animation {
					0% {
						font-variation-settings: "move" 0;
					}

					100% {
						font-variation-settings: "move" 1000;
					}
				}
			`}</style>
		</Frame>
	);
};

export default TypeTester;
