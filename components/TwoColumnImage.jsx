import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const TwoColumnImage = ({ data, className }) => {
	return (
		<div className={`two-column-image ${className ? className : ""}`}>
			<a
				className="image one"
				href={data.primary.image_one_link}
				target="_blank"
			>
				<span className="ff-favorit-mono caption">
					{data.primary.image_one_caption}
				</span>
			</a>
			<a
				className="image two"
				href={data.primary.image_two_link}
				target="_blank"
			>
				<span className="ff-favorit-mono caption">
					{data.primary.image_two_caption}
				</span>
			</a>
			<style jsx>{`
				.two-column-image {
					display: grid;
					grid-template-columns: 1fr 1fr;
					height: 75vh;
					grid-gap: 50px;
				}
				.image {
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					border: 1px solid black;
					position: relative;
					margin-bottom: 25px;
				}
				.image.one {
					background-image: url(${data.primary.image_one.url});
				}
				.image.two {
					background-image: url(${data.primary.image_two.url});
				}
				.caption {
					font-size: 0.9rem;
					position: absolute;
					bottom: -60px;
					left: 0;
					// border-top: 1px solid black;
					// padding: 0.75rem;
					// width: 100%;
					box-sizing: border-box;
					height: 50px;
					color: black;
					cursor: default;
					line-height: 1rem;
				}
				.caption:hover {
					color: black;
					cursor: default;
				}
				@media (max-width: 1199px) {
					.two-column-image {
						height: 100vh;
					}
					.two-column-image {
						grid-gap: 2rem;
						grid-template-columns: 1fr;
					}
					.caption {
						font-size: 10px;
						bottom: -60px;
						height: 50px;
					}
				}
			`}</style>
		</div>
	);
};

export default TwoColumnImage;
