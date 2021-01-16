import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import Row from "../components/Row";
import Moment from "react-moment";
import {
	client,
	linkResolver,
	apiEndpoint,
	accessToken
} from "../prismic-configuration";
import categoryColors from "../util/CategoryColors";

const CategoryList = ({ data, preview, media, postList }) => {
	return (
		data && (
			<>
				{data.map((item, i) => {
					const showDate = ![
						"get_involved",
						"podcasts_playlists"
					].includes(item.type);
					const isInterview = ["interviews"].includes(item.type);
					return (
						<Row
							key={i}
							className={`bg-light-green list-item fd-column ${
								preview
									? "preview h-280"
									: postList
									? "h-120"
									: "h-100"
							} ${i === data.length - 1 ? "bb-none" : ""} ${
								media ? "h-280 bb-none" : ""
							}`}
						>
							<Link
								href={linkResolver(item)}
								as={linkResolver(item)}
								passHref
							>
								<a className={`category-link`}>
									<h2 className="ff-favorit-light">
										{item.data.title}
										&nbsp;&nbsp;&nbsp;&nbsp;
										{showDate && (
											<span className="date ff-favorit-mono tt-uppercase">
												<Moment
													format="MM.DD.YYYY"
													date={item.data.date}
												></Moment>
											</span>
										)}
									</h2>
								</a>
							</Link>
							<style jsx>{`
								h2 a:hover {
									color: #704cff;
								}
								h2 a {
									font-size: 1.5rem;
									color: black;
								}
								.category-link {
									color: black;
									width: 100%;
									margin: 0 -25px;
									padding 0 25px;
									display: flex;
									align-items: center;
									background: none;
								}
								.category-link h2 {
									font-size: 2.2vw;
									line-height: 2.4vw;
									display: inline-block;
									margin: 5px 0 0;
								}
								.category-link:focus {
									background: none;
								}

								.category-link:hover {
									background: ${categoryColors[item.type].color};
								}
								.preview {
									align-items: flex-start;
								}
								@media (max-width: 1199px) {
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
									// .date time {
									// 	margin-top: 16px;
									// }
								}
							`}</style>
						</Row>
					);
				})}
			</>
		)
	);
};

export default CategoryList;
