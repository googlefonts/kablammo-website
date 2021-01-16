import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import {
	client,
	linkResolver,
	apiEndpoint,
	accessToken,
} from "../prismic-configuration";
import Row from "./Row";
import Box from "./Box";

const Categories = ({ data, pageData }) => {
	const posts = data;
	const c = data.map((x, i) => x.data.category);
	const s = data.map((x, i) => x.data.subcategory);
	const categories = [...new Set(c)];
	const subcategories = [...new Set(s)];
	return (
		<div className={`categories`}>
			{categories &&
				categories.map((x, i, categoriesArray) => (
					<div key={i}>
						<Row
							className={`h-100 bg-orange aic ${
								i === 0 ? `b-top mt-40` : ``
							}`}
						>
							<h2 className={`ff-favorit-light tt-uppercase tac`}>
								{x}
							</h2>
						</Row>

						{posts
							.filter((f) => f.data.category === x)
							.map((item, z, postsArray) => (
								<div key={z}>
									<Row
										className={`bg-light-green two-column ${
											z === postsArray.length - 1 &&
											i === categoriesArray.length - 1
												? "bb-none"
												: ""
										}`}
									>
										<Box className="category-image h-a border">
											<a
												href={
													item.data.link
														? item.data.link
														: `#`
												}
												target="_blank"
												className="category-image-link"
												style={{
													backgroundImage: `url(${item.data.preview_image.url})`,
												}}
											>
												{pageData.credits &&
													i === 0 &&
													z === 0 && (
														<span className="ff-favorit-mono credit">
															{pageData.credits}
														</span>
													)}
											</a>
										</Box>
										<Box className="">
											<p
												className={`p-1 categories-post-title c-purple ff-favorit-light tt-uppercase`}
											>
												{item.data.title}
											</p>
											<p
												className={`p-1 categories-post-description ff-favorit-light`}
											>
												{item.data.description}
											</p>
											<Row className="h-100 aic bg-white last-row bb-none">
												<a
													href={
														item.data.link
															? item.data.link
															: `#`
													}
													target="_blank"
													className="view-more-link ff-favorit-light tt-uppercase"
												>
													<h2 className="ff-favorit-light tt-uppercase">
														Learn More
													</h2>
												</a>
											</Row>
										</Box>
									</Row>
								</div>
							))}
					</div>
				))}
			<style jsx>{`
				.categories {
					width: 100%;
				}
				.categories-post-title {
					margin-bottom: 0;
					padding-bottom: 0;
					align-self: start;
				}
				.categories-post-description {
					margin-top: 0;
				}
				.category-image-link {
					height: 33.33vw;
					width: 100%;
					background-size: cover;
					background-position: center;
					position: relative;
				}
				.credit {
					background: white;
					border-top: 1px solid black;
					border-right: 1px solid black;
					position: absolute;
					left: 0;
					bottom: 0;
					color: black;
					font-size: 0.9rem;
					padding: 0.25rem 1rem 0;
				}
				@media (max-width: 1199px) {
					.category-image-link {
						height: 66.6666vw;
						border-right: 0;
						border-bottom: 1px solid black;
					}
					.credit {
						background: white;
						border-bottom: 0;
						border-right: 0;
						border-top: 1px solid black;
						border-left: 1px solid black;
						position: absolute;
						right: 0;
						left: initial;
						bottom: 0;
						top: initial;
						color: black;
						font-size: 0.5rem;
						line-height: 1.25rem;
						padding: 0.25rem 0.5rem 0;
					}
				}
			`}</style>
		</div>
	);
};

export default Categories;
