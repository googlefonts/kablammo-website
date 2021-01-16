import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Row from "./Row";

const Comments = props => {
	const [child, setChild] = useState(props.children);
	const router = useRouter();
	const pageUrl = process.env.siteUrl + router.asPath;
	/**
	 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
	 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
	/*
	var disqus_config = function () {
	this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
	this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
	};
	*/
	window.parent = {
		location: {
			host: process.env.siteUrl,
			pathname: router.asPath
		}
	};

	return (
		<div className={`comments-wrapper`}>
			<div id="commento"></div>
			<style jsx>{`
				.comments-wrapper {
					padding: 25px 10vw 0;
					margin: 0 auto;
				}
				@media (max-width: 1199px) {
					.comments-wrapper {
						padding: 1rem;
					}
				}
			`}</style>
		</div>
	);
};

export default Comments;
