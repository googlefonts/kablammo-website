import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Row from "../components/Row";
import Slice from "../components/Slice";

const SliceZone = ({ data, className }) => {
	const sliceZone = data.body;
	if (sliceZone && sliceZone.length > 0) {
		return sliceZone.map((slice, i) => {
			return (
				<Row key={i} className={`post bg-light-green b-none fd-column`}>
					<Slice slice={slice} />
				</Row>
			);
		});
	} else {
		return <Row className={`bg-light-green b-none`}></Row>;
	}
};

export default SliceZone;
