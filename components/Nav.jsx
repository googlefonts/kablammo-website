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
		<div className={`nav flex`}>
			<div
				className={`w-1/4 border-2 border-solid border-black text-black bg-yellow rounded-lg h-32 text-center text-4xl flex justify-center font-body items-center`}
			>
				<span className="uppercase">Kablammo</span>
			</div>
			<div
				className={`w-1/4 border-2 border-solid border-black text-black bg-orange rounded-lg h-32 text-center text-4xl flex justify-center font-body items-center`}
			>
				<span className="uppercase">Character Set</span>
			</div>
			<div
				className={`w-1/4 border-2 border-solid border-black text-black bg-lime rounded-lg h-32 text-center text-4xl flex justify-center font-body items-center`}
			>
				<span className="uppercase">Process</span>
			</div>
			<div
				className={`w-1/4 border-2 border-solid border-black text-black bg-green rounded-lg h-32 text-center text-4xl flex justify-center font-body items-center`}
			>
				<span className="uppercase">Download</span>
			</div>
			<div
				className={`w-1/4 border-2 border-solid border-black text-black bg-purple rounded-lg h-32 text-center text-4xl flex justify-center font-body items-center`}
			>
				<span className="uppercase">By Vektor Font</span>
			</div>
			<style jsx>{`
				.nav {
				}
			`}</style>
		</div>
	);
};

export default Nav;
