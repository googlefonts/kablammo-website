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
import Isotope from "isotope-layout";
import Pill from "./Pill";
import CharacterSetItem from "./CharacterSetItem";
import CharacterSetFilters from "./CharacterSetFilters";

const characterDictionary = [
  { letter: "A", category: "basic-latin", scale: 1 },
  { letter: "Á", category: "extended", scale: 1 },
  { letter: "Ă", category: "extended", scale: 1 },
  { letter: "Ắ", category: "extended", scale: 1 },
  { letter: "Ặ", category: "extended", scale: 1 },
  { letter: "Ằ", category: "extended", scale: 1 },
  { letter: "Ẳ", category: "extended", scale: 1 },
  { letter: "Ẵ", category: "extended", scale: 1 },
  { letter: "Â", category: "extended", scale: 1 },
  { letter: "Ấ", category: "extended", scale: 1 },
  { letter: "Ậ", category: "extended", scale: 1 },
  { letter: "Ầ", category: "extended", scale: 1 },
  { letter: "Ẩ", category: "extended", scale: 1 },
  { letter: "Ẫ", category: "extended", scale: 1 },
  { letter: "Ȁ", category: "extended", scale: 1 },
  { letter: "Ä", category: "extended", scale: 1 },
  { letter: "Ạ", category: "extended", scale: 1 },
  { letter: "À", category: "extended", scale: 1 },
  { letter: "Ả", category: "extended", scale: 1 },
  { letter: "Ȃ", category: "extended", scale: 1 },
  { letter: "Ā", category: "extended", scale: 1 },
  { letter: "Ą", category: "extended", scale: 1 },
  { letter: "Å", category: "extended", scale: 1 },
  { letter: "Ǻ", category: "extended", scale: 1 },
  { letter: "Ã", category: "extended", scale: 1 },
  { letter: "Æ", category: "extended", scale: 1 },
  { letter: "Ǽ", category: "extended", scale: 1 },
  { letter: "B", category: "basic-latin", scale: 1 },
  { letter: "C", category: "basic-latin", scale: 1 },
  { letter: "Ć", category: "extended", scale: 1 },
  { letter: "Č", category: "extended", scale: 1 },
  { letter: "Ç", category: "extended", scale: 1 },
  { letter: "Ḉ", category: "extended", scale: 1 },
  { letter: "Ĉ", category: "extended", scale: 1 },
  { letter: "Ċ", category: "extended", scale: 1 },
  { letter: "D", category: "basic-latin", scale: 1 },
  { letter: "Ǆ", category: "extended", scale: 1 },
  { letter: "Ð", category: "extended", scale: 1 },
  { letter: "Ď", category: "extended", scale: 1 },
  { letter: "Đ", category: "extended", scale: 1 },
  { letter: "Ḍ", category: "extended", scale: 1 },
  { letter: "Ḏ", category: "extended", scale: 1 },
  { letter: "E", category: "basic-latin", scale: 1 },
  { letter: "F", category: "basic-latin", scale: 1 },
  { letter: "G", category: "basic-latin", scale: 1 },
  { letter: "H", category: "basic-latin", scale: 1 },
  { letter: "I", category: "basic-latin", scale: 1 },
  { letter: "J", category: "basic-latin", scale: 1 },
  { letter: "K", category: "basic-latin", scale: 1 },
  { letter: "L", category: "basic-latin", scale: 1 },
  { letter: "M", category: "basic-latin", scale: 1 },
  { letter: "N", category: "basic-latin", scale: 1 },
  { letter: "O", category: "basic-latin", scale: 1 },
  { letter: "P", category: "basic-latin", scale: 1 },
  { letter: "Q", category: "basic-latin", scale: 1 },
  { letter: "R", category: "basic-latin", scale: 1 },
  { letter: "S", category: "basic-latin", scale: 1 },
  { letter: "T", category: "basic-latin", scale: 1 },
  { letter: "U", category: "basic-latin", scale: 1 },
  { letter: "V", category: "basic-latin", scale: 1 },
  { letter: "W", category: "basic-latin", scale: 1 },
  { letter: "X", category: "basic-latin", scale: 1 },
  { letter: "Y", category: "basic-latin", scale: 1 },
  { letter: "Z", category: "basic-latin", scale: 1 },
  { letter: "1", category: "basic-latin", scale: 1 },
  { letter: "2", category: "basic-latin", scale: 1 },
  { letter: "3", category: "basic-latin", scale: 1 },
  { letter: "4", category: "basic-latin", scale: 1 },
  { letter: "5", category: "basic-latin", scale: 1 },
  { letter: "6", category: "basic-latin", scale: 1 },
  { letter: "7", category: "basic-latin", scale: 1 },
  { letter: "8", category: "basic-latin", scale: 1 },
  { letter: "9", category: "basic-latin", scale: 1 },
  { letter: "0", category: "basic-latin", scale: 1 },
  { letter: "⁄", category: "punctuation", scale: 1 },
  { letter: ".", category: "punctuation", scale: 1 },
  { letter: ",", category: "punctuation", scale: 1 },
  { letter: ":", category: "punctuation", scale: 1 },
  { letter: ";", category: "punctuation", scale: 1 },
  { letter: "…", category: "punctuation", scale: 1 },
  { letter: "!", category: "punctuation", scale: 1 },
  { letter: "¡", category: "punctuation", scale: 1 },
  { letter: "?", category: "punctuation", scale: 1 },
  { letter: "¿", category: "punctuation", scale: 1 },
  { letter: "·", category: "punctuation", scale: 1 },
  { letter: "•", category: "punctuation", scale: 1 },
  { letter: "*", category: "punctuation", scale: 1 },
  { letter: "#", category: "punctuation", scale: 1 },
  { letter: "/", category: "punctuation", scale: 1 },
  // { letter: "\", category: "punctuation", scale: 1 },
  { letter: "�", category: "punctuation", scale: 1 },
  { letter: "(", category: "punctuation", scale: 1 },
  { letter: ")", category: "punctuation", scale: 1 },
  { letter: "{", category: "punctuation", scale: 1 },
  { letter: "}", category: "punctuation", scale: 1 },
  { letter: "[", category: "punctuation", scale: 1 },
  { letter: "]", category: "punctuation", scale: 1 },
  { letter: "-", category: "punctuation", scale: 1 },
  { letter: "‚­­­­­", category: "punctuation", scale: 1 },
  { letter: "„", category: "punctuation", scale: 1 },
  { letter: "“", category: "punctuation", scale: 1 },
  { letter: "”", category: "punctuation", scale: 1 },
  { letter: "‘", category: "punctuation", scale: 1 },
  { letter: "’", category: "punctuation", scale: 1 },
  { letter: "«", category: "punctuation", scale: 1 },
  { letter: "🙃", category: "emojis", scale: 1 },
  { letter: "🛸", category: "emojis", scale: 1 },
  { letter: "🪐", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "🛸", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
  { letter: "", category: "basic-latin", scale: 1 },
];

const CharacterSet = (props) => {
  const [showChild, setShowChild] = useState(false);
  const [pckry, setPckry] = useState(null);
  const gridRef = useRef(null);
  let gridInit;
  var docElem = document.documentElement;
  var transitionProp =
    typeof docElem.style.transition == "string"
      ? "transition"
      : "WebkitTransition";
  var transitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend",
  }[transitionProp];
  // external js: packery.pkgd.j
  useEffect(() => {
    var grid =
      gridRef !== null ? document.querySelector(".isotope-grid") : null;
    gridRef !== null &&
      setPckry(
        new Packery(gridRef.current, {
          itemSelector: ".grid-item",
          percentPosition: true,
        })
      );
  }, [gridRef]);

  useEffect(() => {
    var grid =
      gridRef !== null ? document.querySelector(".isotope-grid") : null;
    gridInit = new Isotope(grid, {
      itemSelector: ".grid-item",
    });
  });

  function handleClick(event) {
    var grid =
      gridRef !== null ? document.querySelector(".isotope-grid") : null;
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
      itemContent.removeEventListener(transitionEndEvent, onTransitionEnd);
    };
    itemContent.addEventListener(transitionEndEvent, onTransitionEnd);
  }

  function setItemContentTransitionSize(itemContent, itemElem) {
    // set new size
    var size = pckry.getSize(itemElem);
    itemContent.style.width = size && size.width + "px";
    itemContent.style.height = size && size.height + "px";
  }

  const handleFilterClick = (event) => {
    // var grid = gridRef !== null ? document.querySelector(".grid") : null;
    const filterValue = event.target.getAttribute("data-filter");
    // console.log(filterValue, grid, gridRef, gridInit);
    console.log("filterValue", filterValue);
    console.log("grid", gridInit);
    gridInit.arrange({ filter: filterValue });
    handleClick(event);
  };

  // bind filter button click
  // $('#filters').on('click', 'button', function () {
  //  var filterValue = $(this).attr('data-filter');
  //  // use filterFn if matches value
  //  filterValue = filterFns[filterValue] || filterValue;
  //  $grid.isotope({ filter: filterValue });
  // });

  return (
    <div className={`character-set`}>
      <CharacterSetFilters handleFilterClick={handleFilterClick} />
      <div ref={gridRef} className="isotope-grid" onClick={handleClick}>
        <div className="grid-sizer"></div>
        {characterDictionary.map((item, i) => {
          return (
            <CharacterSetItem
              item={item}
              className={`${item.category}`}
              key={i}
            />
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

        .isotope-grid {
          display: grid;
        }
      `}</style>
    </div>
  );
};

export default CharacterSet;
