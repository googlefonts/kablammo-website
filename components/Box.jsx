import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const Box = (props) => {
	const [child, setChild] = useState(props.children);

	return (
		<div className={`box ${props.className}`}>
			{child}
			<style jsx>{`
				.box {
					background: url("${props.imageSrc ? props.imageSrc : null}");
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					display: flex;
					justify-content: start;
					align-items: center;
					flex-direction: column;
				}
				.box:last-child {
					border-right: 0;
				}
				.center {
					justify-content: center;
				}
				.rectangle {
					height: 50px;
				}
				.square {
					height: 34vh;
				}
				.padding {
					box-sizing: border-box;
					padding: 2rem;
				}
				.border {
					border-right: 1px solid black;
				}
				.ais {
					align-items: start;
				}
				@media (max-width: 1199px) {
					.box {
						display: flex;
						justify-content: center;
						align-items: center;
						box-sizing: border-box;
					}
					.ais {
						align-items: start;
					}
					.square {
						height: 50px;
					}
					.padding {
						padding: 1rem;
					}
					.border {
						border-right: 0;
					}
					.border-mobile {
						border-right: 1px solid black;
					}

				}
			`}</style>
		</div>
	);
};

export default Box;
