import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Row from "../components/Row";
import { useInputChange } from "../util/useInputChange";

const SearchNewsletterBar = (props) => {
	const [child, setChild] = useState(props.children);
	const [input, handleInputChange] = useInputChange();
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [invalidEmail, setInvalidEmail] = useState(false);

	const latestInput = useRef();
	useEffect(() => {
		latestInput.current = input;
	}, [input]);

	const validateEmail = (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateEmail(latestInput.current.newsletter)) {
			console.log("is email");
			fetch("/.netlify/functions/newsletter", {
				body: JSON.stringify(latestInput.current.newsletter),
				method: "POST",
			})
				.then((response) => {
					setFormSubmitted(true);
					return response;
				})
				.catch((error) => {
					setFormSubmitted(true);
					return error;
				});
		} else {
			setInvalidEmail(true);
		}
	};

	return (
		<div className={`search-newsletter-bar bt-none-mobile`}>
			<Row className="bg-tan bb-none bt-none-mobile b-right b-right-none-mobile h-100">
				<form className="search-form" action="/search" method="get">
					<input
						className="bg-tan"
						type="text"
						name="tag"
						placeholder="SEARCH"
					/>
					<button type="submit">Submit</button>
				</form>
			</Row>
			<Row
				key={invalidEmail + formSubmitted}
				className="bg-tan bb-none bt-mobile h-100"
			>
				<form className="newsletter-form" onSubmit={handleSubmit}>
					<input
						ref={latestInput}
						className="bg-tan newsletter-input"
						type="text"
						name="newsletter"
						placeholder={
							formSubmitted
								? "Thank You For Signing Up"
								: invalidEmail
								? "Enter A Valid Email"
								: "Join Our Newsletter"
						}
						onChange={handleInputChange}
						disabled={formSubmitted}
					/>
					<input
						className="newsletter-submit bg-tan"
						type="text"
						name="tag"
						placeholder="SUBMIT"
					/>
				</form>
			</Row>
			<style jsx>{`
				.search-newsletter-bar {
					border-top: ${props.searchBorder ? "1px solid black" : "0"};
					margin-top: ${props.searchMargin ? "30px" : "0"};
					display: grid;
					grid-template-columns: 1fr 1fr;
				}
				form {
					width: 100%;
				}
				input[type="text"] {
					font-family: "Favorit-Light", helvetica, sans-serif;
					font-size: 2.2vw;
					width: 100%;
					height: 100%;
					text-align: center;
					appearance: none;
					border: 0;
					color: black;
					text-transform: uppercase;
					display: block;
					margin: 0 auto;
					outline: 0;
				}
				input[type="text"]:focus {
					background: linear-gradient(
						90deg,
						#ffeb00 0%,
						#4ca1ff 33.3333%,
						#ff58ff 66.6666%,
						#ffb74c 100%
					);
				}

				input[type="text"]::placeholder {
					color: black;
					text-align: center;
				}
				button,
				input[type="submit"] {
					display: none;
				}
				input[type="text"].newsletter-input {
					width: 70%;
					float: left;
				}
				input.newsletter-submit {
					font-family: "Favorit-Light", helvetica, sans-serif;
					font-size: 2.2vw;
					width: 20%;
					height: 100%;
					display: inline-block;
					background: white;
					border: 0;
					float: right;
					text-transform: uppercase;
					border-left: 1px solid black;
				}
				input.newsletter-submit:hover {
					background: #f0f0f0 !important;
					cursor: pointer;
				}
				@media (max-width: 1199px) {
					.search {
						border-top: 0;
					}
					input[type="text"] {
						font-size: 1rem;
					}
					.search-newsletter-bar {
						grid-template-columns: 1fr;
					}
				}
			`}</style>
		</div>
	);
};

export default SearchNewsletterBar;
