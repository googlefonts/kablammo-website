import React, { useState } from "react";

const Frame = (props) => {
	const [child, setChild] = useState(props.children);
	return (
		<div
			className={`Frame w-100% bg-contain bg-no-repeat bg-center ${
				props.className ? `${props.className}` : ``
			}`}
		>
			{child}
			<style jsx>{`
				.Frame {
					background-image: ${props.bg ? `url(${props.bg})` : `none`};
				}
			`}</style>
		</div>
	);
};

export default Frame;
