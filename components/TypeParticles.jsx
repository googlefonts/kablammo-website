import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Frame from "./Frame";
import TypeParticlesText from "./TypeParticlesText";

const TypeParticles = (props) => {
  // useEffect(() => {
  //   if (window.innerWidth < 1024) {
  //     console.log("small");
  //   } else {
  //     console.log("biiiig");
  //   }
  // });
  return (
    <Frame
      className={`type-particles bg-extraBlack md:border-2 border border-solid border-black rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden h-75vh lg:h-100vh flex justify-center items-center px-10 md:px-20 relative`}
    >
      <div className="text-7.5 md:text-6 lg:text-5 leading-tight text-gray uppercase text-center z-50">
        <TypeParticlesText className={``}>Meet</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>KABLAMMO</TypeParticlesText>{" "}
        <TypeParticlesText color={`#E8F75C`} className={``}>👀</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>the</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>DANCING</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FONT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FROM</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>OUTER</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>SPACE!</TypeParticlesText>{" "}
        <TypeParticlesText color={`#73B6E7`} className={``}>🛸</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>Designed</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>BY</TypeParticlesText>{" "}
        <TypeParticlesText color={`#F97DDA`} className={``}>🙃</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>VECTRO</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FOUNDRY,</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>IT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>FEATURES</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>A</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>MOVEMENT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>AXIS</TypeParticlesText>{" "}
        <TypeParticlesText color={`#9891E8`} className={``}>🌐</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>THAT</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>MAKES</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>THE</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>LETTERS</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>bop</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>and</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>BOUNCE</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>and</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>bloop</TypeParticlesText>{" "}
        <TypeParticlesText className={``}>and</TypeParticlesText>{" "}
        <TypeParticlesText color={`#EB7B57`} className={``}>💥</TypeParticlesText>{" "}      
        </div>

      {/* <div className="hvr-grow-rotate animate-it-fast text-orange absolute top-6 left-5 text-20 leading-tight pointer-events-none">
        💩
      </div>
      <div className="hvr-grow-rotate animate-it text-purple absolute top-35 lg:top-2 left-30 text-20 leading-tight pointer-events-none">
        ⚠
      </div>
      <div className="hvr-grow-rotate animate-it-slow text-yellow absolute top-50 lg:top-2 left-55 text-20 leading-tight pointer-events-none">
        👀
      </div>
      <div className="hvr-grow-rotate animate-it text-green absolute top-6 left-80 text-20 leading-tight pointer-events-none">
        👽
      </div>
      <div className="hvr-grow-rotate animate-it-slow text-pink absolute top-70 lg:top-26 left-24 text-20 leading-tight pointer-events-none">
        🪐
      </div>
      <div className="hvr-grow-rotate animate-it-fast text-blue absolute lg:top-20 top-80 left-70 text-20 leading-tight pointer-events-none">
        🕒
      </div> */}
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
