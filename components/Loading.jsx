import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useRef
} from "react";
import Link from "next/link";
import Media from "react-media";

const transitionTime = 300;

const Loading = props => {
	const [child, setChild] = useState(props.children);
	let [activeImage, setActiveImage] = useState(1);
	const [showLoading, setShowLoading] = useState(true);
	const showLoadingRef = useRef(showLoading);
	showLoadingRef.current = showLoading;
	useEffect(() => {
		if (showLoading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		let timer = props.initial
			? null
			: setTimeout(function() {
					activeImage < 10 ? setActiveImage(activeImage++) : null;
					setTimeout(function() {
						activeImage < 10 ? setActiveImage(activeImage++) : null;
						setTimeout(function() {
							activeImage < 10
								? setActiveImage(activeImage++)
								: null;
							setTimeout(function() {
								activeImage < 10
									? setActiveImage(activeImage++)
									: null;
								setTimeout(function() {
									activeImage < 10
										? setActiveImage(activeImage++)
										: null;
									setTimeout(function() {
										activeImage < 10
											? setActiveImage(activeImage++)
											: null;
										setTimeout(function() {
											activeImage < 10
												? setActiveImage(activeImage++)
												: null;
											setTimeout(function() {
												activeImage < 10
													? setActiveImage(
															activeImage++
													  )
													: null;
												setTimeout(function() {
													activeImage < 10
														? setActiveImage(
																activeImage++
														  )
														: null;
													setTimeout(function() {
														setShowLoading(false);
													}, transitionTime);
												}, transitionTime);
											}, transitionTime);
										}, transitionTime);
									}, transitionTime);
								}, transitionTime);
							}, transitionTime);
						}, transitionTime);
					}, transitionTime);
			  }, transitionTime);

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = "unset";
		};
	}, [showLoading]);
	return (
		<Media
			defaultMatches={{ mobile: false, desktop: true }}
			queries={{
				mobile: "(max-width: 1199px)",
				desktop: "(min-width: 1200px)"
			}}
		>
			{matches => (
				<div className={`loading first`}>
					<img
						className="hidden"
						src="/images/loading/svg/1-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/2-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/3-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/4-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/5-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/6-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/7-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/8-01.svg"
					/>
					<img
						className="hidden"
						src="/images/loading/svg/9-01.svg"
					/>
					<style jsx>{`
						.loading {
							visibility: ${showLoadingRef.current
								? `visible`
								: `hidden`};
							opacity: ${showLoadingRef.current ? `1` : `0`};
							position: fixed;
							top: 0;
							left: 0;
							width: 100vw;
							height: calc(var(--vh, 1vh) * 100);
							z-index: 999999;
							background-color: #f0fddf;
							background-size: 210%;
							background-position: center;
							background-repeat: no-repeat;
							transition: visibility 1s, opacity 1s;
						}
						.first {
							background-image: ${showLoadingRef.current
								? `url("/images/loading/peace.gif")`
								: ``};
						}
						img {
							max-height: 100vh;
							margin: 0 auto;
						}
						.hidden {
							display: none;
						}
						@media (max-width: 1199px) {
							.loading {
								background-size: 350%;
							}
						}
					`}</style>
				</div>
			)}
		</Media>
	);
};

export default Loading;
