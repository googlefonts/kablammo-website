import React, { useState, useEffect } from "react";

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
		color: props.color ? props.color : "#e4e4e4",
	});
	const [clicked, setClicked] = useState(false);
	const [hover, setHover] = useState(false);

	const handleHueRotate = (e) => {
		let randomNumber = Math.floor(Math.random() * 360) + 1;
		document.body.style.filter = `hue-rotate(${randomNumber}deg)`;
		setTimeout(() => { document.body.style.filter = `hue-rotate(0deg)`; }, 8000);
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
	// useEffect(()=>{
	// 	if (window.innerWidth < 1024){
	// 		let rand1 = 10000+Math.random()*100000;
	// 		function mobileHighlighting(){ 
	// 			setTimeout(()=>{
	// 				handleMouseEnter();
	// 				setTimeout(()=>{
	// 					handleMouseLeave();
	// 					setSpanStyle({color: "#e4e4e4"})
	// 				}, rand1+750);
	// 				// mobileHighlighting();
	// 			},rand1);
	// 		}
	// 		mobileHighlighting();
	// }
},[]); 
	
	return (
		<span
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleHueRotate}
			style={spanStyle}
			className={`${props.className} ${
				hover && `animate-it`
			} cursor-pointer grow font-display`}
		>
			{props.children}
			<style jsx>{`
				span {
					text-shadow: 1px 1px #323232, -1px -1px #323232, -1px 1px #323232, 1px -1px #323232;
				}
				.grow {
					display: inline-block;
					transition: transform 150ms;
				}
				.grow:hover {
					transform: scale(1.5);
					delay: -50ms;
				}
			`}</style>
		</span>
	);
};

export default TypeParticlesText;
