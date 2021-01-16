import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
} from "react";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
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
import Tags from "./Tags";
import SliceZone from "./SliceZone";
import Layout from "./Layout";
import Loading from "./Loading";
import Comments from "./Comments";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const PostPage = (props) => {
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

	// if (id) fetchPostData();

	let postType = post ? (post[0] ? post[0].type : "") : "";
	switch (postType) {
		case "podcasts_playlists":
			postType = "Playlists";
			break;
		case "get_involved":
			postType = "Get Involved";
			break;
		default:
			postType = postType.charAt(0).toUpperCase() + postType.slice(1);
	}
	const pageReady = homePageData && postData;

	const showDate =
		pageReady &&
		!["get_involved", "podcasts_playlists"].includes(postData.type);

	const isInterview = pageReady && ["interviews"].includes(post[0].type);

	return pageReady ? (
		<div className={`index`}>
			<Head>
				<title>
					{postData.title} | {postType} | The Local Optimist
				</title>
				<meta name="description" content="The Local Optimist" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
				<meta charSet="utf-8" />
				<link rel="icon" type="image/png" href="/images/favicon.png" />
				<meta
					property="og:url"
					content={process.env.siteUrl + router.asPath}
				/>
				<meta property="og:type" content="article" />
				<meta property="og:title" content={postData.title} />
				<meta property="og:description" content={postData.title} />
				<meta
					property="og:image"
					content={
						postData.preview_image ? postData.preview_image.url : ""
					}
				/>
				<script
					async
					defer
					src="https://static.cdn.prismic.io/prismic.js?repo=the-local-optimist&new=true"
				></script>
				<script
					defer
					src="https://cdn.commento.io/js/commento.js"
					data-css-override="/css/commento.css"
					data-auto-init="true"
					data-no-fonts="true"
				>
					>
				</script>
			</Head>
			<Header data={homePageData} nav />
			<Layout padding={100}>
				<Row className="h-100 aic bg-gray">
					<h2 className="ff-favorit-light tac mobile-post-title">
						{postData.title}
						&nbsp;&nbsp;&nbsp;&nbsp;
						{showDate && (
							<span className="ff-favorit-mono tt-uppercase">
								<Moment
									format="MM.DD.YYYY"
									date={
										postData.date
											? postData.date
											: postData.first_publication_date
									}
								></Moment>
							</span>
						)}
					</h2>
				</Row>
				<Row className={`bg-light-green b-none`}>
					<h1 className={`post-title tt-uppercase`}>
						{postData.title}
					</h1>
				</Row>
				<SliceZone data={postData} />
				{postData.allowComments === "yes" && <Comments id={id} />}
				<Tags tags={tags} />
				<Footer searchBorder />
			</Layout>
			<style global jsx>{`
				.textarea-outer-wrapper .textarea-wrapper {
					background: none !important;
				}
			`}</style>
		</div>
	) : (
		<Loading />
	);
};

export default PostPage;
