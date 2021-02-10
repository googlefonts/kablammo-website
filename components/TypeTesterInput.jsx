import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";

const TypeTesterInput = (props) => {
	const [showChild, setShowChild] = useState(false);
	const [moveSetting, setMoveSetting] = useState(props.typeMove);
	useEffect(() => {
		setMoveSetting(props.typeMove);
		console.log(moveSetting, props.typeMove);
	}, [props.typeMove]);

	return (
		<div key={moveSetting} className="row-span-4 flex justify-center">
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
