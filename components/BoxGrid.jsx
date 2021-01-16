import React, {
	Component,
	Fragment,
	useState,
	useContext,
	forwardRef,
	useImperativeHandle,
} from "react";
import Link from "next/link";
import Row from "../components/Row";
import Box from "../components/Box";
import { useRouter } from "next/router";

const BoxGrid = (props) => {
	const router = useRouter();

	const storiesActive = router.pathname.includes("stories") ? "active" : "";
	const interviewsActive = router.pathname.includes("interviews")
		? "active"
		: "";
	const toolkitsActive = router.pathname.includes("toolkits") ? "active" : "";
	const podcastsPlaylistsActive = router.pathname.includes(
		"podcasts-playlists"
	)
		? "active"
		: "";
	const madhappyActive = router.pathname.includes("madhappy") ? "active" : "";
	const getInvolvedActive = router.pathname.includes("get-involved")
		? "active"
		: "";
	const getHelpActive = router.pathname.includes("get-help") ? "active" : "";
	const cultureActive = router.pathname.includes("culture") ? "active" : "";
	const boxClassName = props.nav
		? "rectangle"
		: props.mobile
		? "full"
		: "square";

	return (
		<div className={`box-grid ${props.className ? props.className : ""}`}>
			<Box
				className={`border padding-mobile border-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/blog/stories">
					<a
						className={`box-link tac c-black pink ff-favorit-light tt-uppercase ${storiesActive}`}
					>
						Stories
					</a>
				</Link>
			</Box>
			<Box
				className={`border padding-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/blog/interviews">
					<a
						className={`box-link tac c-black blue ff-favorit-light tt-uppercase ${interviewsActive}`}
					>
						Interviews
					</a>
				</Link>
			</Box>
			<Box
				className={`border padding-mobile border-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/blog/toolkits">
					<a
						className={`box-link tac c-black green ff-favorit-light tt-uppercase  ${toolkitsActive}`}
					>
						Toolkits
					</a>
				</Link>
			</Box>
			<Box className={`padding-mobile b-bottom center ${boxClassName}`}>
				<Link href="/blog/madhappy">
					<a
						className={`box-link tac c-black purple ff-favorit-light tt-uppercase ${madhappyActive}`}
					>
						Madhappy
					</a>
				</Link>
			</Box>
			<Box
				className={`padding-mobile border border-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/blog/podcasts-playlists">
					<a
						className={`box-link tac c-black red ff-favorit-light tt-uppercase ${podcastsPlaylistsActive}`}
					>
						Playlists
					</a>
				</Link>
			</Box>
			<Box
				className={`border padding-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/blog/culture">
					<a
						className={`box-link tac c-black yellow ff-favorit-light tt-uppercase ${cultureActive}`}
					>
						Culture
					</a>
				</Link>
			</Box>

			<Box
				className={`border padding-mobile border-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/get-involved">
					<a
						className={`box-link tac c-black orange ff-favorit-light tt-uppercase ${getInvolvedActive}`}
					>
						Get Involved
					</a>
				</Link>
			</Box>
			<Box
				className={`border padding-mobile b-bottom center ${boxClassName}`}
			>
				<Link href="/get-help">
					<a
						className={`box-link tac c-black turquoise ff-favorit-light tt-uppercase ${getHelpActive}`}
					>
						Get Help
					</a>
				</Link>
			</Box>
			<style jsx>{`
				.box-grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
				}
				.box-link {
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					color: #000000;
					font-size: 2.2vw;
					padding-top: 4px;
					height: 100%;
					width: 100%;
				}
				.box-link:focus {
					// background-color: #f0fddf;
					// background-image: url("/images/loading/svg/9-01.svg");
					// background-size: 300%;
					// background-position: center;
					// background-repeat: no-repeat;
				}
				@media (max-width: 1199px) {
					.box-grid {
						grid-template-columns: 1fr 1fr;
						display: ${props.home ? "none" : "auto"};
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
					.mobile {
						visibility: ${props.showNav ? `visible` : `hidden`};
						opacity: ${props.showNav ? `1` : `0`};
						position: fixed;
						top: 101px;
						left: 0;
						height: calc(var(--vh, 1vh) * 100 - 87px);
						width: 100vw;
						z-index: 999999999999;
						transition: visibility 0.25s, opacity 0.25s;
					}
				}
			`}</style>
		</div>
	);
};

export default BoxGrid;
