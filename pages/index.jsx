import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import {
  client,
  linkResolver,
  apiEndpoint,
  accessToken,
} from "../prismic-configuration";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import ScrollingText from "../components/ScrollingText";
import Row from "../components/Row";
import Box from "../components/Box";
import BoxGrid from "../components/BoxGrid";
import CategoryList from "../components/CategoryList";
import CategoryImageList from "../components/CategoryImageList";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Frame from "../components/Frame";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Media from "react-media";
import Moment from "react-moment";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import dynamic from "next/dynamic";
import Pill from "../components/Pill";
import TypeTester from "../components/TypeTester";
import TypeTester3 from "../components/TypeTester3";
import useVariableFont from "react-variable-fonts";
import TimelineAnimations from "../components/TimelineAnimations";
import IntersectBox from "../components/IntersectBox";
import AnimateItBox from "../components/AnimateItBox";
import Scene from "../components/Scene";
import Pattern from "../components/Pattern";
import TypeParticles from "../components/TypeParticles";
import Kablammo from "../components/Kablammo";
import TypeScales from "../components/TypeScales";
import SlotMachine from "../components/SlotMachine";
import IntersectionWrapper from "../components/IntersectionWrapper";
import useIntersectionObserver from "../util/useIntersectionObserver";

const isBrowser = typeof window !== "undefined";

const initialSettings = {
  BVEL: 20,
  SHDW: 50,
};

const CharacterSetNoSSR = dynamic(() => import("../components/CharacterSet"), {
  ssr: false,
});

