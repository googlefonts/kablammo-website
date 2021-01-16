import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Row from "../components/Row";
import Image from "../components/Image";
import TwoColumnImage from "../components/TwoColumnImage";
import ImageCarousel from "../components/ImageCarousel";
import VideoGallery from "../components/VideoGallery";

const Slice = ({ slice }) => {
	switch (slice.slice_type) {
		case "text":
			return (
				<div className={`text-wrapper`}>
					{RichText.render(slice.primary.text)}
				</div>
			);
		case "image_gallery":
			return slice.items.map((image, i) => {
				return <Image key={i} data={image} gallery />;
			});
		case "image":
			return <Image data={slice} />;
		case "image_2_column":
			return <TwoColumnImage data={slice} />;
		case "image_carousel":
			return <ImageCarousel data={slice} />;
		case "embed":
			return (
				<div
					className={`embed-wrapper ${slice.primary.embed_link.type}`}
					dangerouslySetInnerHTML={{
						__html: slice.primary.embed_link.html,
					}}
				/>
			);
		case "video_gallery":
			return <VideoGallery data={slice} />;
		default:
			return <div></div>;
	}
};

export default Slice;
