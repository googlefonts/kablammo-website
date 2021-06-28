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
import NavItem from "./NavItem";

const isBrowser = typeof window !== "undefined";

const Nav = (props) => {
  const [showChild, setShowChild] = useState(false);
  const [mobileNavShowing, setMobileNavShowing] = useState(false);

  useEffect(() => {}, []);
  const handleInvert = (time) => {
    document.body.style.filter =
      time === "day" ? "" : "invert(0.9) hue-rotate(120deg)";
  };
  const toggleMobileNav = () => {
    let links = document.getElementById("desktoplinks");
    if (mobileNavShowing) {
      links.classList.add("hidden");
      console.log("hiding links!");
      setMobileNavShowing(false);
    } else {
      links.classList.remove("hidden");
      console.log("showing links!");
      setMobileNavShowing(true);
    }
  };
  return (
    <div className={`nav`}>
      <div id="toprow" className="flex flex-row">
        <div
          onClick={toggleMobileNav}
          className="bg-blue px-4 hover:bg-pink cursor-pointer display-block lg:hidden lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center flex justify-center font-display items-center h-auto text-8 lg:h-5"
        >
          =
        </div>
        <div id="desktoplinks" className={`position-absolute lg:flex w-100%`}>
          <Link href="#" passHref scroll={false}>
            <NavItem className={`bg-lime`}>Kablammo</NavItem>
          </Link>
          <Link href="#typetester" passHref scroll={false}>
            <NavItem className="bg-orange hover:bg-pink lg:hvr-shrink">
              Try It Out!
            </NavItem>
          </Link>
          <Link href="#" passHref scroll={false}>
            <NavItem className="bg-blue hover:bg-pink lg:hvr-shrink">
              Character Set
            </NavItem>
          </Link>
          <Link href="#" passHref scroll={false}>
            <NavItem className="bg-green hover:bg-pink lg:hvr-shrink">
              Download
            </NavItem>
          </Link>
        </div>
        <div className={`w-100% lg:w-20% flex justify-center`}>
          <div
            onClick={() => handleInvert("day")}
            className={`lg:hvr-shrink cursor-pointer w-50% h-auto lg:h-5 lg:border-2 border border-solid border-black text-black bg-yellow rounded-sm lg:rounded-lg text-center flex justify-center font-body items-center hover:bg-pink `}
          >
            <span className="font-display uppercase text-8 lg:text-3">☀</span>
          </div>
          <div
            onClick={() => handleInvert("night")}
            className={`lg:hvr-shrink cursor-pointer w-50% h-auto lg:h-5 lg:border-2 border border-solid border-black text-black bg-extraBlack rounded-sm lg:rounded-lg text-center flex justify-center font-body items-center hover:bg-pink `}
          >
            <span className="font-display uppercase text-8 lg:text-3 text-gray">
              ☾
            </span>
          </div>
        </div>
        <div
          id="mobilelinks"
          className={`hidden position-absolute flex-col w-100%`}
        >
          <Link href="#" passHref scroll={false}>
            <NavItem className="bg-lime">Kablammo</NavItem>
          </Link>
          <Link href="#typetester" passHref scroll={false}>
            <NavItem className="bg-orange">Try It Out!</NavItem>
          </Link>
          <Link href="#" passHref scroll={false}>
            <NavItem className="bg-blue">Character Set</NavItem>
          </Link>
          <Link href="#" passHref scroll={false}>
            <NavItem className="bg-green">Download</NavItem>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .nav {
        }
      `}</style>
    </div>
  );
};

export default Nav;
