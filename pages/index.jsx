import React, { useState, useRef, useEffect } from "react";
import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";
import Head from "next/head";
import Nav from "../components/Nav";
import Frame from "../components/Frame";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import Loader from "../components/Loader";
import Media from "react-media";
import dynamic from "next/dynamic";
import Pill from "../components/Pill";
import TypeTester from "../components/TypeTester";
import { InView } from 'react-intersection-observer'
import TypeParticles from "../components/TypeParticles";
import Kablammo from "../components/Kablammo";
import TypeScales from "../components/TypeScales";
import SlotMachine from "../components/SlotMachine";
import MarqueeScroller from "../components/Marquee";

var FontFaceObserver = require("fontfaceobserver");

const isBrowser = typeof window !== "undefined";

const CharacterSetNoSSR = dynamic(() => import("../components/CharacterSet"), {
  ssr: false,
});

const fetchData = async (setDocData) => {
  const response = await client.query(
    Prismic.Predicates.at("document.type", "home_page")
  );
  if (isBrowser) {
    var font = new FontFaceObserver("Kablammo");
    font.load().then(function () {
      if (response) {
        setDocData(response.results[0]);
      }
    });
  }
};
function Index(props) {
  const [doc, setDocData] = useState(null);
  const grayRef = useRef(null);
  const [loaderVisible, setLoaderVisible] = useState("");
  fetchData(setDocData);
  const pageReady = doc !== null ? true : false;
  return pageReady ? (
    <Media
      defaultMatches={{ mobile: false, desktop: false }}
      queries={{
        mobile: "(max-width: 1199px)",
        desktop: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <div className={`index bg-black`}>
          <Head>
            <title>Kablammo</title>
            <meta name="description" content="Kablammo" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
            <meta charSet="utf-8" />
            <link
              rel="icon"
              type="image/png"
              href="/images/kablammo-favicon.png"
            />
            <meta property="og:url" content={process.env.siteUrl} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={""} />
            <meta property="og:description" content={""} />
            <meta property="og:image" content={""} />
            <script async defer src=""></script>
          </Head>
          <div>
           {/* <Loader className={loaderVisible}/> */}
            <Frame className={`lg:h-100vh flex justify-between flex-col cursor-auto`}>

              {/* NAV */}
              <Nav />
              {/* LANDING */}

              <Pill
                className={`bg-purple bg-clip-padding overflow-hidden h-100%`}
              >
                <Kablammo /> 
              </Pill>
              {/* SMALL SCROLLING TEXT 1 */}
              <MarqueeScroller className="bg-gray h-10 lg:h-4 hvr-wobble-top hvr-shutter-in-horizontal hover:bg-yellow">
                  <span className={`text-5 lg:text-3 text-black font-display`}>
                    ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀
                    VECTRO ☮ TYPE ☼ FOUNDRY &nbsp;
                  </span>
              </MarqueeScroller>
            </Frame>
            {/* TYPE PARTICLES */}
            <TypeParticles />
            <MarqueeScroller direction="right" className="bg-orange h-10 lg:h-4 cursor-default">
              <span className="text-4 text-blue uppercase font-display cursor-default">&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;</span>
            </MarqueeScroller> 
            {/* TYPE TESTER 1 */} 
            <InView threshold={0}>
            {({ inView, ref, entry}) => (
              <div ref={ref} >
                <TypeTester inView={inView} log="logthis!" />
              </div>
            )}
            </InView>
            {/* SLIDER FRAME */}
            <div id="carouselwrapper">
            <Carousel
              className={`rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden h-50vh lg:h-100vh`}
               items={doc.data.carousel}
               />
            </div>
            <MarqueeScroller direction="right" className="bg-gray h-10 lg:h-4 hvr-wobble-top hvr-shutter-in-horizontal hover:bg-pink cursor-default">
              <span className={`text-5 lg:text-3 text-black font-display`}>
                ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀
                VECTRO ☮ TYPE ☼ FOUNDRY &nbsp;
              </span>
            </MarqueeScroller>
            {/* TYPE SCALES */}
            <TypeScales />
            {/* CHARACTER SET}  */}
            <MarqueeScroller direction="left" className="bg-pink h-10 lg:h-4 cursor-default">
              <span className="text-4 text-lime uppercase font-display cursor-default">&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;</span>
            </MarqueeScroller>
            <div
              className={`bg-green rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden`}
              id="characterset"
            >
              <p className="text-center text-yellow text-10 lg:text-8 my-3 lg:my-6 font-display">
                Character Set
              </p>
              <CharacterSetNoSSR />
            </div>
            <SlotMachine />
            {/* BIG SROLLING TEXT */}
            <MarqueeScroller direction="left" className="bg-lime h-30 cursor-auto cursor-default">
              <span className="text-24 text-blue uppercase font-display">&nbsp;The making of KABLAMMO</span>
            </MarqueeScroller>
            <MarqueeScroller direction="right" className="bg-orange h-30 cursor-auto cursor-default">
              <span className="text-24 text-gray uppercase font-display">&nbsp;The making of KABLAMMO</span>
            </MarqueeScroller>
            {/* ESSAY */}
            <Frame
              className={`bg-green rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden h-auto`}
            >
              <p className="text-center text-gray text-10 lg:text-8 my-3 lg:my-6 font-display">
                About the Font
              </p>
              <div className={`grid lg:grid-cols-1 w-80 lg:w-70 m-auto mb-5`}>
                <div className="text-14pt lg:text-20pt xl:text-24pt">
                  <p className="font-mono text-gray block mb-2 lg:mb-8">
                    Kablammo is a variable font inspired by Jokerman. We love Jokerman's expressive, playful, maximalist, and care free personality. 
                    We wanted to put our own spin on it—to take this genre of fonts and make it more contemporary. <br />
                    <span className="font-display text-yellow cursor-pointer"><a target="_blank" href="https://www.fiskprojects.com/">Click here</a></span> to read more about the process!
                  </p>
                </div>
              </div>
            </Frame>
            {/* DOWNLOAD */}
            <a id="download" className="w-100% text-black rounded-sm lg:rounded-lg text-center flex justify-center items-center bg-purple hover:bg-yellow hover:text-gray h-30 text-16 text-lime uppercase cursor-pointer font-display" target="_blank" href="https://www.fiskprojects.com/"> 
                Download
            </a>
            <Pill className="bg-orange h-auto ">
              <span className="font-body text-4 lg:text-2 py-4 px-4 uppercase">
              Art Direction<br/>Travis Kochel and Lizy Gershenzon
              </span>
            </Pill>
            <Pill className="bg-lime h-auto ">
              <span className="font-body text-4 lg:text-2 py-4 px-4 uppercase">
              Lead Design and Production<br/>Travis Kochel
              </span>
            </Pill>
            <Pill className="bg-blue h-auto hover:bg-yellow ">
              <a className="font-body text-4 lg:text-2 py-4 px-4 uppercase" href="https://www.futurefonts.xyz/daria-petrova">
              Cyrillic and Production Help<br/>Daria Petrova and Ethan Cohen
              </a>
            </Pill>
            <Pill className="bg-pink hover:bg-yellow h-auto">
              <a className="font-body py-1 text-4 lg:text-2 py-4 uppercase" href="https://www.fiskprojects.com/">
              Website Design and Development<br/>FISK
              </a>
            </Pill>
            <Pill className="bg-gray h-auto hover:bg-yellow ">
              <a className="font-body text-4 lg:text-2 py-4 uppercase " href="https://fonts.google.com/">
                Commissioned by Google Fonts
              </a>
            </Pill>
            {/* VECTRO TYPE FOUNDRY CREDIT */}
            <a className="text-6 uppercase cursor-pointer bg-blue h-12 hover:bg-yellow cursor-pointer w-100% font-display text-black rounded-sm lg:rounded-lg text-center flex justify-center items-center" target="_blank" href="https://www.fiskprojects.com/">
                Font by Vectro Type Foundry
            </a>
            >
          </div>
        </div>
      )}
    </Media>
  ) : (
    <Loading initial />
  );
}

export default Index;
