import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const Image = ({ data, className, gallery }) => {
	return (
		<div className={`image ${className ? className : ""}`}>
			<a
				href={gallery ? data.image_link : data.primary.image_link}
				target="_blank"
			>
				<img
					src={
						gallery
							? data.gallery_image.url
							: data.primary.image.url
					}
				/>
			</a>
			<span className="ff-favorit-mono caption">
				{gallery
					? data.image_captions.length > 0
						? data.image_captions[0].text
						: null
					: data.primary.image_caption}
			</span>
			<style jsx>{`
				.image {
					margin: 0 auto;
					width: ${gallery
						? "auto"
						: data.primary.size === "Large"
						? `100%`
						: `50%`};
				}
				img {
					border: 1px solid black;
					margin-bottom: 10px;
					width: 100%;
				}
				.caption {
					font-size: 0.9rem;
					line-height: 1rem;
				}
				@media (max-width: 1199px) {
					.image {
					}
				}
			`}</style>
		</div>
	);
};

export default Image;
