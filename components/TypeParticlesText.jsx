import React, { Component, Fragment, useState, useContext } from "react";

const colors = [
	"#E8F75C",
	"#73B6E7",
	"#9891E8",
	"#FFC000",
	"#EB7B57",
	"#F97DDA",
];

const TypeParticlesText = (props) => {
	const [spanStyle, setSpanStyle] = useState({
		color: "#e4e4e4",
	});
	const [clicked, setClicked] = useState(false);
	const [hover, setHover] = useState(false);

	const handleHueRotate = (e) => {
		let randomNumber = Math.floor(Math.random() * 360) + 1;
		document.body.style.filter = `hue-rotate(${randomNumber}deg)`;
	};

	const handleMouseEnter = (e) => {
		setHover(true);
		setSpanStyle({
			color: colors[Math.floor(Math.random() * colors.length)],
		});
	};

	const handleMouseLeave = (e) => {
		setHover(false);
	};

	const handleClick = (e) => {
		setClicked(!clicked);
	};

	return (
		<span
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleHueRotate}
			style={spanStyle}
			className={`${props.className} ${hover &&
				`animate-it`} hvr-grow cursor-pointer`}
		>
			{props.children}
			<style jsx>{``}</style>
		</span>
	);
};

export default TypeParticlesText;
