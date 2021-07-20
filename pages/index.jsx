import React, { useState, useRef } from "react";
import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";
import Head from "next/head";
import ScrollingText from "../components/ScrollingText";
import Nav from "../components/Nav";
import Frame from "../components/Frame";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Media from "react-media";
import dynamic from "next/dynamic";
import Pill from "../components/Pill";
import TypeTester from "../components/TypeTester";

import TypeParticles from "../components/TypeParticles";
import Kablammo from "../components/Kablammo";
import TypeScales from "../components/TypeScales";
import SlotMachine from "../components/SlotMachine";

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

const setTwo = () => {
  // Make an instance of two and place it on the page.
  var elem = document.getElementById("draw-shapes");
  var params = { width: 285, height: 200 };
  var two = new Two(params).appendTo(elem);

  // two has convenience methods to create shapes.
  var circle = two.makeCircle(72, 100, 50);
  var rect = two.makeRectangle(213, 100, 100, 100);

  // The object returned has many stylable properties:
  circle.fill = "#FF8000";
  circle.stroke = "orangered"; // Accepts all valid css color
  circle.linewidth = 5;

  rect.fill = "rgb(0, 200, 255)";
  rect.opacity = 0.75;
  rect.noStroke();

  // Don't forget to tell two to render everything
  // to the screen
  two.update();
};

