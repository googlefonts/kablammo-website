import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useRef,
} from "react";
import Link from "next/link";
import ScrollingText from "../components/ScrollingText";
import Row from "../components/Row";
import BoxGrid from "../components/BoxGrid";
import PrismicDOM from "prismic-dom";
import { linkResolver } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Media from "react-media";

const Header = (props) => {
	const [showNav, setShowNav] = useState(false);

	useEffect(
		() => (props) => {
			showNav && document.body.style.overflow === "hidden"
				? (document.body.style.overflow = "unset")
				: null;

			setTimeout(() => {
				showNav &&
				document.getElementsByClassName("layout")[0] &&
				document.getElementsByClassName("layout")[0].style.display ===
					"none"
					? (document.getElementsByClassName(
							"layout"
					  )[0].style.display = "block")
					: null;
			}, 500);
		},
		[showNav]
	);

	const handleShowNav = () => {
		setShowNav((showNav) => !showNav);
		document.body.style.overflow === "hidden"
			? (document.body.style.overflow = "unset")
			: (document.body.style.overflow = "hidden");
		document.getElementsByClassName("layout")[0].style.display === "none"
			? (document.getElementsByClassName("layout")[0].style.display =
					"block")
			: (document.getElementsByClassName("layout")[0].style.display =
					"none");
	};
	return (
		<Media
			defaultMatches={{ desktop: true }}
			queries={{
				mobile: "(max-width: 1199px)",
				desktop: "(min-width: 1200px)",
			}}
		>
			{(matches) => (
				<React.Fragment>
					{matches.mobile && (
						<BoxGrid
							data={props.data}
							className="mobile bg-light-green"
							mobile
							showNav={showNav}
						/>
					)}
					<ScrollingText
						href={props.data.small_scrolling_text_link}
						className="small-scrolling-text fixed"
						right
						blank
						specialLeft
					>
						<span className="ff-favorit-light">
							{RichText.render(props.data.small_scrolling_text)}
						</span>
					</ScrollingText>
					<div
						className={`header ${matches.mobile && "fixed"} ${
							props.className
						}`}
					>
						<Row
							className={`h-70 bg-light-green logo-nav ${matches.mobile &&
								"bt-mobile"} `}
						>
							<h1 className="site-title ff-gt-maru-beta tt-uppercase tac">
								<div
									className="hamburger c-purple"
									onClick={handleShowNav}
								>
									☰
								</div>
								<Link href="/">
									<a className="c-purple">
										{props.data.site_title}
									</a>
								</Link>
							</h1>
						</Row>
						{matches.desktop && props.nav && (
							<BoxGrid data={props.data} nav />
						)}
						<style jsx>{`
							.header {
								top: 0;
								left: 0;
								width: 100%;
								padding-top: 36px;
								z-index: 999999;
							}

							.small-scrolling-text {
								position: fixed;
								top: 0;
								left: 0;
							}

							.hamburger {
								// cursor: pointer;
								cursor: url("/images/icons/SVG/white-cursor.svg"), pointer;
								display: none;
							}
							.second-scrolling {
								font-size: 3rem;
							}
							@media (max-width: 1199px) {
								.site-title {
									margin: 10px 0;
								}
								.site-title a {
									font-size: 1.4rem;
								}
								.hamburger {
									position: absolute;
									left: 0.75rem;
									display: block;
								}
								.second-scrolling {
									font-size: 1rem;
								}
								.header {
									padding-top: 0;
									margin-top: 36px;
								}
							}
						`}</style>
					</div>
				</React.Fragment>
			)}
		</Media>
	);
};

export default Header;
