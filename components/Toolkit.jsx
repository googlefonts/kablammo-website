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

const Toolkit = (props) => {
	const router = useRouter();
	const id = router.query.id ? router.query.id : "";
	const [doc, setDocData] = React.useState(null);
	const [post, setPostData] = React.useState(null);
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
	React.useEffect(() => {
		const fetchData = async () => {
			const response = await client
				.query(Prismic.Predicates.at("document.type", "home_page"))
				.then((response) => setDocData(response.results[0]));
		};
		fetchData();
	}, []);

	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await client
	// 			.query(Prismic.Predicates.any("document.type", ["toolkits"]), {
	// 				orderings: "[my.toolkits.sort_order]"
	// 			})
	// 			.then(response => setPostData(response.results));
	// 	};

	// 	fetchData();
	// }, []);

	const fetchPostData = async () => {
		await client
			.query(Prismic.Predicates.at("document.id", id), { pageSize: 1 })
			.then((response) => setPostData(response.results));
	};

	React.useEffect(() => {
		id && fetchPostData();
	}, [id]);

	const homePageData = doc ? doc.data : null;
	const postData = post ? (post[0] ? post[0].data : null) : null;
	const tags = post ? (post[0] ? post[0].tags : null) : null;

	const pageReady = homePageData && postData;

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
						<title>{postData.title} | The Local Optimist</title>
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
					<Layout padding={100}>
						{postData && (
							<Row className={`bg-light-green b-none`}>
								<h1 className={`post-title tt-uppercase`}>
									{postData.title}
								</h1>
								<Row
									className={`post bg-light-green b-none fd-column`}
								>
									<div className={`text-wrapper tac`}>
										<h2>{postData.description}</h2>
									</div>
								</Row>
							</Row>
						)}
						<div className="toolkit-wrapper">
							{postData.toolkit_item.map((x, i) => {
								return (
									<Row
										key={i}
										className={`bg-light-green bg-${x.box_color.toLowerCase()} h-450mh two-column ${
											i === 0 ? `b-top` : ``
										} ${
											i ===
											postData.toolkit_item.length - 1
												? `bb-none`
												: ``
										}`}
									>
										<Box className={`border center p-1`}>
											<h2 className="ff-favorit-mono big-title tt-uppercase tac">
												{x.title}
											</h2>
										</Box>
										<Box className="ais">
											<Box className="ais p-1 toolkit-text">
												{RichText.render(x.description)}
											</Box>
											{/* <Row className="h-100 aic bg-${x.data.box_color.toLowerCase()} last-row bb-none">
												<a
													href={x.link}
													className="view-more-link ff-favorit-light tt-uppercase"
												>
													<h2 className="ff-favorit-light tt-uppercase">
														{x.button_text}
													</h2>
												</a>
											</Row>*/}
										</Box>
									</Row>
								);
							})}
						</div>
						<Footer searchBorder />
					</Layout>
					<style global jsx>{`
						.toolkit-wrapper {
							margin-top: 40px;
						}
						.toolkit-text p,
						.toolkit-text ul,
						.toolkit-text ol,
						.toolkit-text a {
							font-size: 1rem;
							line-height: 1.5rem;
						}
						.toolkit-text ul,
						.toolkit-text ol {
							padding-left: 1rem;
							margin-top: 1rem;
						}
						@media (max-width: 1199px) {
							.toolkit-wrapper {
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

export default Toolkit;
