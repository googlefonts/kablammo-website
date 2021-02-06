import React, { useState } from "react";
import Media from "react-media";

const ScrollingText = (props) => {
	const [child, setChild] = useState(props.children);
	const pink = "#ef60a3";
	const green = "#00a651";
	const blue = "#008dd3";
	const red = "#e41e26";
	return (
		<Media
			defaultMatches={{ mobile: false, desktop: false }}
			queries={{
				mobile: "(max-width: 1199px)",
				desktop: "(min-width: 1120px",
			}}
		>
			{(matches) => (
				<div
					className={`scrolling-text ${
						props.className ? props.className : ""
					} ${
						matches.mobile
							? "mobile"
							: matches.tablet
							? "tablet"
							: ""
					}`}
				>
					<div className="scrolling-text-inner">
						<a
							className={props.specialLeft ? `small-text` : ``}
							href={props.href}
							target={props.blank ? "_blank" : "_self"}
						>
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
							{child}&nbsp;{child}&nbsp;{child}&nbsp;{child}&nbsp;
						</a>
					</div>
					<style jsx>{`
						.scrolling-text {
							width: 100%;
							overflow: hidden;
							position: relative;
							height: 100%;
						}

						.scrolling-text-inner {
							display: flex;
							justify-content: center;
							align-items: center;
							position: absolute;
							width: 200%;
							height: 100%;
							${props.right ? "right" : "left"}: 0;
							animation: scrollDesktop 300s linear infinite;
						}
						a {
							margin-top: 2px;
							white-space: nowrap;
							color: black;
							text-decoration: none;
							text-transform: uppercase;
							transition: display 1s;
						}
						.scrolling-text a {
							margin-top: -5px;
						}
						.mobile .scrolling-text-inner {
							animation: scrollMobile 150s linear infinite;
						}
						.back-to-shop {
							position: fixed;
							height: 36px;
							top: 0;
							right: 0;
							border-left: 1px solid black;
							z-index: 999999;
							padding: 0 10px;
						}
						.back-to-shop img {
							max-height: 100%;
						}
						.hover {
						}
						.pink {
							z-index: 4;
						}
						.green {
							z-index: 3;
						}
						.blue {
							z-index: 2;
						}
						.red {
							z-index: 1;
						}

						@keyframes scrollMobile {
							0% {
								${props.right ? "right" : "left"}: 0;
							}
							100% {
								${props.right ? "right" : "left"}: -2000%;
							}
						}

						@keyframes scrollDesktop {
							0% {
								${props.right ? "right" : "left"}: 0;
							}
							100% {
								${props.right ? "right" : "left"}: -800%;
							}
						}

						@keyframes backgroundAnimation {
							0% {
								background-position: 0% 0%;
							}
							50% {
								background-position: 100% 100%;
							}
							100% {
								background-position: 0% 0%;
							}
						}
						.fixed {
							position: fixed;
							z-index: 99999;
						}

						.mt-65 {
							margin-top: 65px !important;
						}
						@media (max-width: 1199px) {
							// display: ${props.hideMobile ? "none" : "block"};
						}
					`}</style>
				</div>
			)}
		</Media>
	);
};

export default ScrollingText;
