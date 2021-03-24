import React, { Component, Fragment, useState, useContext } from "react";

const colors = [
	"#E4E4E4",
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

	const handleMouseEnter = (e) => {
		setSpanStyle({
			color: colors[Math.floor(Math.random() * colors.length)],
		});
	};

	const handleClick = (e) => {
		setClicked(!clicked);
	};

	return (
		<span
			onMouseEnter={handleMouseEnter}
			onClick={handleClick}
			style={spanStyle}
		>
			{props.children}
			<style jsx>{``}</style>
		</span>
	);
};

export default TypeParticlesText;
