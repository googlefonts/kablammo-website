import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "./Frame";
import Row from "./Row";
import TypeParticlesText from "./TypeParticlesText";

const TypeParticles = (props) => {
	return (
		<Frame
			className={`type-particles bg-extraBlack border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh flex justify-center items-center px-20 relative`}
		>
			{/*<div className="grayRef w-full h-100%" ref={grayRef}></div>*/}
			{/* <TimelineAnimations /> */}
			<div className="text-6 leading-tight text-gray uppercase text-center">
				<TypeParticlesText>Meet</TypeParticlesText>{" "}
				<TypeParticlesText>KABLAMMO</TypeParticlesText>,{" "}
				<TypeParticlesText>the</TypeParticlesText>{" "}
				<TypeParticlesText>DANCING</TypeParticlesText>{" "}
				<TypeParticlesText>FONT</TypeParticlesText>{" "}
				<TypeParticlesText>FROM</TypeParticlesText>{" "}
				<TypeParticlesText>OUTER</TypeParticlesText>{" "}
				<TypeParticlesText>SPACE!</TypeParticlesText>{" "}
				<TypeParticlesText>Developed</TypeParticlesText>{" "}
				<TypeParticlesText>BY</TypeParticlesText>{" "}
				<TypeParticlesText>VEKTOR</TypeParticlesText>{" "}
				<TypeParticlesText>FOUNDRY</TypeParticlesText>,{" "}
				<TypeParticlesText>IT</TypeParticlesText>{" "}
				<TypeParticlesText>FEATURES</TypeParticlesText>{" "}
				<TypeParticlesText>A</TypeParticlesText>{" "}
				<TypeParticlesText>DANCE</TypeParticlesText>{" "}
				<TypeParticlesText>AXIS</TypeParticlesText>{" "}
				<TypeParticlesText>THAT</TypeParticlesText>{" "}
				<TypeParticlesText>MAKES</TypeParticlesText>{" "}
				<TypeParticlesText>THE</TypeParticlesText>{" "}
				<TypeParticlesText>LETTERS</TypeParticlesText>
				<TypeParticlesText>bop</TypeParticlesText>{" "}
				<TypeParticlesText>and</TypeParticlesText>{" "}
				<TypeParticlesText>BOUNCE</TypeParticlesText>{" "}
				<TypeParticlesText>and</TypeParticlesText>{" "}
				<TypeParticlesText>bloop</TypeParticlesText>{" "}
				<TypeParticlesText>AROUND</TypeParticlesText>.
			</div>
			<div className="animate-it-fast text-orange absolute top-6 left-5 text-20 leading-tight">
				💩
			</div>
			<div className="animate-it text-purple absolute top-2 left-30 text-20 leading-tight">
				⚠
			</div>
			<div className="animate-it-slow text-yellow absolute top-2 left-55 text-20 leading-tight">
				👀
			</div>
			<div className="animate-it text-green absolute top-6 left-80 text-20 leading-tight">
				👽
			</div>
			<div className="animate-it-slow text-pink absolute top-26 left-24 text-20 leading-tight">
				🪐
			</div>
			<div className="animate-it-fast text-blue absolute top-20 left-70 text-20 leading-tight">
				🕒
			</div>
			<style jsx>{`
				.type-particles {
					padding: 25px 10vw 0;
					margin: 0 auto;
				}
				@media (max-width: 1199px) {
					.type-particles {
						padding: 1rem;
					}
				}
			`}</style>
		</Frame>
	);
};

export default TypeParticles;
