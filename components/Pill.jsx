import { useState, useEffect } from "react";
const Pill = (props) => {
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		props.children && setShowChild(true);
	}, []);

	return (
		<div
			className={`w-100% border-2 border-solid border-black text-black rounded-lg text-center flex justify-center items-center ${
				props.className && `${props.className}`
			}`}
		>
			{showChild && props.children}
		</div>
	);
};

export default Pill;
