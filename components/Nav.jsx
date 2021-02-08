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

const Nav = (props) => {
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {}, []);

	return (
		<div className={`nav flex flex-col xl:flex-row`}>
			<div
				className={`w-screen xl:w-1/5 border-2 border-solid border-black text-black bg-yellow rounded-lg text-center flex justify-center font-body items-center h-16 xl:h-6`}
			>
				<span className="uppercase text-2">Kablammo</span>
			</div>
			<div
				className={`w-screen xl:w-1/5 border-2 border-solid border-black text-black bg-orange rounded-lg text-center flex justify-center font-body items-center h-16 xl:h-6`}
			>
				<span className="uppercase text-2">Character Set</span>
			</div>
			<div
				className={`w-screen xl:w-1/5 border-2 border-solid border-black text-black bg-lime rounded-lg text-center flex justify-center font-body items-center h-16 xl:h-6`}
			>
				<span className="uppercase text-2">Process</span>
			</div>
			<div
				className={`w-screen xl:w-1/5 border-2 border-solid border-black text-black bg-blue rounded-lg text-center flex justify-center font-body items-center h-16 xl:h-6`}
			>
				<span className="uppercase text-2">Download</span>
			</div>
			<div className={`w-screen xl:w-1/5 flex justify-center`}>
				<div
					className={`w-1/2 h-16 xl:h-6 border-2 border-solid border-black text-black bg-pink rounded-lg text-center flex justify-center font-body items-center`}
				>
					<span className="font-display uppercase xl:text-4">☀</span>
				</div>
				<div
					className={`w-1/2 h-16 xl:h-6 border-2 border-solid border-black text-black bg-gray rounded-lg text-center flex justify-center font-body items-center`}
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
