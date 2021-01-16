import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import Row from "../components/Row";
import Box from "../components/Box";
import SearchNewsletterBar from "../components/SearchNewsletterBar";

const Footer = (props) => {
	const [child, setChild] = useState(props.children);

	const year = new Date().getFullYear();

	return (
		<>
			<Row className="h-100 bt-mobile bg-light-green aic hidden-desktop">
				<a href="/about" className="c-black view-more-link white-hover">
					<h2 className="ff-favorit-light tt-uppercase tac">
						About Madhappy
					</h2>
				</a>
			</Row>
			<SearchNewsletterBar
				searchMargin={props.searchMargin}
				searchBorder={props.searchBorder}
			/>

			<Row
				className={`footer bg-green two-column ${
					props.className ? props.className : ""
				}`}
			>
				<Box className="w-50p">
					<Row className="list-item no-border">
						<h2 className="ff-favorit-light tt-uppercase small-margin">
							<a
								href="https://www.madhappy.com"
								target="_blank"
								className={`footer-link`}
							>
								Shop
							</a>
						</h2>
					</Row>
					<Row className="list-item no-border">
						<h2 className="ff-favorit-light tt-uppercase small-margin">
							<a href="/about" className={`footer-link`}>
								About
							</a>
						</h2>
					</Row>
					<Row className="list-item no-border">
						<h2 className="ff-favorit-light tt-uppercase small-margin">
							<a
								href="https://instagram.com/madhappy"
								target="_blank"
								className={`footer-link`}
							>
								Instagram
							</a>
						</h2>
					</Row>
				</Box>
				<Box className="mt-mobile-15">
					<Row className="list-item no-border mt-auto jc-end">
						<h2 className="ff-favorit-light tt-uppercase small-margin tar tal-mobile footer-link small-mobile no-hover">
							Copyright © {year}, Madhappy.
						</h2>
					</Row>
				</Box>
				<style global jsx>{`
					.footer {
						padding: 25px 0;
						border-top: 1px solid black;
						border-bottom: 0;
					}
					.footer-link {
						color: black;
						font-size: 2.2vw;
						line-height: 3vw;
					}
					.footer-link:hover {
						color: #704cff;
					}
					.footer-link.no-hover:hover {
						color: black;
					}
					.footer-logo {
						max-width: 100px;
						margin-left: auto;
					}

					.hidden-desktop {
						display: none;
					}

					.footer-credit a {
						font-size: 1rem;
						line-height: 1rem;
						color: black;
					}
					.footer-link a:hover {
						color: #704cff;
					}

					@media (max-width: 1199px) {
						.mt-mobile-15 {
							margin-top: 15px;
						}
						.mt-mobile {
							margin-top: 25px;
						}
						.footer-logo {
							margin-left: 1rem;
							max-width: 100px;
							align-self: flex-start;
						}
						.hidden-desktop {
							display: block;
						}
						.hidden-mobile {
							display: none;
						}
						.small-mobile {
							font-size: 1rem;
						}
						.footer-link {
							font-size: 1rem;
							line-height: 1.75rem;
						}
						.footer-credit a {
							font-size: 12px;
						}
					}
				`}</style>
			</Row>
		</>
	);
};

export default Footer;
