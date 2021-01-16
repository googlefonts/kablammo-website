import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";

const VideoGallery = ({ data, className, gallery }) => {
	const [activeVideo, setActiveVideo] = useState(data.items[0]);
	const [previewImages, setPreviewImages] = useState(
		data.items.filter((x, i) => i !== 0)
	);
	const handleSetActiveVideo = (e, i, video) => {
		e.preventDefault();
		setActiveVideo(video);
		setPreviewImages(
			data.items.filter(
				(x, index) =>
					x.video_link.video_id !== video.video_link.video_id
			)
		);
	};
	const handleScrollVideo = (direction) => {
		e.preventDefault();
		// setActiveVideo(video);
		// data.items.filter(x => activeVideo)
		// setPreviewImages(data.items.filter((x, index) => index !== i));
	};
	return (
		<div className={`video-gallery ${className ? className : ""}`}>
			<div className="embed-wrapper-top">
				{/*<a
					className={`arrow`}
					href="#"
					onClick={e => handleScrollVideo(0)}
				>
					⬿
				</a>*/}
				<div
					className={`embed-wrapper video-embed ${activeVideo.video_link.type}`}
					dangerouslySetInnerHTML={{
						__html: activeVideo.video_link.html,
					}}
				/>
				{/*<a
					className={`arrow`}
					href="#"
					onClick={e => handleScrollVideo(1)}
				>
					⤳
				</a>*/}
			</div>
			<span className="ff-favorit-mono caption active-title">
				{activeVideo.video_title}
			</span>
			{previewImages.map((video, i) => {
				return (
					<div
						key={i}
						className={`video-preview-image ${
							i === previewImages.length - 1 ? `last` : ``
						}`}
					>
						<a
							href="#"
							onClick={(e) => handleSetActiveVideo(e, i, video)}
						>
							<img
								className=""
								src={video.video_preview_image.url}
							/>
							<span className="ff-favorit-mono caption">
								{video.video_title}
							</span>
						</a>
					</div>
				);
			})}
			<style global jsx>{`
				.video-gallery {
					// max-height: 75vh;
				}
				.embed-wrapper-top {
					display: flex;
					justify-content: space-around;
					align-items: center;
				}
				.video-preview-image {
					width: 22.5%;
					display: inline-block;
					margin-right: 3.3333%;
				}
				.video-preview-image.last {
					margin-right: 0;
				}
				.video-preview-image img {
					border: 1px solid black;
				}
				.embed-global {
					grid-area: video;
				}
				.active-title.caption {
					font-size: 1.5rem;
					line-height: 2.5rem;
					// text-align: center;
					width: 100%;
					display: block;
					margin-bottom: 2rem;
				}
				.embed-wrapper-top .embed-wrapper.video {
					width: 100%;
				}
				// .embed-wrapper-top .embed-wrapper.video iframe {
				// width: 100%;
				// height: 36vw;
				// margin: 0 auto;
				// display: block;
				// }
				.caption {
					font-size: 1rem;
					color: black;
					text-transform: uppercase;
					line-height: 1rem;
				}
				.arrow {
					font-size: 5vw;
					color: #4cff73;
					-webkit-text-stroke: 1px black;
					outline: 0;
				}
				.arrow:hover {
					color: #704cff !important;
				}
				@media (max-width: 1199px) {
					.video-gallery {
					}
					.active-title.caption {
						margin-bottom: 1rem;
					}
				}
			`}</style>
		</div>
	);
};

export default VideoGallery;
