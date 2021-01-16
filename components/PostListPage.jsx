import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useRef,
} from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Moment from "react-moment";
import { useRouter } from "next/router";
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
import CategoryImageList from "./CategoryImageList";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Header from "./Header";
import Layout from "./Layout";
import Categories from "./Categories";
import Filters from "./Filters";
import Loading from "./Loading";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const PostListPage = (props) => {
	const [postsData, setPostsData] = useState(props.postsData);
	useEffect(() => {
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

	useEffect(() => {
		setPostsData(props.postsData);
	}, [props.postsData]);

	let postType = props.postsData
		? props.postsData[0]
			? props.postsData[0].type
			: ""
		: "";
	let withImage, withCategories, padding;

	switch (postType) {
		case "podcasts_playlists":
			padding = 100;
			postType = "Playlists";
			withImage = true;
			break;
		case "get_involved":
			padding = 100;
			postType = "Get Involved";
			withCategories = true;
			break;
		case "get_help":
			padding = 100;
			break;
		case "stories":
			withImage = true;
			padding = 100;
			break;
		case "madhappy":
			withImage = true;
			padding = 100;
			break;
		case "culture":
			padding = 100;
			break;
		case "interviews":
			padding = 100;
			break;
		case "toolkits":
			padding = 100;
			break;
		default:
			break;
	}

	const tags = props.postsData
		? props.postsData[0]
			? props.postsData[0].tags
			: null
		: null;
	postType = postType.charAt(0).toUpperCase() + postType.slice(1);

	let pageReady = postsData;
	return (
		pageReady && (
			<div key={pageReady.length} className={`index`}>
				<Head>
					<title>{postType} | The Local Optimist</title>
					<meta name="description" content="The Local Optimist" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
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
				<Header data={props.homePageData} nav />
				<Layout padding={padding}>
					<Filters postType={postType} />
					{props.pageData && (
						<Row className={`bg-light-green b-none`}>
							<h1 className={`post-title tt-uppercase`}>
								{props.pageData.title}
							</h1>
							<Row
								className={`post bg-light-green b-none fd-column`}
							>
								<div className={`text-wrapper tac`}>
									<h2>{props.pageData.description}</h2>
								</div>
							</Row>
						</Row>
					)}
					{withImage ? (
						<div className="category-image-list-wrapper">
							<CategoryImageList data={postsData} postList />
						</div>
					) : withCategories ? (
						<div className="category-list-wrapper">
							<Categories
								data={postsData}
								pageData={props.pageData}
							/>
						</div>
					) : (
						<div className="category-list-wrapper">
							<CategoryList data={postsData} postList />
						</div>
					)}
					<Footer className={``} searchBorder />
				</Layout>
				<style global jsx>{``}</style>
			</div>
		)
	);
};

export default PostListPage;
