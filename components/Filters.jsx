import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Row from "../components/Row";

const MadhappyFilters = () => {
	return (
		<Row className="filters bg-gray">
			<div className="text-wrapper">
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy`}
				>
					<span className="c-purple">☒</span>
					&nbsp;all&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy?filter=pop-ups`}
				>
					<span className="c-purple">⌂</span>
					&nbsp;pop-ups&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy?filter=product releases`}
				>
					<span className="c-purple">☆</span>
					&nbsp;product releases&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy?filter=collaborations`}
				>
					<span className="c-purple">☏</span>
					&nbsp;collaborations&nbsp;
				</a>
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy?filter=neighborhood guides`}
				>
					<span className="c-purple">⚘</span>
					&nbsp;neighborhood guides&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy?filter=events`}
				>
					<span className="c-purple">⚹</span>
					&nbsp;events&nbsp;
				</a>{" "}
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy/post?id=XmAy_hIAACQAPtfO`}
				>
					<span className="c-purple">☷</span>
					&nbsp;factory tours&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/madhappy/post?id=XjRxLBAAACMAqkHM`}
				>
					<span className="c-purple">∟</span>
					&nbsp;the size guide&nbsp;
				</a>
			</div>
		</Row>
	);
};

const CultureFilters = () => {
	return (
		<Row className="filters bg-gray">
			<div className="text-wrapper">
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture`}
				>
					<span className="c-purple">☒</span>
					&nbsp;all&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture?filter=sports`}
				>
					<span className="c-purple">♞</span>
					&nbsp;sports&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture?filter=music`}
				>
					<span className="c-purple">♪</span>
					&nbsp;music&nbsp;
				</a>{" "}
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture?filter=movies`}
				>
					<span className="c-purple">☾</span>
					&nbsp;movies&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture?filter=art`}
				>
					<span className="c-purple">⚚</span>
					&nbsp;art&nbsp;
				</a>{" "}
				<br className="mobile" />
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture?filter=fashion`}
				>
					<span className="c-purple">☆</span>
					&nbsp;fashion&nbsp;
				</a>
				<a
					className="ff-favorit-mono small-text c-black-link"
					href={`/blog/culture?filter=team picks`}
				>
					<span className="c-purple">☞</span>
					&nbsp;team picks&nbsp;
				</a>
			</div>
		</Row>
	);
};

const Filters = (props) => {
	return (
		<>
			{props.postType === "Madhappy" ? MadhappyFilters() : null}
			{props.postType === "Culture" ? CultureFilters() : null}
			<style global jsx>{`
				.filters .text-wrapper {
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
					.filters .small-text {
						font-size: 12px;
						line-height: 14px;
					}
				}
			`}</style>
		</>
	);
};

export default Filters;
