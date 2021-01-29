import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useRef,
} from "react";
import Link from "next/link";

const Loading = (props) => {
	const [child, setChild] = useState(props.children);

	return (
		<div className={`loading bg-lime`}>
			<style jsx>{`
				.loading {
				}
			`}</style>
		</div>
	);
};

export default Loading;
