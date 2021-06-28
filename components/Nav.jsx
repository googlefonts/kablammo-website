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
		let links = [].slice.call(document.getElementsByClassName("togglenavlinks"));
		console.log("toggline links!");
		console.log(links);
		if (mobileNavShowing){
			links.forEach((el)=>{el.classList.add("hidden")});
			console.log("hiding links!");
			setMobileNavShowing(false);
		} else {
			links.forEach((el)=>{el.classList.remove("hidden")});
			console.log("showing links!");
			setMobileNavShowing(true);
		}
	}
	return (
		<div className={`nav flex flex-row`}>
			<div onClick={toggleMobileNav} className="bg-blue px-4 display-block lg:hidden border-2 border-solid border-black text-black rounded-lg text-center flex justify-center font-display items-center h-auto text-8 lg:h-5">=</div>
			<Link href="#" passHref scroll={false}>
				<NavItem className={`hidden bg-lime hover:bg-pink lg:hvr-shrink togglenavlinks`}>
					Kablammo
				</NavItem>
			</Link>
			<Link href="#typetester" passHref scroll={false}>
				<NavItem className="hidden bg-orange hover:bg-pink lg:hvr-shrink togglenavlinks">
					Try It Out!
				</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="hidden bg-blue hover:bg-pink lg:hvr-shrink togglenavlinks">
					Character Set
				</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="hidden bg-green hover:bg-pink lg:hvr-shrink togglenavlinks">
					Download
				</NavItem>
			</Link>
			<div className={`w-100% xl:w-20% flex justify-center`}>
				<div
					onClick={() => handleInvert("day")}
					className={`lg:hvr-shrink cursor-pointer w-50% h-auto lg:h-5 border-2 border-solid border-black text-black bg-yellow rounded-lg text-center flex justify-center font-body items-center hover:bg-pink `}
				>
					<span className="font-display uppercase text-8 lg:text-3">☀</span>
				</div>
				<div
					onClick={() => handleInvert("night")}
					className={`lg:hvr-shrink cursor-pointer w-50% h-auto lg:h-5 border-2 border-solid border-black text-black bg-extraBlack rounded-lg text-center flex justify-center font-body items-center hover:bg-pink `}
				>
					<span className="font-display uppercase text-8 lg:text-3 text-gray">
						☾
					</span>
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
