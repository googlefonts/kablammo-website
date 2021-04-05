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

	useEffect(() => {}, []);
	const handleInvert = (time) => {
		document.body.style.filter =
			time === "day" ? "" : "invert(0.9) hue-rotate(120deg)";
	};
	return (
		<div className={`nav flex flex-col xl:flex-row`}>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-yellow hvr-shrink">Kablammo</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-orange hvr-shrink">Try It Out!</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-lime hvr-shrink">Character Set</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-blue hvr-shrink">Download</NavItem>
			</Link>
			<div className={`w-100% xl:w-20% flex justify-center`}>
				<div
					onClick={() => handleInvert("day")}
					className={`hvr-shrink cursor-pointer w-50% h-5 border-2 border-solid border-black text-black bg-pink rounded-lg text-center flex justify-center font-body items-center`}
				>
					<span className="font-display uppercase text-3">☀</span>
				</div>
				<div
					onClick={() => handleInvert("night")}
					className={`hvr-shrink cursor-pointer w-50% h-5 border-2 border-solid border-black text-black bg-gray rounded-lg text-center flex justify-center font-body items-center`}
				>
					<span className="font-display uppercase text-3">☾</span>
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
