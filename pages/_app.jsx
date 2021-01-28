import React, { useEffect } from "react";
import App from "next/app";
import StoreProvider from "../util/Context";
const isBrowser = typeof window !== "undefined";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/reset.css";
import "../styles/globals.css";

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
				<div className={`bg-black`}>
					<Component {...pageProps} />
				</div>
				<style global jsx>{``}</style>
			</StoreProvider>
		);
	}
}

export default MyApp;
