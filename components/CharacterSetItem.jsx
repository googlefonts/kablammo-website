import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "./Frame";
import Row from "./Row";

const colors = [
	"#E4E4E4",
	"#E8F75C",
	"#73B6E7",
	"#9891E8",
	"#FFC000",
	"#EB7B57",
	"#F97DDA",
];

const CharacterSetItem = ({ item }) => {
	const [bgStyle, setBgStyle] = useState({
		backgroundColor: "#e4e4e4",
	});
	const [hovering, setHovering] = useState(false);
	const updateBgColor = (e) => {
		console.log("grid-item-content", e, bgStyle);
		setBgStyle({
			backgroundColor: colors[Math.floor(Math.random() * colors.length)],
		});
	};
	const updateHovering = (e) => {
		setHovering(!hovering);
	};

	return (
		<div className={`grid-item`}>
			<div
				onMouseEnter={updateBgColor}
				onClick={updateHovering}
				style={bgStyle}
				className={`${
					hovering ? "animate-it" : ""
				} grid-item-content grid-cols-12 border-2 border-solid border-black rounded-sm text-black`}
			>
				{item.letter}
			</div>
			<style jsx>{`
				.character-set-item {
					padding: 25px 10vw 0;
					margin: 0 auto;
				}
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
					.type-particles {
						padding: 1rem;
					}
				}
			`}</style>
		</div>
	);
};

export default CharacterSetItem;