const fetchData = async (setDocData) => {
  const response = await client.query(
    Prismic.Predicates.at("document.type", "home_page")
  );
  if (response) {
    setDocData(response.results[0]);
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
            <Frame className={`h-100vh flex justify-between flex-col`}>
              {/* SCENE */}
              {isBrowser && <Scene />}
              {/* NAV */}
              <Nav />
              {/* LANDING */}

              <Pill
                className={`bg-purple border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100%`}
              >
                <Kablammo />
              </Pill>
              {/* SMALL SCROLLING TEXT 1 */}
              <Pill className="hvr-wobble-top hvr-shutter-in-horizontal bg-gray hover:bg-yellow h-5 bg-clip-padding overflow-hidden">
                <ScrollingText
                  href={`#`}
                  blank
                  specialRight
                  hideMobile
                  borderTop
                  large
                >
                  <span className={`animate-it text-3 text-black uppercase`}>
                    👁 A 🌐 Dancing ☀ typeface ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀
                    VECTRO ☮ Type ☼ Foundry &nbsp;
                  </span>
                </ScrollingText>
              </Pill>
            </Frame>

            {/* TYPE TESTER 1 */}
            <TypeTester />
            {/* TYPE PARTICLES */}
            <TypeParticles />
            {/* SMALL SCROLLING TEXT 1 */}
            <Pill className="hvr-wobble-top hvr-shutter-out-horizontal bg-lime hover:bg-green h-6 bg-clip-padding overflow-hidden">
              <ScrollingText
                className="cursor-pointer"
                blank
                specialRight
                hideMobile
                borderTop
                large
                right
              >
                <span className="animate-it-fast text-6 leading-none inline-block -mt-5 text-blue uppercase">
                  &#xE006;&#xE006;&#xE006;&#xE006;&#xE006;&#xE006;&#xE006;&#xE006;
                </span>
              </ScrollingText>
            </Pill>
            {/* SLIDER FRAME */}
            <Carousel
              className={`bg-orange border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
              items={doc.data.carousel}
            />
            {/* TYPE SCALES */}
            <TypeScales />
            {/* CHARACTER SET */}
            <div
              className={`bg-green border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden`}
            >
              <h3 className="text-center text-yellow mt-6">Character Set</h3>
              <CharacterSetNoSSR />
            </div>
            <SlotMachine />
            {/* SMALL SCROLLING TEXT PILL 2 */}
            {/* BIG SROLLING TEXT 1 */}
            <Pill className="hvr-wobble-top hvr-shutter-in-horizontal bg-gray hover:bg-orange h-6 bg-clip-padding overflow-hidden">
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
                <span className="text-4 text-black uppercase">
                  👁 A 🌐 Dancing ☀ typeface ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀ VECTRO
                  ☮ Type ☼ Foundry &nbsp;
                </span>
              </ScrollingText>
            </Pill>
            <Pill className="bg-lime hover:bg-blue h-30 bg-clip-padding overflow-hidden">
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
              >
                <span className="text-24 text-gray uppercase">
                  The making of KABLAMMO
                </span>
              </ScrollingText>
            </Pill>
            {/* ESSAY */}
            <Frame
              className={`bg-gray border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
            >
              <h3 className="text-center text-black mt-6">About the Font</h3>
              <div className={`grid grid-cols-2`}>
                <div className="pl-20 pr-20">
                  <p className="font-body block mb-8 text-1">
                    Nicolette Gray wrote about the Caslon Italian (above) in her
                    book Nineteenth Century.
                  </p>
                  <p className="font-mono block mb-8 text-1">
                    Maelstrom & Maelstrom Sans are reversed-stress typefaces.
                    They’re “perverse”, to be sure, but that’s exactly their
                    charm. They belong to a genre destined to be a perpetual
                    typographic outsider — never fashionable yet never
                    abandoned.
                  </p>
                  <p className="font-mono block mb-8 text-1">
                    Maelstrom & Maelstrom Sans are reversed-stress typefaces.
                    They’re “perverse”, to be sure, but that’s exactly their
                    charm. They belong to a genre destined to be a perpetual
                    typographic outsider — never fashionable yet never
                    abandoned.
                  </p>
                  <p className="font-mono block mb-8 text-1">
                    Nicolette Gray wrote about the Caslon Italian (above) in her
                    book Nineteenth Century.
                  </p>
                  <p className="font-mono block mb-8 text-1">
                    Ornamented Types and Title Pages{" "}
                  </p>
                  <p className="font-mono block mb-8 text-1">
                    The only semi-ornamental type of this decade [1821] is the
                    much, and quite rightly, abused Italian. The Italian is an
                    Egyptian with a horizontal stress and extra serifs reversed
                    and joined to the letter by the point; a crude expression of
                    the idea of perversity. It is scarcely just, however, to
                    regard it as a typical monstrosity of the time.
                  </p>
                  <p className="font-mono block mb-8 text-1">
                    The only semi-ornamental type of this decade [1821] is the
                    much, and quite rightly, abused Italian. The Italian is an
                    Egyptian with a horizontal stress and extra serifs reversed
                    and joined to the letter by the point; a crude expression of
                    the idea of perversity. It is scarcely just, however, to
                    regard it as a typical monstrosity of the time.
                  </p>
                </div>
                <div className=""></div>
              </div>
            </Frame>
            {/* DOWNLOAD */}
            <Pill className="bg-purple h-30">
              <span className="text-16 text-lime uppercase">Download</span>
            </Pill>
            <Nav />
            {/* CREDITS */}
            <Pill className="bg-gray h-6">
              <span className="font-body text-2 uppercase">
                Lead Design and Concept by Travis Kochel
              </span>
            </Pill>
            <Pill className="bg-gray h-6">
              <span className="font-body text-2 uppercase">
                Cyrillic & Production Assistance by Daria Petrova & Ethan Cohen
              </span>
            </Pill>
            <Pill className="bg-gray h-6">
              <span className="font-body text-2 uppercase">
                Website Design & Development by FISK
              </span>
            </Pill>
            <Pill className="bg-gray h-6">
              <span className="font-body text-2 uppercase">
                Commissioned by Google Fonts
              </span>
            </Pill>
            {/* VECTRO TYPE FOUNDRY CREDIT */}
            <Pill className="bg-blue h-12">
              <span className="text-6 uppercase">
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
