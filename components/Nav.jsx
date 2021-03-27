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

	return (
		<div className={`nav flex flex-col xl:flex-row`}>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-yellow">Kablammo</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-orange">Try It Out!</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-lime">Character Set</NavItem>
			</Link>
			<Link href="#" passHref scroll={false}>
				<NavItem className="bg-blue">Download</NavItem>
			</Link>
			<div className={`w-100% xl:w-20% flex justify-center`}>
				<div
					className={`w-50% h-16 xl:h-6 border-2 border-solid border-black text-black bg-pink rounded-lg text-center flex justify-center font-body items-center`}
				>
					<span className="font-display uppercase xl:text-4">☀</span>
				</div>
				<div
					className={`w-50% h-16 xl:h-6 border-2 border-solid border-black text-black bg-gray rounded-lg text-center flex justify-center font-body items-center`}
				>
					<span className="font-display uppercase xl:text-4">☾</span>
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
