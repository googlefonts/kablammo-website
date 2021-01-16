import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
} from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Media from "react-media";
import Moment from "react-moment";
import {
	client,
	linkResolver,
	apiEndpoint,
	accessToken,
} from "../prismic-configuration";
import ScrollingText from "./ScrollingText";
import Row from "./Row";
import Box from "./Box";
import BoxGrid from "./BoxGrid";
import CategoryList from "./CategoryList";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Header from "./Header";
import Layout from "./Layout";
import Loading from "./Loading";
import SliceZone from "./SliceZone";
import isBrowser from "../util/IsBrowser";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const DefaultPage = ({ homePageData, pageData }) => {
	React.useEffect(() => {
		process.env.NODE_ENV !== "development" &&
			ReactPixel.init("1074968789232506");
		process.env.NODE_ENV !== "development" && ReactPixel.pageView();
		process.env.NODE_ENV !== "development" &&
			ReactGA.initialize("UA-123981541-2");
		process.env.NODE_ENV !== "development" &&
			ReactGA.pageview(window.location.pathname + window.location.search);
		process.env.NODE_ENV !== "development" &&
			ReactPixel.init("2a3c957b-dec5-4c4b-b5f0-406ccda6cc34");
		process.env.NODE_ENV !== "development" && ReactPixel.pageView();
	});
	const pageReady = homePageData && pageData;
	const setOpen = (i) => {
		Array.from(document.getElementsByClassName("team-box")).forEach((x) => {
			isBrowser &&
				(window.innerWidth < 1119
					? (x.style.height = "66.6666vw")
					: (x.style.height = "350px"));
		});
		Array.from(document.getElementsByClassName("about-detail-box")).forEach(
			(x) => {
				x.style.display = "none";
			}
		);
		Array.from(document.getElementsByClassName("about-box")).forEach(
			(x) => {
				x.style.display = "flex";
			}
		);

		isBrowser &&
			(window.innerWidth < 1119
				? (document.getElementsByClassName("box-" + i)[0].style.height =
						"auto")
				: (document.getElementsByClassName("box-" + i)[0].style.height =
						"350px"));

		isBrowser &&
			(window.innerWidth < 1119
				? (document.getElementsByClassName("box-" + i)[0].style.height =
						"auto")
				: (document.getElementsByClassName("box-" + i)[0].style.height =
						"350px"));

		// document.getElementsByClassName("box-" + i)[0].style.height = "350px";
		document.getElementsByClassName("about-box-" + i)[0].style.display =
			"none";
		document.getElementsByClassName(
			"about-detail-box-" + i
		)[0].style.display = "flex";
	};
	return pageReady ? (
		<Media
			defaultMatches={{ mobile: false, tablet: false }}
			queries={{
				mobile: "(max-width: 599px)",
				tablet: "(min-width: 600px) and (max-width: 1199px)",
			}}
		>
			{(matches) => (
				<div
					className={`index ${
						matches.mobile
							? "mobile"
							: matches.tablet
							? "tablet"
							: ""
					}`}
				>
					<Head>
						<title>{pageData.title} | The Local Optimist</title>
						<meta name="description" content="The Local Optimist" />
						<meta
							name="viewport"
							content="initial-scale=1.0, width=device-width"
						/>
						<meta charSet="utf-8" />
						<link
							rel="icon"
							type="image/png"
							href="/images/favicon.png"
						/>
						<script
							async
							defer
							src="https://static.cdn.prismic.io/prismic.js?repo=the-local-optimist&new=true"
						></script>
					</Head>
					<Header data={homePageData} nav />
					<Layout padding={130}>
						<Row className={`bg-light-green b-none`}>
							<h1 className={`post-title tt-uppercase`}>
								{pageData.title}
							</h1>
						</Row>
						<SliceZone data={pageData} />
						{pageData.our_team && (
							<Row
								className={`team bg-light-green two-column b-top bb-none mt-40`}
							>
								{pageData.our_team.map((x, i) => {
									return (
										<Box
											key={i}
											className={`padding-mobile border-mobile b-bottom center team-box box-${i} ${
												i % 2 === 0 ||
												(i ===
													pageData.our_team.length -
														1 &&
													i % 2 === 1)
													? `border`
													: ``
											}`}
										>
											<div
												onClick={() => setOpen(i)}
												className={`about-box about-box-${i}`}
											>
												<a
													className={`about-link tac c-black pink ff-favorit-light tt-uppercase`}
												>
													{x.name}
												</a>
											</div>
											<div
												onClick={() => setOpen(i)}
												className={`about-detail-box about-detail-box-${i}`}
											>
												<Row
													className={`bg-light-green two-column row-about bb-none`}
												>
													<Box className="category-image about-image border">
														<a
															className="about-image-link"
															style={{
																backgroundImage: `url(${
																	x.image
																		? x
																				.image
																				.url
																		: ``
																})`,
															}}
														></a>
													</Box>
													<Box className="p-1">
														<p
															className={`about-text c-purple tt-uppercase`}
														>
															{x.name}
														</p>
														<div
															className={`about-text ff-favorit-light`}
														>
															{RichText.render(
																x.team_description
															)}
														</div>
													</Box>
												</Row>
											</div>
										</Box>
									);
								})}
							</Row>
						)}
						<Footer searchBorder />
					</Layout>
					<style global jsx>{`
						.team > .box:nth-last-child(1) {
							border: initial;
						}

						.team > .box.border {
							border-right: 1px solid black !important;
						}

						.about-link {
							height: 100%;
							width: 100%;
							display: flex;
							justify-content: center;
							align-items: center;
						}
						.about-link:hover {
							background-color: #704cff;
						}
						.about-box {
							cursor: pointer;
							height: 100%;
							width: 100%;
							display: flex;
						}
						.about-detail-box {
							display: none;
							align-self: start;
							flex-direction: column;
							// padding: 2rem;
							height: 100%;
							width: 100%;
							box-sizing: border-box;
						}
						.about-detail-box p {
							margin: 0;
						}
						.about-image-link {
							height: 100%;
							width: 100%;
							background-position: center;
							background-size: cover;
						}
						.row-about {
							height: 100% !important;
						}
						.about-text {
							align-self: start;
						}
						.team > .box:nth-last-child(1),
						.team > .box:nth-last-child(2) {
							border-bottom: 0;
						}
						.about-image {
							height: 100% !important;
						}
						.team-box {
							height: 350px;
						}
						@media (max-width: 1199px) {
							.team > .category-image.border {
								border-top: 1px solid black !important;
							}
							.row-about {
								height: auto !important;
							}
							.about-link {
								height: auto;
							}
							.about-box {
								height: auto;
							}
							.about-detail-box {
								height: auto;
							}
							.about-image {
								height: 66.6666vw !important;
							}
							.about-image-link {
								height: 66.6666vw;
								background-position: top;
							}
							.team > .box {
								height: 66.6666vw;
							}
							.team > .box:nth-last-child(2) {
								border-bottom: 1px solid black;
							}
							.team > .box.border,
							.team > .border-mobile {
								border-right: 0 !important;
							}
						}
					`}</style>
				</div>
			)}
		</Media>
	) : (
		<Loading />
	);
};

export default DefaultPage;
