import React, { useEffect } from "react";
import "react-input-range/lib/css/index.css";
import "../styles/reset.css";
import "../styles/hover-min.css";
import "../styles/globals.css";
import "../styles/slider.css";
const isBrowser = typeof window !== "undefined";
import Layout from "../components/Layout";

// import App from 'next/app'


function MyApp({ Component, pageProps }) {
	let vh = isBrowser ? window.innerHeight * 0.01 : null;
	let vw = isBrowser ? window.innerWidth * 0.01 : null;
	// Then we set the value in the --vh custom property to the root of the document
	if (isBrowser) {
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		document.documentElement.style.setProperty("--vw", `${vw}px`);
		document.documentElement.style.setProperty("--typeTesterValue", `700`);

		// We listen to the resize event
		window.addEventListener("resize", () => {
			console.log('resizing')
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);

			let vw = window.innerWidth * 0.01;
			document.documentElement.style.setProperty("--vw", `${vw}px`);
		});
	}
	console.log('pageProps', pageProps)
	return (
		<Layout>
			<Component {...pageProps } />
		</Layout>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
