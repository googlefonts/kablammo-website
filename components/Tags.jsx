import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Row from "../components/Row";

const Tags = ({ tags, className }) => {
	return (
		<Row
			className={`tags ${
				tags.length > 0 ? `two-column` : ` bb-none`
			} aic bg-gray fd-column b-top bb-none`}
		>
			<div className={`text-wrapper ${tags.length > 0 ? `b-right` : ``}`}>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/stories`}
				>
					<span className="c-pink">&#x270e;</span>
					&nbsp;stories&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/interviews`}
				>
					<span className="c-blue">♡</span>
					&nbsp;interviews&nbsp;
				</a>
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/toolkits`}
				>
					<span className="c-green">☞</span>
					&nbsp;toolkits&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy`}
				>
					<span className="c-purple c-black-link">☻</span>
					&nbsp;madhappy&nbsp;
				</a>
				<br />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/podcasts-playlists`}
				>
					<span className="c-red">&#x266b;</span>&nbsp;playlists&nbsp;
				</a>
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture`}
				>
					<span className="c-yellow">☀</span>
					&nbsp;culture&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/get-involved`}
				>
					<span className="c-orange">&#x2730;</span>&nbsp;get
					involved&nbsp;
				</a>{" "}
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/get-help`}
				>
					<span className="c-turquoise">&#x260f;</span>&nbsp;get
					help&nbsp;
				</a>
			</div>
			{tags.length > 0 && (
				<div className="text-wrapper">
					<p className="d-ib m-none ff-favorit-mono small-text">
						tags:&nbsp;
					</p>
					{tags &&
						tags.map((x, i) => {
							return (
								<a
									key={i}
									className="ff-favorit-mono small-text c-black-link"
									href={`/search?tag=${x}`}
								>
									{x}&nbsp;
								</a>
							);
						})}
				</div>
			)}
			<style global jsx>{`
				.tags {
					margin-top: 70px;
				}
				.tags .text-wrapper {
					padding: 1rem;
					margin: 0;
					max-width: 100%;
					text-align: center;
				}
				.c-black-link {
					color: black;
				}
				.c-black-link:hover {
					color: #704cff;
				}
				br.mobile {
					display: none;
				}

				@media (max-width: 1199px) {
					.b-right {
						border-right: 0;
						border-bottom: 1px solid black;
					}
					br.mobile {
						display: block;
					}
				}
			`}</style>
		</Row>
	);
};

export default Tags;
