import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Packery from "packery";
import Isotope from "isotope-layout";
import CharacterSetItem from "./CharacterSetItem";
// import CharacterSetFilters from "./CharacterSetFilters";
import CharacterSetFilter from "./CharacterSetFilter";

const CharacterSet = (props) => {
  const [pckry, setPckry] = useState(null);
  const [activeFilters, setActiveFilters] = useState([".basic-latin", ".numerals", ".kablammoji", ".zodiac"]);
  const categoryMap = 
  ['.basic-latin', '.extended-latin', '.cyrillic', '.numerals', '.punctuation-and-symbols', '.math-and-currency', '.kablammoji','.patterns-and-borders', '.zodiac']
  const gridRef = useRef(null);
  let gridInit;
  let docElem = document.documentElement;
  let transitionProp =
    typeof docElem.style.transition == "string"
      ? "transition"
      : "WebkitTransition";
  let transitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend",
  }[transitionProp];

  const characterDictionary = [
    {
      letter: "\u0041",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0042",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0043",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0044",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0045",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0046",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0047",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0048",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0049",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u004a",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u004b",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u004c",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u004d",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u004e",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u004f",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0050",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0051",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0052",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0053",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0054",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0055",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0056",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0057",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0058",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u0059",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u005a",
      category: "basic-latin",
      scale: 1
    },
    {
      letter: "\u00c1",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0102",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eae",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eb6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eb0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eb2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eb4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ea4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eac",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ea6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ea8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eaa",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0200",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ea0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ea2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0202",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0100",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0104",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c5",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01fa",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c3",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01fc",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0106",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u010c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c7",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e08",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0108",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u010a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0044",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u017d",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u010e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0110",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e0c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e0e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c9",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0114",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u011a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e1c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00ca",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ebe",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ec6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ec0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ec2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ec4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0204",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00cb",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0116",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eb8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00c8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eba",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0206",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0112",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e16",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e14",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0118",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ebc",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u011e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01e6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u011c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0122",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0120",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e20",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0126",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e2a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0124",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e24",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00cd",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u012c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00ce",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0208",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00cf",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e2e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0130",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eca",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00cc",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ec8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u020a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u012a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0020",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u012e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0128",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0134",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0136",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u004c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u004a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0139",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u013d",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u013b",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u004c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00b7",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e36",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e3a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0141",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e42",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u004e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u004a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0143",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0147",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0145",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e44",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e46",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u014a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e48",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d1",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d3",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u014e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ed0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ed8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ed2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ed4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ed6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u020c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u022a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0230",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ecc",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ece",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01a0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eda",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ee2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1edc",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ede",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ee0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0150",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u020e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u014c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e52",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e50",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01ea",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01fe",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d5",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e4c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e4e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u022c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0152",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00de",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0154",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0158",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0156",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0210",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e5a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0212",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e5e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u015a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e64",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0160",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e66",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u015e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u015c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0218",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e60",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e62",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e68",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e9e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u018f",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0166",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0164",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0162",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u021a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e6c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e6e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00da",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u016c",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00db",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0214",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00dc",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ee4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00d9",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ee6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u01af",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ee8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ef0",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eea",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eec",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1eee",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0170",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0216",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u016a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e7a",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0172",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u016e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0168",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e78",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e82",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0174",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e84",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e80",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u00dd",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0176",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0178",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e8e",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ef4",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ef2",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ef6",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0232",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1ef8",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0179",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u017d",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u017b",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u1e92",
      category: "extended-latin",
      scale: 1
    },
    {
      letter: "\u0410",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0411",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0412",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0413",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0403",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0490",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0414",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0415",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0400",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0401",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0416",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0417",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0418",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0419",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u040d",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u048a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u041a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u040c",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u041b",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u041c",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u041d",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u041e",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u041f",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0420",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0421",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0422",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0423",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u040e",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0424",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0425",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0427",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0426",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0428",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0429",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u040f",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u042c",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u042a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u042b",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0409",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u040a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0405",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0404",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u042d",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0406",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0407",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0408",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u040b",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u042e",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u042f",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0402",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0462",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u046a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0472",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0474",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0492",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0494",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0496",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0498",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u049a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u049c",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u049e",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04a0",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04a2",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04a4",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0524",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04a8",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04aa",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04ac",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04ae",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04b0",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04b2",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04b4",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04b6",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04b8",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04ba",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0526",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04bc",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04be",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04c0",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04c1",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04c3",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04c5",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04c7",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04c9",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04cb",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04cd",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04d0",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04d2",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04d4",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04d6",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04d8",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04da",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04dc",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04de",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04e0",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04e2",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04e4",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04e6",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04e8",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04ea",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04ec",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04ee",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04f0",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04f2",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04f4",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04f6",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04f8",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04fa",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04fc",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u04fe",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0510",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0512",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u051a",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u051c",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u048c",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u048e",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0528",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u052e",
      category: "cyrillic",
      scale: 1
    },
    {
      letter: "\u0030",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0031",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0032",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0033",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0034",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0035",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0036",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0037",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0038",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u0039",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2080",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2081",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2082",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2083",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2084",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2085",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2086",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2087",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2088",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2089",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2070",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u00b9",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u00b2",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u00b3",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2074",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2075",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2076",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2077",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2078",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u2079",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u00bd",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u00bc",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u00be",
      category: "numerals",
      scale: 1
    },
    {
      letter: "\u002e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002c",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u003a",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u003b",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0021",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00a1",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u003f",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00bf",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00b7",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2022",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002a",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0023",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002f",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002f",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u007c",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00a6",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u005c",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0028",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0029",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u007b",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u007d",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u005b",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u005d",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u002d",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00ad",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2013",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2014",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2012",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2015",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u005f",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u201a",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u201e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u201c",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u201d",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2018",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2019",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00ab",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00bb",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2039",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u203a",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u201d",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2019",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u27e8",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u27e9",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00ad",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0025",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2030",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2191",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2197",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2192",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2198",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2193",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2199",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2190",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2196",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2194",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2195",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0040",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0026",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00b6",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00a7",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00a9",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00ae",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0054",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u004d",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u00b0",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2032",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2032",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2032",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2020",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u006c",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2021",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u004e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u006f",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u212e",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u0061",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u006f",
      category: "punctuation-and-symbols",
      scale: 1
    },
    {
      letter: "\u2219",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2052",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2215",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u002b",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2212",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00d7",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00f7",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u003d",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2260",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u003e",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u003c",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2265",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2264",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00b1",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2248",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u007e",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00ac",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u005e",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2205",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u221e",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u222b",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u03a9",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2206",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u220f",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2211",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u221a",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u03bc",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u2202",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u25ca",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00b0",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u03c0",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u0020",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20b5",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00a2",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20a1",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00a4",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u0024",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20ab",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20ac",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u0192",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20a3",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20b2",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20b4",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20ad",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20a4",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20ba",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20bc",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20a6",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20a7",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20b1",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20bd",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20b9",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00a3",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20b8",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20ae",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u20a9",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u00a5",
      category: "math-and-currency",
      scale: 1
    },
    {
      letter: "\u262e",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u263c",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u263e",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2661",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2665",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2728",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1F33C}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1F440}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f441}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f444}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f451}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f47b}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f48e}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f496}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f4a9}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f525}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f632}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f635}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\uaa5c",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2600",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2605",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2606",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u2639",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u263a",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u26a0",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u26a1",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f310}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f355}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f47d}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f4a5}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f552}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f643}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1f6f8}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\u{1fa90}",
      category: "kablammoji",
      scale: 1
    },
    {
      letter: "\ue000",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue001",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue002",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue003",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue004",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue005",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue00d",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue00f",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue010",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue012",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue013",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue011",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue00e",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue006",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue007",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue008",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue00a",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue00b",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\ue00c",
      category: "patterns-and-borders",
      scale: 1
    },
    {
      letter: "\u2648",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u2649",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u264a",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u264b",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u264c",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u264d",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u264e",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u264f",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u2650",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u2651",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u2652",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u2653",
      category: "zodiac",
      scale: 1
    },
    {
      letter: "\u26ce",
      category: "zodiac",
      scale: 1
    }
  ]
  
  const [activeColors, setActiveColors] = useState({
    '.basic-latin': 'blue',
    '.extended-latin': 'gray',
    '.cyrillic': 'gray',
    '.numerals': 'purple',
    '.punctuation-and-symbols': 'gray',
    '.math-and-currency': 'gray',
    '.kablammoji': 'lime',
    '.patterns-and-borders': 'gray',
    '.zodiac': 'purple',
  })

  const [categories, setCategories] = useState([
    {
      name: '.basic-latin',
      label: 'Basic Latin',
      color: 'yellow',
      active: 'yellow'
    },
    {
      name: '.extended-latin',
      label: 'Extended Latin',
      color: 'lime',
      active: 'gray'
    },
    {
      name: '.cyrillic',
      label: 'Cyrillic',
      color: 'pink',
      active: 'gray'
    },
    {
      name: '.numerals',
      label: 'Numerals',
      color: 'purple',
      active: 'purple'
    },
    {
      name: '.punctuation-and-symbols',
      label: 'Punctuation & Symbols',
      color: 'orange',
      active: 'gray'
    },
    {
      name: '.math-and-currency',
      label: 'Math & Currency',
      color: 'blue',
      active: 'gray'
    },
    {
      name: '.kablammoji',
      label: 'Kablammoji',
      color: 'lime',
      active: 'lime'
    },
    {
      name: '.patterns-and-borders',
      label: 'Patterns & Borders',
      color: 'pink',
      active: 'gray'
    },
    {
      name: '.zodiac',
      label: 'Zodiac',
      color: 'purple',
      active: 'purple'
    }
  ]);

  useEffect(() => {
    gridRef !== null &&
      setPckry(
        new Packery(gridRef.current, {
          itemSelector: ".grid-item",
          percentPosition: true,
        })
      );
  }, [gridRef]);
  

  useEffect(() => {
    let grid =
      gridRef !== null ? document.querySelector(".isotope-grid") : null;
    gridInit = new Isotope(grid, {
      itemSelector: ".grid-item",
    });
    let filterValueString = activeFilters.join(", ");
    gridInit.arrange({ filter: filterValueString });
  });

  function handleClick(event) {
    if (!event.target.classList.contains("grid-item-content")) {
      console.log("handleclick called NOT on grid item content"    );
      return;
    }
    console.log("handleclick called on grid item content"    );
    let itemContent = event.target;
    setItemContentPixelSize(itemContent);

    let itemElem = itemContent.parentNode;

    let isExpanded = itemElem.classList.contains("is-expanded");
    itemElem.classList.toggle("is-expanded");

    // force redraw
    let redraw = itemContent.offsetWidth;
    // renable default transition
    itemContent.style[transitionProp] = "";

    addTransitionListener(itemContent);
    setItemContentTransitionSize(itemContent, itemElem);

    if (isExpanded) {
      // if shrinking, shiftLayout
      pckry.shiftLayout();
      console.log("item is shrinking, shift layout!");
    } else {
      // if expanding, fit it
      pckry.fit(itemElem);
      console.log("item is expanding, pckry.fit");
      console.log(pckry);
    }
  }

  function setItemContentPixelSize(itemContent) {
    let previousContentSize = pckry.getSize(itemContent);
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
    let onTransitionEnd = function () {
      itemContent.style.width = "";
      itemContent.style.height = "";
      itemContent.removeEventListener(transitionEndEvent, onTransitionEnd);
    };
    itemContent.addEventListener(transitionEndEvent, onTransitionEnd);
  }

  function setItemContentTransitionSize(itemContent, itemElem) {
    // set new size
    let size = pckry.getSize(itemElem);
    itemContent.style.width = size && size.width + "px";
    itemContent.style.height = size && size.height + "px";
  }

  const handleFilterClick = (event) => {
    // console.log(event, this.state)
    const updatedActiveFilters = activeFilters;
    // let grid = gridRef !== null ? document.querySelector(".grid") : null;
    let filter = event.target.getAttribute("data-filter");
    let refInd = categoryMap.indexOf(filter)
    let ind = activeFilters.indexOf(filter);
    if (ind===-1){
      updatedActiveFilters.push(filter); 
      // console.log(refInd);
      // let newcat = categories;
      // newcat[refInd].active = categories[refInd].color;
      // setCategories(newcat);
      // console.log(categories[refInd].active);
      event.target.classList.add("bg-"+categories[refInd].color);
      event.target.classList.remove("bg-gray");
      let filterValueString = activeFilters.join(", ");
      gridInit.arrange({ filter: filterValueString });
      setActiveFilters(updatedActiveFilters); }
    // } else if (activeFilters.length===1){ 
    //   updatedActiveFilters.splice(ind,1);
    //   event.target.classList.add("bg-gray");
    //   event.target.classList.remove("bg-"+categories[refInd].color);
    //   setActiveFilters([".basic-latin", ".numerals", ".kablammoji", ".zodiac"]);
    //   let filterValueString = activeFilters.join(", ");
    //   gridInit.arrange({ filter: filterValueString });

    // }
    else {
      updatedActiveFilters.splice(ind,1);
      // let newcat = categories;
      event.target.classList.add("bg-gray");
      event.target.classList.remove("bg-"+categories[refInd].color);
      // newcat[refInd].active = "gray";
      // event.target.classList.add("bg-"+categories[refInd].active);
      // setCategories(newcat);
      let filterValueString = activeFilters.join(", ");
      gridInit.arrange({ filter: filterValueString });
      setActiveFilters(updatedActiveFilters);
    }
  };

  return (
    <div className={`character-set`}>
      <div className="character-set-filters">
      <div 
        className={`filters w-100% text-black text-center grid place-items-center`}
      >
        <div className="w-100%">
          <div className="grid grid-cols-3 font-body">
            <div>
              <CharacterSetFilter name={categories[0].name} color={categories[0].color} label={categories[0].label} onClickProp={handleFilterClick} activeColor={categories[0].active} />
              <CharacterSetFilter name={categories[1].name} color={categories[1].color} label={categories[1].label} onClickProp={handleFilterClick} activeColor={categories[1].active} />
              <CharacterSetFilter name={categories[2].name} color={categories[2].color} label={categories[2].label} onClickProp={handleFilterClick} activeColor={categories[2].active} />
            </div>
            <div>
              <CharacterSetFilter name={categories[3].name} color={categories[3].color} label={categories[3].label} onClickProp={handleFilterClick} activeColor={categories[3].active} />
              <CharacterSetFilter name={categories[4].name} color={categories[4].color} label={categories[4].label} onClickProp={handleFilterClick} activeColor={categories[4].active} />
              <CharacterSetFilter name={categories[5].name} color={categories[5].color} label={categories[5].label} onClickProp={handleFilterClick} activeColor={categories[5].active} />
            </div>
            <div>
              <CharacterSetFilter name={categories[6].name} color={categories[6].color} label={categories[6].label} onClickProp={handleFilterClick} activeColor={categories[6].active} />
              <CharacterSetFilter name={categories[7].name} color={categories[7].color} label={categories[7].label} onClickProp={handleFilterClick} activeColor={categories[7].active} />
              <CharacterSetFilter name={categories[8].name} color={categories[8].color} label={categories[8].label} onClickProp={handleFilterClick} activeColor={categories[8].active} />
            </div>
          </div>
        </div>
      </div>
      </div>
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
        button {
          appearance: none;
          outline: none;
        }
        .closed {
          height: 0;
          opacity: 0;
          border: 0;
          padding: 0;
          visibility: hidden;
        }

        .isotope-grid {
          display: grid;
        }
      `}</style>
    </div>
  );
};

export default CharacterSet;
