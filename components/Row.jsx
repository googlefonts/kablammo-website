import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const Row = props => {
	const [child, setChild] = useState(props.children);

	return (
		<div className={`row ${props.className}`}>
			{child}
			<style global jsx>{`
				.row {
					width: 100%;
					overflow: hidden;
					border-bottom: 1px solid black;
					display: grid;
					justify-content: center;
					align-items: stretch;
					grid-template-columns: 1fr;
					box-sizing: border-box;
				}

				.list-item {
					justify-content: start;
					box-sizing: border-box;
					padding: 0 25px;
				}

				.post-title {
					font-size: 12vw;
					line-height: 11vw;
					margin: 80px 10vw 10px;
					// color: #ff58ff;
					color: #4cff73;
					text-align: center;
					-webkit-text-stroke: 1px black;
					letter-spacing: -2px;
				}

				.post-image {
					margin: 0 auto 2rem;
					max-width: 100%;
					border: 1px solid black;
				}
				.post-image-caption {
					margin-top: -25px;
				}

				.text-wrapper {
					max-width: 60%;
					margin: 0 auto;
				}

				.embed-wrapper {
					max-width: 100%;
					margin: 0 auto;
				}

				.embed-wrapper iframe {
					width: 1000px;
					height: 563px;
					max-width: 100%;
				}

				.embed-wrapper.video {
					margin: initial;
				}

				.embed-wrapper.video iframe {
					width: 100%;
					height: 45vw;
					max-width: initial;
				}

				.post {
					padding: 25px 10vw;
					box-sizing: border-box;
				}
				.post p {
					margin-top: 0;
				}
				.post p,
				.post h3 {
					font-family: "Favorit-Light", helvetica, sans-serif;
				}
				.post h3,
				.post h2 {
					margin: 0 0 1rem;
				}
				.post h3 {
					font-size: 1.5rem;
					line-height: 2.25rem;
					color: #ff58ff;
				}
				.post h2 {
					font-size: 3rem;
					line-height: 3.5rem;
				}

				.post a:hover {
					color: #ffb74c;
				}

				.no-border {
					border: 0;
				}

				.last-row {
					margin-top: auto;
					border-top: 1px solid black;
					// border-bottom: 0 !important;
				}
				.fd-column {
					flex-direction: column;
				}
				.aic {
					align-items: center;
				}
				.two-column {
					grid-template-columns: 1fr 1fr;
				}
				.two-column-image {
					// grid-template-columns: 1fr 0.6fr;
					grid-template-columns: 1fr 1fr;
				}
				.fixed {
					position: fixed;
				}
				@media (max-width: 1199px) {
					.embed-wrapper.video iframe {
						width: 100%;
						height: 50vw;
						max-width: initial;
					}
					.two-column {
						grid-template-columns: 1fr;
					}
					.two-column-image {
						grid-template-columns: 1fr;
					}
					.post {
						padding: 1rem;
					}
					.post-title {
						font-family: "Favorit-Regular", helvetica, sans-serif;
						font-size: 10vw;
						line-height: 10vw;
						letter-spacing: 0;
						margin: 40px 10vw 10px;
						-webkit-text-stroke: 0.5px black;
					}
					.text-wrapper {
						max-width: 100%;
					}
					.post h2 {
						font-size: 1.5rem;
						line-height: 2rem;
					}
					.post h3 {
						font-size: 1rem;
						line-height: 1.75rem;
						color: #ff58ff;
						margin-bottom: 0;
					}
					.post h4 {
						font-size: 1.5rem;
						line-height: 2rem;
					}
					.embed-wrapper iframe {
						width: 480px;
						height: 270px;
						max-width: 100%;
					}
					.list-item {
						padding: 0 1rem;
					}
				}
			`}</style>
		</div>
	);
};

export default Row;
