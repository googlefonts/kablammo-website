import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const Frame = (props) => {
	const [child, setChild] = useState(props.children);

	return (
		<div
			className={`Frame w-full bg-contain bg-no-repeat bg-center ${
				props.className ? `${props.className}` : ``
			}`}
		>
			{child}
			<style jsx>{`
				.Frame {
					background-image: ${props.bg ? `url(${props.bg})` : ``};
				}
			`}</style>
		</div>
	);
};

export default Frame;
