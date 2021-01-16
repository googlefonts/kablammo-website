import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const Button = props => {
	const [child, setChild] = useState(props.children);

	return (
		<div className={`button-wrapper`}>
			<a className={`button`} href={props.href}>
				<h2 className="ff-favorit-light">{child}</h2>
			</a>
			<style jsx>{`
				.button-wrapper {
					width: 100%;
				}
				.button {
					display: inline-block;
					border: 1px solid black;
					border-radius: 25px;
					padding: 15px 25%;
					background: white;
					text-transform: uppercase;
					font-weight: bold;
					text-decoration: none;
					color: black;
					margin-top: 10px;
				}

				.button:hover {
					background: #f0f0f0;
				}
			`}</style>
		</div>
	);
};

export default Button;
