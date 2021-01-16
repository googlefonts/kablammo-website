import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import {
	CarouselProvider,
	Slider,
	Slide,
	DotGroup,
	Image,
	ButtonBack,
	ButtonNext
} from "pure-react-carousel";

const ImageCarousel = ({ data, className }) => {
	const [x, setX] = React.useState(0);
	const right = () => {
		setX(x => x - 50);
	};
	return (
		<div className={`image-carousel ${className ? className : ""}`}>
			<CarouselProvider
				naturalSlideWidth={3}
				naturalSlideHeight={2}
				totalSlides={data.items.length}
			>
				<Slider>
					{data.items.map((image, i) => {
						return (
							<Slide key={i}>
								<div className="image-wrapper" key={i}>
									<a href={image.image_link} target="_blank">
										<img src={image.image.url} />
									</a>
									{image.image_caption.length > 0 && (
										<span className="ff-favorit-mono caption">
											{image.image_caption[0].text}
										</span>
									)}
								</div>
							</Slide>
						);
					})}
				</Slider>
				<ButtonBack className="carousel-button left">⬿</ButtonBack>
				<ButtonNext className="carousel-button right">⤳</ButtonNext>
				<DotGroup showAsSelectedForCurrentSlideOnly />
			</CarouselProvider>
			<style jsx>{`
				.image-carousel {
					position: relative;
				}
				.image-wrapper {
					height: 100%;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
					margin: 0 !important;
				}
				.image-wrapper img {
					max-height: 100%;
					margin: 0 auto;
					border: 1px solid black;
					box-sizing: border-box;
				}

				.image-carousel-wrapper {
					position: relative;
					margin: 0 auto;
					display: grid;
					grid-auto-columns: 50vw;
					grid-auto-flow: column;
					grid-gap: 2rem;
					width: 50vw;
					// overflow: hidden;
				}
				img {
					border: 1px solid black;
					margin-bottom: 10px;
				}
				.caption-wrapper {
					position: relative;
					height: 100%;
					width: 100%;
				}
				.caption {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					background: #f0f0f0;
					font-size: 0.9rem;
					border: 1px solid black;
					text-align: center;
					line-height: 1rem;
				}
				@media (max-width: 1199px) {
					.image {
					}
				}
			`}</style>{" "}
		</div>
	);
};

export default ImageCarousel;
