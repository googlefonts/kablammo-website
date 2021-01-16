import React, { useEffect } from "react";
import App from "next/app";
import StoreProvider from "../util/Context";
const isBrowser = typeof window !== "undefined";
import "pure-react-carousel/dist/react-carousel.es.css";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		let vh = isBrowser ? window.innerHeight * 0.01 : null;
		let vw = isBrowser ? window.innerWidth * 0.01 : null;
		// Then we set the value in the --vh custom property to the root of the document
		if (isBrowser) {
			document.documentElement.style.setProperty("--vh", `${vh}px`);
			document.documentElement.style.setProperty("--vw", `${vw}px`);
			// We listen to the resize event
			window.addEventListener("resize", () => {
				// We execute the same script as before
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty("--vh", `${vh}px`);
				let vw = window.innerWidth * 0.01;
				document.documentElement.style.setProperty("--vw", `${vw}px`);
			});
		}

		return (
			<StoreProvider>
				<div className={`bg-light-green`}>
					<Component {...pageProps} />
				</div>
				<style global jsx>{`
					@font-face {
						font-family: "Favorit-Mono";
						src: url("/fonts/Favorit_Mono-Light.otf");
					}

					@font-face {
						font-family: "Favorit-Regular";
						src: url("/fonts/Favorit_Regular.otf");
					}

					@font-face {
						font-family: "Favorit-Light";
						src: url("/fonts/Favorit_Light.otf");
					}

					@font-face {
						font-family: "Favorit-Medium";
						src: url("/fonts/Favorit_Medium.otf");
					}

					@font-face {
						font-family: "Favorit-Bold";
						src: url("/fonts/Favorit_Bold.otf");
					}

					@font-face {
						font-family: "GT-Maru-Beta";
						src: url("/fonts/GT-Maru-Beta-v1-Bold.otf");
					}

					body {
						margin: 0;
						font-family: "Favorit-Light", helvetica, sans-serif;
						background: #3b8364;
					}

					#__next,
					.index {
						position: relative;
						height: 100%;
						overflow: hidden;
					}

					// TYPE

					h1 {
						line-height: 2.2rem;
					}

					h1,
					h3,
					h3 a,
					h1 a {
						font-weight: 100;
						font-size: 1.5rem;
					}

					h2 {
						font-weight: 100;
						font-size: 2.2vw;
						line-height: 2.4vw;
					}

					h3 {
						font-family: "Favorit-Light", helvetica, sans-serif;
						line-height: 2rem;
						font-weight: 100;
					}

					h4 {
						font-size: 2rem;
						line-height: 3rem;
						text-transform: uppercase;
					}

					h5 {
						font-family: "Favorit-Mono", helvetica, sans-serif;
						font-size: 1.5rem;
						text-transform: uppercase;
						margin: 0 0 1rem;
					}

					p,
					a,
					ol,
					ul {
						font-size: 1.5rem;
						line-height: 2.25rem;
					}

					ol,
					ul {
						margin-top: 0;
					}

					a {
						color: #704cff;
						text-decoration: none;
					}

					.small-text {
						font-size: 1rem;
						line-height: 1.75rem;
					}

					.fz-2 {
						font-size: 2rem;
						line-height: 2.5rem;
					}

					.fz-3 {
						font-size: 3rem;
					}

					img {
						max-width: 100%;
						display: block;
					}

					.no-margin {
						margin: 0;
					}
					.padding-tb-none {
						padding-top: 0 !important;
						padding-bottom: 0 !important;
					}

					.small-margin {
						margin: 0;
					}

					.ff-favorit {
						font-family: "Favorit-Regular", helvetica, sans-serif;
					}

					.ff-favorit-medium {
						font-family: "Favorit-Medium", helvetica, sans-serif;
					}

					.ff-favorit-light {
						font-family: "Favorit-Light", helvetica, sans-serif;
					}

					.ff-favorit-mono {
						font-family: "Favorit-Mono", helvetica, sans-serif;
					}

					.ff-gt-maru-beta {
						font-family: "GT-Maru-Beta", helvetica, sans-serif;
					}

					.c-black {
						color: black !important;
					}

					.c-pink {
						color: #ff58ff !important;
					}

					.c-blue {
						color: #4ca1ff !important;
					}

					.c-green {
						color: #4cff73 !important;
					}

					.c-purple {
						color: #704cff !important;
					}

					.c-red {
						color: #ff4c61 !important;
					}

					.c-orange {
						color: #ffb74c !important;
					}

					.c-turquoise {
						color: #4cfff4 !important;
					}

					.c-yellow {
						color: #ffeb00 !important;
					}

					.tt-uppercase {
						text-transform: uppercase;
					}

					.bg-white {
						background-color: white !important;
					}

					.bg-white-desktop {
						background-color: white !important;
					}

					.bg-light-green {
						background-color: #f0fddf !important;
					}

					.bg-gray {
						background-color: #f0f0f0 !important;
					}

					.bg-yellow {
						background-color: #ffeb00 !important;
					}

					.bg-pink {
						background-color: #ff58ff !important;
					}

					.bg-blue {
						background-color: #4ca1ff !important;
					}

					.bg-green {
						background-color: #4cff73 !important;
					}

					.bg-red {
						background-color: #ff4c61 !important;
					}

					.bg-orange {
						background-color: #ffb74c !important;
					}

					.bg-turquoise {
						background-color: #4cfff4 !important;
					}

					.bg-purple {
						background-color: #704cff !important;
					}

					.bg-tan {
						background-color: #f0e0b6 !important;
					}

					.bg-gradient {
						background: linear-gradient(
							90deg,
							#ffb74c 0%,
							#ff58ff 33.3333%,
							#4ca1ff 66.6666%,
							#ffeb00 100%
						);
					}
					.box-link {
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						color: #000000;
						font-size: 1.5rem;
						padding-top: 4px;
					}
					.category-link {
						color: black;
					}
					.box-link.pink.active,
					.box-link.pink:hover {
						background: #ff58ff;
					}
					.box-link.blue.active,
					.box-link.blue:hover {
						background: #4ca1ff;
					}
					.box-link.green.active,
					.box-link.green:hover {
						background: #4cff73;
					}
					.box-link.red.active,
					.box-link.red:hover {
						background: #ff4c61;
					}
					.box-link.orange.active,
					.box-link.orange:hover {
						background: #ffb74c;
					}
					.box-link.turquoise.active,
					.box-link.turquoise:hover {
						background: #4cfff4;
					}
					.box-link.purple.active,
					.box-link.purple:hover {
						background: #704cff;
					}
					.box-link.yellow.active,
					.box-link.yellow:hover {
						background: #ffeb00;
					}

					.h-a {
						height: auto !important;
					}

					.h-36 {
						height: 36px;
					}

					.h-70 {
						height: 70px;
					}
					.h-100 {
						// height: 100px;
						height: 5.5555vw;
					}
					.h-100p {
						height: 100%;
					}
					.w-100p {
						width: 100%;
					}
					.h-100-text {
						height: 100px;
						// height: 5.5555vw;
					}

					.h-120 {
						height: 120px;
					}

					.h-280 {
						height: 280px;
					}

					.h-300 {
						// height: 300px;
						height: 16.6666vw;
					}

					.h-350 {
						height: 350px;
					}

					.h-450 {
						height: 450px;
					}

					.h-450mh {
						min-height: 450px;
					}

					.h-210 {
						height: 210px;
					}

					.w-25p {
						width: 25%;
					}

					.w-50p {
						width: 50%;
					}

					.fx-wrap {
						flex-wrap: wrap;
					}

					.jc-end {
						justify-content: flex-end !important;
					}

					.m-none {
						margin: 0 !important;
					}

					.mt-auto {
						margin-top: auto;
					}
					.b-top {
						border-top: 1px solid black;
					}
					.b-left {
						border-left: 1px solid black;
					}
					.b-left-none-mobile {
						border-bottom: 0 !important;
					}
					.b-bottom {
						border-bottom: 1px solid black;
					}
					.b-right {
						border-right: 1px solid black;
					}
					.b-none {
						border: 0 !important;
					}
					.bt-none {
						border-top: 0 !important;
					}
					.bb-none {
						border-bottom: 0 !important;
					}
					.bb-mobile {
						border-bottom: 0 !important;
					}

					.d-ib {
						display: inline-block;
					}

					.view-more-link {
						line-height: 2rem;
						color: black;
						height: 100%;
						width: 100%;
						text-align: center;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.view-more-link:hover {
						background: #f0f0f0;
					}
					.view-more-link.white-hover:hover {
						background: #ffffff;
					}

					.scrolling-text pre {
						font-family: "Favorit-Light", helvetica, sans-serif;
						display: inline;
					}
					.scrolling-text .ff-favorit-regular pre {
						font-family: "Favorit-Regular", helvetica, sans-serif;
					}
					.mt-40 {
						margin-top: 40px;
					}
					.tac {
						text-align: center;
					}
					.tar {
						text-align: right;
					}
					.rectangle .box-link {
						font-size: 1rem !important;
					}
					.m-25 {
						margin: 0 -25px;
					}
					.p-1 {
						padding: 0.75rem 1rem;
					}
					.shop-madhappy {
						margin-top: 4px !important;
					}

					.box > .row:nth-last-child(2) {
						// border-bottom: 0;
					}

					.category-image-list-wrapper {
						display: grid;
						grid-template-columns: 1fr 1fr;
					}

					.category-image-list-wrapper
						> .category-image-list:nth-child(odd) {
						border-right: 1px solid black;
						box-sizing: border-box;
					}

					.category-image-list-wrapper
						> .category-image-list:nth-last-child(1)
						> .row:last-child {
						border-bottom: 0;
					}

					.h-120 .category-link h2 {
						margin: 30px 0;
						font-size: 3.5rem !important;
						line-height: 4rem !important;
					}

					.carousel {
						// width: 35vw;
						width: 65vw;
						margin: 0 auto 50px;
					}

					.carousel-button {
						font-size: 5vw;
						appearance: none;
						background: none;
						color: black;
						border: 0;
						// background: linear-gradient(
						// 	90deg,
						// 	#ffb74c 0%,
						// 	#ff58ff 33.3333%,
						// 	#4ca1ff 66.6666%,
						// 	#ffeb00 100%
						// );
						// -webkit-background-clip: text;
						// -webkit-text-fill-color: transparent;
						color: #4cff73;
						-webkit-text-stroke: 1px black;
						outline: 0;
					}

					.carousel-button:hover {
						color: #704cff !important;
					}

					.carousel button.right {
						position: absolute;
						top: 0;
						right: -50px;
						height: 90%;
					}

					.carousel button.left {
						position: absolute;
						top: 0;
						left: -50px;
						height: 90%;
					}

					.carousel__dot-group {
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
					}

					.carousel__dot-group button {
						appearance: none;
						border: 1px solid black;
						border-radius: 25px;
						height: 15px;
						width: 15px;
						margin: 25px 5px 0;
						background: #4cff73;
					}

					.carousel__dot-group button:hover {
						background: #704cff !important;
					}

					.carousel__dot--selected {
						background: #704cff !important;
					}

					.big-title {
						font-size: 6rem;
						line-height: 7rem;
					}

					.category-image {
						height: 16.6666vw;
					}

					.logo-nav {
						z-index: 999;
					}
					.second-scrolling {
						font-size: 3rem;
					}

					// MOBILE

					@media (max-width: 1199px) {
						.b-right-none-mobile {
							border-right: 0;
						}
						.bg-white-desktop {
							background-color: transparent !important;
						}
						.category-image-list-wrapper {
							display: grid;
							grid-template-columns: 1fr;
						}

						.category-image-list-wrapper
							> .category-image-list:nth-child(odd) {
							border-right: 0;
						}
						.big-title {
							font-size: 2rem;
							line-height: 3rem;
							text-align: left;
							align-self: start;
							margin-bottom: 0;
						}
						.box-grid {
							grid-template-columns: 1fr 1fr;
						}
						.box-link {
							font-size: 1rem;
							line-height: 1.5rem;
							padding: 1rem;
							box-sizing: border-box;
							color: black;
							text-align: center;
							width: 100%;
							height: 100%;
						}
						h2 {
							font-size: 1rem;
							line-height: 1.25rem;
						}

						.fz-2,
						p,
						a,
						ol,
						ul,
						h3,
						h3 a {
							font-size: 1rem;
							line-height: 1.75rem;
						}
						h5 {
							margin-bottom: 0;
						}

						.h-70 {
							height: 65px;
						}

						.h-100,
						.h-100-text {
							height: 45px;
						}

						.h-210 {
							height: auto;
						}

						.h-120 {
							height: 70px;
						}

						.h-120 .category-link h2 {
							margin: 0;
							font-size: 1rem !important;
							line-height: 1.25rem !important;
						}

						.h-300,
						.h-350,
						.h-450 {
							height: auto;
						}

						.category-image {
							height: auto;
						}
						.bb-mobile {
							border-bottom: 1px solid black !important;
						}
						.bb-none-mobile {
							border-bottom: 0 !important;
						}
						.bt-none-mobile {
							border-top: 0 !important;
						}
						.bt-mobile {
							border-top: 1px solid black;
						}

						.tal-mobile {
							text-align: left !important;
						}
						.carousel {
							width: 100%;
						}
						.carousel-button {
							font-size: 15vw;
							display: none;
						}
						.carousel button.right {
							position: absolute;
							top: -25px;
							right: -15px;
							height: 100%;
						}

						.carousel button.left {
							position: absolute;
							top: -25px;
							left: -15px;
							height: 100%;
						}
						.hide-mobile {
							display: none;
						}
						.carousel__dot-group button {
							margin: 15px 5px 0;
							border-radius: 50px;
						}
						.mobile-post-title {
							font-size: 0.75rem;
						}
						.second-scrolling {
							font-size: 1rem;
						}
					}
				`}</style>
			</StoreProvider>
		);
	}
}

export default MyApp;
