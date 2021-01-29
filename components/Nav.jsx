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
		<div className={`nav flex flex-col xl:flex-row`}>
			<div
				className={`w-screen border-2 border-solid border-black text-black bg-yellow rounded-lg text-center text-4xl flex justify-center font-body items-center h-16 xl:h-32`}
			>
				<span className="uppercase">Kablammo</span>
			</div>
			<div
				className={`w-screen border-2 border-solid border-black text-black bg-orange rounded-lg text-center text-4xl flex justify-center font-body items-center h-16 xl:h-32`}
			>
				<span className="uppercase">Character Set</span>
			</div>
			<div
				className={`w-screen border-2 border-solid border-black text-black bg-lime rounded-lg text-center text-4xl flex justify-center font-body items-center h-16 xl:h-32`}
			>
				<span className="uppercase">Process</span>
			</div>
			<div
				className={`w-screen border-2 border-solid border-black text-black bg-green rounded-lg text-center text-4xl flex justify-center font-body items-center h-16 xl:h-32`}
			>
				<span className="uppercase">Download</span>
			</div>
			<div
				className={`w-screen border-2 border-solid border-black text-black bg-purple rounded-lg text-center text-4xl flex justify-center font-body items-center h-16 xl:h-32`}
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
