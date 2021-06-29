import React, { Component, Fragment, useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "./Frame";
import Row from "./Row";
import TypeParticlesText from "./TypeParticlesText";

const TypeParticles = (props) => {
  useEffect(() => {
   if (window.innerWidth < 1024){
     console.log("small")
   } else {console.log("biiiig")}
  });
  return (
    <Frame
      className={`type-particles bg-extraBlack lg:border-2 border border-solid border-black rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden h-100vh flex justify-center items-center px-20 relative`}
    >
      {/*<div className="grayRef w-100% h-100%" ref={grayRef}></div>*/}
      {/* <TimelineAnimations /> */}
      <div className="text-6 leading-tight text-gray uppercase text-center z-50">
        <TypeParticlesText className={``}>Meet</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>KABLAMMO,</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>the</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>DANCING</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FONT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FROM</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>OUTER</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>SPACE!</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>Developed</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>BY</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>VECTRO</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FOUNDRY,</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>IT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FEATURES</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>A</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>DANCE</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>AXIS</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>THAT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>MAKES</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>THE</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>LETTERS</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>bop</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>and</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>BOUNCE</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>and</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>bloop</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>AROUND.</TypeParticlesText>
      </div>

      <div className="hvr-grow-rotate animate-it-fast text-orange absolute top-6 left-5 text-20 leading-tight pointer-events-none">
        💩
      </div>
      <div className="hvr-grow-rotate animate-it text-purple absolute top-2 left-30 text-20 leading-tight pointer-events-none">
        ⚠
      </div>
      <div className="hvr-grow-rotate animate-it-slow text-yellow absolute top-2 left-55 text-20 leading-tight pointer-events-none">
        👀
      </div>
      <div className="hvr-grow-rotate animate-it text-green absolute top-6 left-80 text-20 leading-tight pointer-events-none">
        👽
      </div>
      <div className="hvr-grow-rotate animate-it-slow text-pink absolute top-26 left-24 text-20 leading-tight pointer-events-none">
        🪐
      </div>
      <div className="hvr-grow-rotate animate-it-fast text-blue absolute top-20 left-70 text-20 leading-tight pointer-events-none">
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
