import React from "react";

class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: props.sliderValue, items: props.items };
	}

	render() {
		return (
			<div className={this.props.className}>
				<section className="carousel" aria-label="Gallery">
					            {/* SMALL SCROLLING TEXT 1 */}

					<ol className="carousel__viewport">
						
						{this.state.items.map((item, i) => {
							return (
								<li
									key={i}
									id={`carousel__slide-` + i}
									tabIndex="0"
									className={
										`carousel__slide bg-no-repeat bg-center w-100% ` +
										item.bg_color_class
									}
									style={{
										backgroundImage:
											"url(" + item.image.url + ")",
									}}
								>
									<div className="carousel__snapper">
										<a
											href={
												`#carousel__slide-` +
												(i === 0
													? this.state.items.length -
													  1
													: i - 1)
											}
											className="carousel__prev text-lime hover:text-purple leading-none text-6"
										>
											←
										</a>
										<a
											href={
												`#carousel__slide-` +
												(i ===
												this.state.items.length - 1
													? 0
													: i + 1)
											}
											className="carousel__next text-lime hover:text-pink leading-none text-6"
										>
											→
										</a>
									</div>
								</li>
							);
						})}
					</ol>
				</section>
				<style jsx>{`
					@keyframes tonext {
						75% {
							left: 0;
						}
						95% {
							left: 100%;
						}
						98% {
							left: 100%;
						}
						99% {
							left: 0;
						}
					}

					@keyframes tostart {
						75% {
							left: 0;
						}
						95% {
							left: -300%;
						}
						98% {
							left: -300%;
						}
						99% {
							left: 0;
						}
					}

					@keyframes snap {
						96% {
							scroll-snap-align: center;
						}
						97% {
							scroll-snap-align: none;
						}
						99% {
							scroll-snap-align: none;
						}
						100% {
							scroll-snap-align: center;
						}
					}

					ol,
					li {
						list-style: none;
						margin: 0;
						padding: 0;
					}

					.carousel {
						position: relative;
						height: 100%;
					}

					.carousel__viewport {
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						display: flex;
						overflow-x: hidden;
						counter-reset: item;
						scroll-behavior: smooth;
						scroll-snap-type: both proximity;
					}
					.carousel__slide {
						position: relative;
						flex: 0 0 100%;
						width: 100%;
						counter-increment: item;
						background-size: 85%;
					}

					.carousel__slide:before {
						// content: counter(item);
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate3d(-50%, -100%, 70px);
						color: #fff;
						line-height: 1em;
					}

					.carousel__snapper {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						scroll-snap-align: center;
					}

					@media (hover: hover) {
						.carousel__snapper {
							animation-name: tonext, snap;
							animation-timing-function: ease;
							animation-duration: 4ss;
							animation-iteration-count: infinite;
						}

						.carousel__slide:last-child .carousel__snapper {
							animation-name: tostart, snap;
						}
					}

					@media (prefers-reduced-motion: reduce) {
						.carousel__snapper {
							animation-name: none;
						}
					}

					.carousel:hover .carousel__snapper,
					.carousel:focus-within .carousel__snapper {
						animation-name: none;
					}

					.carousel__navigation {
						position: absolute;
						right: 0;
						bottom: 0;
						left: 0;
						text-align: center;
					}

					.carousel__navigation-list,
					.carousel__navigation-item {
						display: inline-block;
					}

					// .carousel__navigation-button {
					// 	display: inline-block;
					// 	width: 1.5rem;
					// 	height: 1.5rem;
					// 	background-color: #333;
					// 	background-clip: content-box;
					// 	border: 0.25rem solid transparent;
					// 	border-radius: 50%;
					// 	font-size: 2rem;
					// 	transition: transform 0.1s;
					// }

					.carousel::before,
					.carousel::after,
					.carousel__prev,
					.carousel__next {
						position: absolute;
						top: 45%;
						transform: translateY(-50%);
						border-radius: 50%;
						outline: 0;
					}

					.carousel::before,
					.carousel__prev {
						left: 2vw;
					}

					.carousel::after,
					.carousel__next {
						right: 2vw;
					}

					.carousel::before,
					.carousel::after {
						content: "";
						z-index: 1;
						// background-color: #333;
						// background-size: 1.5rem 1.5rem;
						// background-repeat: no-repeat;
						// background-position: center center;
						color: #fff;
						text-align: center;
						pointer-events: none;
					}
				`}</style>
			</div>
		);
	}
}
export default Carousel;
