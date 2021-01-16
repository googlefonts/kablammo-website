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
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const GetHelpPage = ({ homePageData, pageData, postsData }) => {
	const pageReady = homePageData && pageData && postsData;
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
					<Layout padding={100}>
						{pageData && (
							<Row className={`bg-light-green b-none`}>
								<h1 className={`post-title tt-uppercase`}>
									{pageData.title}
								</h1>
								<Row
									className={`post bg-light-green b-none fd-column`}
								>
									<div className={`text-wrapper tac`}>
										<h2>{pageData.description}</h2>
									</div>
								</Row>
							</Row>
						)}
						<div className="get-help-wrapper">
							{postsData.map((x, i) => {
								return (
									<Row
										key={i}
										className={`bg-light-green bg-${x.data.box_color.toLowerCase()} h-450mh two-column ${
											i === 0 ? `b-top` : ``
										} ${
											i === postsData.length - 1
												? `bb-none`
												: ``
										}`}
									>
										<Box className={`border center p-1`}>
											<h2 className="ff-favorit-mono big-title tt-uppercase tac">
												{x.data.title}
											</h2>
										</Box>
										<Box className="ais">
											<Box className="ais p-1">
												{RichText.render(
													x.data.description
												)}
											</Box>
											<Row className="h-100 aic bg-${x.data.box_color.toLowerCase()} last-row bb-none">
												<a
													href={x.data.link}
													className="view-more-link ff-favorit-light tt-uppercase"
												>
													<h2 className="ff-favorit-light tt-uppercase">
														{x.data.button_text}
													</h2>
												</a>
											</Row>
										</Box>
									</Row>
								);
							})}
						</div>
						<Footer searchBorder />
					</Layout>
					<style global jsx>{`
						.get-help-wrapper {
							margin-top: 40px;
						}

						@media (max-width: 1199px) {
							.get-help-wrapper {
								margin-top: 0;
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

export default GetHelpPage;
