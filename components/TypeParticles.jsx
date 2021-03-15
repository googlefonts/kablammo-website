import React, { Component, Fragment, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "./Frame";
import Row from "./Row";

const TypeParticles = (props) => {
	return (
		<Frame
			className={`type-particles bg-gray border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh flex justify-center items-center px-20`}
		>
			{/*<div className="grayRef w-full h-100%" ref={grayRef}></div>*/}
			{/* <TimelineAnimations /> */}
			<span className="animate-it-slow text-6 leading-tight text-black uppercase text-center">
				Meet KABLAMMO, the DANCING FONT FROM OUTER SPACE! Developed BY
				VEKTOR FOUNDRY, IT FEATURES A DANCE AXIS THAT MAKES THE LETTERS
				bop and BOUNCE and bloop AROUND.
			</span>
			<div className="text-20 leading-tight text-black uppercase text-center w-screen h-100% absolute">
				<div className="animate-it-fast text-orange absolute top-6 left-5">
					💩
				</div>
				<div className="animate-it-fast text-purple absolute top-2 left-30">
					⚠
				</div>
				<div className="animate-it-fast text-yellow absolute top-0 left-55">
					👀
				</div>
				<div className="animate-it-fast text-green absolute top-6 left-80">
					👽
				</div>
				<div className="animate-it-fast text-pink absolute top-26 left-24">
					🪐
				</div>
				<div className="animate-it-fast text-blue absolute top-20 left-70">
					🕒
				</div>
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
