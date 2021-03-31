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
const isBrowser = typeof window !== "undefined";
import Packery from "packery";
import Pill from "./Pill";
import CharacterSetItem from "./CharacterSetItem";
import CharacterSetFilters from "./CharacterSetFilters";

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
	{ letter: "1", category: "basic-latin" },
	{ letter: "2", category: "basic-latin" },
	{ letter: "3", category: "basic-latin" },
	{ letter: "4", category: "basic-latin" },
	{ letter: "5", category: "basic-latin" },
	{ letter: "6", category: "basic-latin" },
	{ letter: "7", category: "basic-latin" },
	{ letter: "8", category: "basic-latin" },
	{ letter: "9", category: "basic-latin" },
	{ letter: "0", category: "basic-latin" },
	{ letter: "!", category: "basic-latin" },
	{ letter: "?", category: "basic-latin" },
	{ letter: "$", category: "basic-latin" },
	{ letter: "🙃", category: "emojis" },
	{ letter: "🛸", category: "basic-latin" },
	{ letter: "🪐", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "🛸", category: "basic-latin" },
	{ letter: "🪐", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
	{ letter: "", category: "basic-latin" },
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
			<CharacterSetFilters />
			<div ref={gridRef} className="grid" onClick={handleClick}>
				<div className="grid-sizer"></div>
				{characterDictionary.map((item, i) => {
					return (
						<div key={i}>
							<CharacterSetItem item={item} />
						</div>
					);
				})}
			</div>

			<style jsx>{`
				.character-set {
					width: 100%;
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
			`}</style>
		</div>
	);
};

export default CharacterSet;
