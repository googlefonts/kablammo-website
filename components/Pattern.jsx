import React, { Component } from "react";
import MatterType from "../components/MatterType";

const Pattern = ({ className, children, bgImage }) => {
	const backgroundImage = bgImage ? "url('" + bgImage + "')" : "none";

	return (
		<div
			className={`h-100% w-100% bg-cover bg-center ${
				className ? className : ""
			}`}
			style={{ backgroundImage: backgroundImage }}
		>
			{/*<MatterType />*/}
			{children}
		</div>
	);
};
export default Pattern;
