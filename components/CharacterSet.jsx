import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";
import Link from "next/link";
import isBrowser from "../util/IsBrowser";
import Packery from "packery";

const characterDictionary = [
	{ letter: "A", category: "basic-latin" },
	{ letter: "B", category: "basic-latin" },
	{ letter: "C", category: "basic-latin" },
	{ letter: "D", category: "basic-latin" },
	{ letter: "E", category: "basic-latin" },
	{ letter: "F", category: "basic-latin" },
	{ letter: "G", category: "basic-latin" },
	{ letter: "H", category: "basic-latin" },
	{ letter: "I", category: "basic-latin" },
	{ letter: "J", category: "basic-latin" },
	{ letter: "K", category: "basic-latin" },
	{ letter: "L", category: "basic-latin" },
	{ letter: "M", category: "basic-latin" },
	{ letter: "N", category: "basic-latin" },
	{ letter: "O", category: "basic-latin" },
	{ letter: "P", category: "basic-latin" },
	{ letter: "Q", category: "basic-latin" },
	{ letter: "R", category: "basic-latin" },
	{ letter: "S", category: "basic-latin" },
	{ letter: "T", category: "basic-latin" },
	{ letter: "U", category: "basic-latin" },
	{ letter: "V", category: "basic-latin" },
	{ letter: "W", category: "basic-latin" },
	{ letter: "X", category: "basic-latin" },
	{ letter: "Y", category: "basic-latin" },
	{ letter: "Z", category: "basic-latin" },
];

const CharacterSet = (props) => {
	const [showChild, setShowChild] = useState(false);
	const [pckry, setPckry] = useState(null);
	const gridRef = useRef(null);
	var docElem = document.documentElement;
	var transitionProp =
		typeof docElem.style.transition == "string"
			? "transition"
			: "WebkitTransition";
	var transitionEndEvent = {
		WebkitTransition: "webkitTransitionEnd",
		transition: "transitionend",
	}[transitionProp];
	// external js: packery.pkgd.js
	useEffect(() => {
		var grid = gridRef !== null ? document.querySelector(".grid") : null;
		gridRef !== null &&
			setPckry(
				new Packery(gridRef.current, {
					itemSelector: ".grid-item",
					percentPosition: true,
				})
			);
	}, [gridRef]);

	function handleClick(event) {
		// only .grid-item-content clicks
		if (!event.target.classList.contains("grid-item-content")) {
			return;
		}

		var itemContent = event.target;
		setItemContentPixelSize(itemContent);

		var itemElem = itemContent.parentNode;

		var isExpanded = itemElem.classList.contains("is-expanded");
		itemElem.classList.toggle("is-expanded");

		// force redraw
		var redraw = itemContent.offsetWidth;
		// renable default transition
		itemContent.style[transitionProp] = "";

		addTransitionListener(itemContent);
		setItemContentTransitionSize(itemContent, itemElem);

		if (isExpanded) {
			// if shrinking, shiftLayout
			pckry.shiftLayout();
		} else {
			// if expanding, fit it
			pckry.fit(itemElem);
		}
	}

	function setItemContentPixelSize(itemContent) {
		var previousContentSize = pckry.getSize(itemContent);
		// disable transition
		itemContent.style[transitionProp] = "none";
		// set current size in pixels
		itemContent.style.width =
			previousContentSize && previousContentSize.width + "px";
		itemContent.style.height =
			previousContentSize && previousContentSize.height + "px";
	}

	function addTransitionListener(itemContent) {
		// reset 100%/100% sizing after transition end
		var onTransitionEnd = function () {
			itemContent.style.width = "";
			itemContent.style.height = "";
			itemContent.removeEventListener(
				transitionEndEvent,
				onTransitionEnd
			);
		};
		itemContent.addEventListener(transitionEndEvent, onTransitionEnd);
	}

	function setItemContentTransitionSize(itemContent, itemElem) {
		// set new size
		var size = pckry.getSize(itemElem);
		itemContent.style.width = size && size.width + "px";
		itemContent.style.height = size && size.height + "px";
	}

	return (
		<div className={`character-set`}>
			<div
				className={`w-full border-2 border-black text-black bg-yellow rounded-lg h-20 text-center flex justify-center items-center`}
			>
				<span className="uppercase">Filters</span>
			</div>
			<div ref={gridRef} className="grid" onClick={handleClick}>
				<div className="grid-sizer"></div>
				{characterDictionary.map((item, i) => {
					return (
						<div key={i} className="grid-item">
							<div className="grid-item-content text-black">
								{item.letter}
							</div>
						</div>
					);
				})}
			</div>

			<style jsx>{`
				.character-set {
					width: 100%;
					background: #3b8364;
				}

				.character-set-filters {
					border: 1px solid hsla(0, 0%, 0%, 0.5);
					border-radius: 32px;
					height: 75px;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.character-set-filters span {
					font-size: 15px;
					text-align: center;
					text-transform: uppercase;
				}

				.grid {
				}

				/* item is invisible, but used for layout */
				.grid-item,
				.grid-sizer {
					width: 10vw;
				}

				.grid-item {
					float: left;
					height: 10vw;
				}

				/* grid-item-content is visible, and transitions size */
				.grid-item-content {
					width: 100%;
					height: 100%;
					background: #e4e4e4;
					border: 1px solid hsla(0, 0%, 0%, 0.5);
					border-radius: 32px;
					-webkit-transition: width 0.4s, height 0.4s;
					transition: width 0.4s, height 0.4s;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 7vw;
					line-height: 8vw;
					text-align: center;
				}

				.grid-item:hover .grid-item-content {
					background: #e4e4e4;
					cursor: pointer;
				}

				/* both item and item content change size */
				.grid-item.is-expanded {
					width: 20vw;
					height: 20vw;
					z-index: 2;
				}

				.grid-item.is-expanded .grid-item-content {
					background: #ffc000;
				}
			`}</style>
		</div>
	);
};

export default CharacterSet;