function Index(props) {
  const [doc, setDocData] = useState(null);
  const grayRef = useRef(null);

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
          <Layout>
            <Frame className={`lg:h-100vh flex justify-between flex-col`}>

              {/* NAV */}
              <Nav />
              {/* LANDING */}

              <Pill
                className={`bg-purple bg-clip-padding overflow-hidden h-100%`}
              >
                <Kablammo />
              </Pill>
              {/* SMALL SCROLLING TEXT 1 */}
              <Pill className="hvr-wobble-top hvr-shutter-in-horizontal bg-gray hover:bg-yellow h-10 lg:h-4 bg-clip-padding overflow-hidden">
                <ScrollingText
                  href={`#`}
                  blank
                  specialRight
                  hideMobile
                  borderTop
                  large
                >
                  <span
                    className={`text-5 lg:text-3 text-black uppercase`}
                  >
                    ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀
                    VECTRO ☮ Type ☼ Foundry &nbsp;
                  </span>
                </ScrollingText>
              </Pill>
            </Frame>
            {/* TYPE PARTICLES */}
            <TypeParticles />
            {/* TYPE TESTER 1 */}
            <TypeTester />
            
            {/* SLIDER FRAME */}
            <Carousel
              className={`rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden h-50vh lg:h-100vh`}
              items={doc.data.carousel}
            />
             <Pill className="hvr-wobble-top hvr-shutter-in-horizontal bg-gray hover:bg-pink h-10 lg:h-4 bg-clip-padding overflow-hidden">
              <ScrollingText
                className=""
                href={`#`}
                blank
                specialRight
                hideMobile
                borderTop
                large
                right
              >
                <span className="text-5 lg:text-3 text-black uppercase">
                  👁 A 🌐 Dancing ☀ typeface ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀ VECTRO
                  ☮ Type ☼ Foundry &nbsp;
                </span>
              </ScrollingText>
            </Pill> 
            
            {/* TYPE SCALES */}
            <TypeScales />
            {/* CHARACTER SET */}
                <Pill className="bg-pink hover:bg-orange h-10 lg:h-4 bg-clip-padding overflow-hidden">
        <ScrollingText
          className=""
          href={`#`}
          blank
          specialRight
          hideMobile
          borderTop
          large
        >
          <span className="text-4 text-lime uppercase">
            &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
          </span>
        </ScrollingText>
      </Pill> 
            <div
              className={`bg-green rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden`}
              id="characterset"
            >
              <p className="text-center text-yellow text-8 lg:text-5 my-3 lg:my-6">
                Character Set
              </p>
              <CharacterSetNoSSR />
            </div>
            <SlotMachine />
            {/* SMALL SCROLLING TEXT PILL 2 */}
            {/* BIG SROLLING TEXT 1 */}
            <Pill className="bg-lime hover:bg-blue h-30 bg-clip-padding overflow-hidden">
              <ScrollingText
                className=""
                href={`#`}
                blank
                specialRight
                hideMobile
                borderTop
                large
                left
              >
                <span className="text-24 text-purple uppercase">
                  The making of KABLAMMO 
                </span>
              </ScrollingText>
            </Pill>
            {/* BIG SROLLING TEXT 2 */}
            <Pill className="bg-pink hover:bg-green h-30 bg-clip-padding overflow-hidden">
              <ScrollingText
                className=""
                href={`#`}
                blank
                specialRight
                hideMobile
                borderTop
                large
                right
              >
                <span className="text-24 text-gray uppercase">
                  The making of KABLAMMO
                </span>
              </ScrollingText>
            </Pill>
            {/* ESSAY */}
            <Frame
              className={`bg-gray rounded-sm lg:rounded-lg bg-clip-padding overflow-hidden h-auto lg:h-75vh`}
            >
              <p className="text-center text-black text-8 lg:text-5 my-3 lg:my-6">
                About the Font
              </p>
              <div className={`grid lg:grid-cols-1 w-90vh m-auto`}>
                <div className="px-5 lg:pl-5 lg:pr-2.5 text-5 lg:text-2 xl:text-1.5">
                  <p className="font-body block mb-2 lg:mb-8">
                    Nicolette Gray wrote about the Caslon Italian (above) in her
                    book Nineteenth Century.
                  </p>
                  <p className="font-mono block mb-4 lg:mb-8">
                    Maelstrom & Maelstrom Sans are reversed-stress typefaces.
                    They’re “perverse”, to be sure, but that’s exactly their
                    charm. They belong to a genre destined to be a perpetual
                    typographic outsider — never fashionable yet never
                    abandoned.
                  </p>
                </div>
              </div>
            </Frame>
            {/* DOWNLOAD */}
            <Pill className="bg-purple hover:bg-pink h-30">
              <span className="text-16 text-lime uppercase cursor-pointer">
                Download
              </span>
            </Pill>
            {/* <Nav /> */}
            {/* CREDITS */}
            <Pill className="bg-gray h-auto lg:h-6">
            <span className="font-body text-4 lg:text-2 py-2 px-4 uppercase">
                Art Direction
              </span>
              </Pill>
              <Pill className="bg-yellow h-auto lg:h-6">
              <span className="font-body text-4 lg:text-2 py-2 px-4 uppercase">
              Travis Kochel and Lizy Gershenzon
              </span>
            </Pill>
            <Pill className="bg-gray h-auto lg:h-6">
            <span className="font-body text-4 lg:text-2 py-2 px-4 uppercase ">
            Lead Design and Production 
              </span>
              </Pill>
              <Pill className="bg-purple h-auto lg:h-6">
              <span className="font-body text-4 lg:text-2 py-2 px-4 uppercase">
              Travis Kochel
              </span>
            </Pill>
            <Pill className="bg-gray h-auto lg:h-6">
              <span className="font-body text-4 lg:text-2 py-2 px-4 uppercase ">
                Cyrillic and Production Help
              </span>
            </Pill>
            <Pill className="bg-lime h-auto lg:h-6">
              <span className="font-body text-4 lg:text-2 py-2 px-4 uppercase">
                Daria Petrova and Ethan Cohen
              </span>
            </Pill>
            <Pill className="bg-gray h-auto lg:h-6">
              <span className="font-body py-1 text-4 lg:text-2 py-2 uppercase ">
                Website Design and Development
              </span>
            </Pill>
            <Pill className="bg-pink h-auto lg:h-6">
              <span className="font-body py-1 text-4 lg:text-2 py-2 uppercase">
                FISK
              </span>
            </Pill>
            <Pill className="bg-gray h-auto lg:h-6">
              <span className="font-body text-4 lg:text-2 py-2 uppercase ">
                Commissioned by Google Fonts
              </span>
            </Pill>
            {/* VECTRO TYPE FOUNDRY CREDIT */}
            <Pill className="bg-blue h-12 hover:bg-yellow cursor-pointer">
              <span className="text-6 uppercase cursor-pointer">
                Font by Vectro Type Foundry
              </span>
            </Pill>
            
          </Layout>
        </div>
      )}
    </Media>
  ) : (
    <Loading initial />
  );
}

export default Index;
