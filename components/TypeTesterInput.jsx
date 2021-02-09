import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";

const TypeTesterInput = ({ typeMove }) => {
	const [showChild, setShowChild] = useState(false);
	const [moveSetting, setMoveSetting] = useState(typeMove.value);
	useEffect(() => {
		setMoveSetting(typeMove.value);
	}, []);
	useEffect(() => {
		console.log("type tester input type move", moveSetting);
	}, [typeMove]);
	console.log("typeMove", typeMove);

	return (
		<div className="row-span-4 flex justify-center">
			<div className="flex justify-center align-middle h-100% w-3/4">
				<span
					style={{
						fontVariationSettings: "'move' " + moveSetting,
					}}
					className="text-12 w-full block leading-none text-center text-pink focus:outline-none overflow-hidden self-center break-word"
					contentEditable="true"
					suppressContentEditableWarning={true}
					spellCheck="false"
				>
					⚠ VARIABLE FONT 🌼 BY VECTOR 😵
				</span>
			</div>
		</div>
	);
};

export default TypeTesterInput;
