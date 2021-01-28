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

const Nav = (props) => {
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {}, []);

	return (
		<div className={`nav`}>
			<div
				className={`w-full border-2 border-black text-black bg-yellow rounded-lg h-20 text-center flex justify-center items-center`}
			>
				<span className="uppercase">Filters</span>
			</div>

			<style jsx>{`
				.nav {
				}
			`}</style>
		</div>
	);
};

export default Nav;
