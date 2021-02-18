import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const Layout = (props) => {
	const [child, setChild] = useState(props.children);

	return (
		<div className={`layout`}>
			{child}
			<style jsx global>{`
				.layout {
					scroll-snap-type: y mandatory;
				}
				.layout > * {
					scroll-snap-align: start;
				}
				@media (max-width: 1199px) {
					.layout {
						padding-top: ${props.padding
							? props.padding + "px"
							: "0px"};
					}
				}
			`}</style>
		</div>
	);
};

export default Layout;
