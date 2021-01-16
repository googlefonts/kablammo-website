import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import Row from "../components/Row";
import Box from "../components/Box";
import Moment from "react-moment";
import Button from "../components/Button";

const Carousel = ({ data, children }) => {
	const [child, setChild] = useState(children);

	return (
		<div className={`home-carousel`}>
			<Row className="h-100 bg-gray aic">
				<a
					href={data.button_link}
					className="c-black view-more-link white-hover"
				>
					<h2 className="ff-favorit-light tac">
						{data.featured_post_title}&nbsp;&nbsp;&nbsp;&nbsp;
						<span className="hide-mobile c-black ff-favorit-mono tt-uppercase">
							<Moment
								format="MM.DD.YYYY"
								date={data.featured_post_date}
							></Moment>
						</span>
					</h2>
				</a>
			</Row>
			<Row className="two-column bg-light-green tall">
				<Box
					className="border carousel-image"
					imageSrc={data.featured_post_image.url}
				>
					<a href={data.button_link} className="h-100p w-100p"></a>
				</Box>
				<Box className="">
					<div className="padding">
						<a href={data.button_link}>
							<h2 className="d-ib c-black ff-favorit-light fz-2 no-margin orange-hover">
								{data.featured_post_description}
							</h2>
						</a>
						<a href={data.button_link}>
							<p className="d-ib c-black ff-favorit-light orange-hover">
								{data.featured_post_sub_description}
							</p>
						</a>
						<a href={data.button_link}>
							<p className="ff-favorit-light tt-uppercase orange-hover d-ib">
								{data.button_text}
							</p>
						</a>
					</div>
				</Box>
			</Row>
			<style global jsx>{`
				.home-carousel {
				}
				.tall {
					min-height: 525px;
				}
				div.padding {
					box-sizing: border-box;
					padding: 2rem;
				}
				.d-ib {
					display: inline-block;
				}
				.orange-hover:hover {
					color: #ffb74c !important;
				}
				@media (max-width: 1199px) {
					.tall {
						height: auto;
					}
					.carousel-image {
						height: 66.6666vw;
						border-right: 0;
						border-bottom: 1px solid black;
					}
					div.padding {
						padding: 30px 1rem 20px;
					}
				}
			`}</style>
		</div>
	);
};

export default Carousel;
