import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
} from "react";
import Link from "next/link";
import Row from "../components/Row";
import Box from "../components/Box";
import Moment from "react-moment";
import { useRouter } from "next/router";
import {
	client,
	linkResolver,
	apiEndpoint,
	accessToken,
} from "../prismic-configuration";
import categoryColors from "../util/CategoryColors";

const CategoryImageList = (props) => {
	const [categoryPostsData, setCategoryPostsData] = useState(props.data);
	useEffect(() => {
		setCategoryPostsData(props.data);
	}, [props]);
	let pageReady = categoryPostsData;
	return pageReady ? (
		<>
			{categoryPostsData.map((item, i) => {
				const showDate = !["get_involved"].includes(item.type);
				return (
					<div className={`category-image-list`} key={i}>
						<Row
							className={`bg-light-green list-item fd-column preview h-100 `}
						>
							<Link
								href={linkResolver(item)}
								as={linkResolver(item)}
								passHref
							>
								<a className={`category-link b-bottom h-100`}>
									<h2 className="ff-favorit-light">
										{item.data.title}
									</h2>
									&nbsp;&nbsp;&nbsp;&nbsp;
									{showDate && (
										<h2 className="date ff-favorit-mono tt-uppercase">
											<Moment
												format="MM.DD.YYYY"
												date={item.data.date}
											></Moment>
										</h2>
									)}
								</a>
							</Link>
						</Row>

						<Row
							className={`bg-light-green ${
								props.postList
									? `two-column-image`
									: `two-column-image`
							} ${props.postList ? "h-300" : "h-300"} ${
								i === props.data.length - 1 ||
								(props.postList &&
									props.data.length % 2 === 0 &&
									i === props.data.length - 2)
									? "bb-none"
									: ""
							} `}
						>
							<Box className="category-image border">
								<Link
									href={linkResolver(item)}
									as={linkResolver(item)}
									passHref
								>
									<a
										className="category-image-link"
										style={{
											backgroundImage: `url(${
												item.data.preview_image
													? item.data.preview_image
															.url
													: ``
											})`,
										}}
									></a>
								</Link>
							</Box>
							<Box className="p-1 ais">
								<p
									className={`ff-favorit-light ${
										props.postList
											? "small-text"
											: "small-text"
									}`}
								>
									{item.data.description}
								</p>
								<Link
									href={linkResolver(item)}
									as={linkResolver(item)}
									passHref
								>
									<a
										className={`hover mr-a mb-1rem ff-favorit-light tt-uppercase ${
											props.postList
												? "small-text"
												: "small-text"
										}`}
										href=""
									>
										Read Story
									</a>
								</Link>
							</Box>
						</Row>
						<style jsx>{`
								.category-image-list {
									width: 100%;
								}
								.category-image-list-wrapper .category-image-list:last-child .row:last-child {
									border-bottom: 0 !important;
								}
								h2 a {
									font-size: 1.5rem;
									color: black;
								}
								h2 a:hover {
									color: #704cff;
								}
								.hover:hover {
									color: #ffb74c;
								}
								.category-link {
									color: black;
									width: 100%;
									margin: 0 -25px;
									padding 0 25px;
									display: flex;
									align-items: center;
								}
								
								.category-link:hover {
									background: ${categoryColors[item.type].color};
								}
								
								.category-image-link {
									height: 100%;
									width: 100%;
									background-size: cover;
									background-position: center;
								}
								
								.category-link h2 {
									font-size: 2.2vw;
									line-height: 2.4vw;
									display: inline-block;
									margin: 5px 0 0;
								}

								.preview {
									align-items: flex-start;
								}
								.h-120 h2 {
									margin: 30px 0;
									font-size: 3.5rem;
									line-height: 4rem;
								}
								.mr-a {
									margin-right: auto;
								}

								.mb-1rem {
									margin-bottom: 1rem;
								}
								@media (max-width: 1199px) {
									.category-image-link {
										// height: 200px;
										height: 66.66vw;
										border-right: 0;
										border-bottom: 1px solid black;
									}
									.category-link {
										color: black;									
										padding: 0 1rem;
										margin: 0 -1rem;
									}
									.category-link h2 {
										font-size: 1rem;
										line-height: 1.25rem;
										margin: 2px 0 0;
									}
									// .date {
									// 	display: none;
									// }
								}
							`}</style>
					</div>
				);
			})}
		</>
	) : (
		<>
			<Row className={`bg-light-green b-none`}>
				<h2 className="ff-favorit-light tt-uppercase tac">
					No Posts Found
				</h2>
			</Row>
			<Row className={`bg-light-green b-none`}>
				<h2 className="ff-favorit-light tt-uppercase tac">
					<a className="fz-2" href="/blog/madhappy">
						View All
					</a>
				</h2>
			</Row>
		</>
	);
};

export default CategoryImageList;
