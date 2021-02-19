import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
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
import TwoTest from "../components/TwoTest";
import TypeTester from "../components/TypeTester";
import useVariableFont from "react-variable-fonts";
import TimelineAnimations from "../components/TimelineAnimations";
import IntersectBox from "../components/IntersectBox";
import Scene from "../components/Scene";
import Pattern from "../components/Pattern";

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
    console.log("response", response);
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
  const [doc, setDocData] = React.useState(null);

  fetchData(setDocData);
  // isBrowser && setTwo();

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
            <Frame className={`h-100vh`}>
              {/* SCENE */}
              {isBrowser && <Scene />}
              {/* NAV */}
              <Nav />
              {/* LANDING */}

              <Frame
                className={`h-landing bg-purple border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden`}
              >
                <Pattern
                  className="flex justify-center"
                  bgImage="/images/bg/purple-worms.svg"
                >
                  <img
                    className="w-full items-center"
                    src={doc.data.landing_image.url}
                  />
                </Pattern>
              </Frame>
            </Frame>
            {/* SMALL SCROLLING TEXT 1 */}
            <Pill className="bg-gray hover:bg-orange h-6 bg-clip-padding overflow-hidden">
              <ScrollingText
                className=""
                href={`#`}
                blank
                specialRight
                hideMobile
                borderTop
                large
              >
                <span className="text-4 text-black uppercase">
                  👁 A 🌐 Dancing ☀ typeface ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀ VEkTOR
                  ☮ Type ☼ Foundry &nbsp;
                </span>
              </ScrollingText>
            </Pill>
            {/* TYPE TESTER 1 */}
            <TypeTester />
            {/* TYPE PARTICLES */}
            <Frame
              className={`bg-gray border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh flex justify-center items-center`}
            >
              {/* <TimelineAnimations /> */}
              <span className="text-6 leading-none text-black uppercase text-center">
                Meet KABLAMMO, the DANCING FONT FROM OUTER SPACE! Developed BY
                VEKTOR FOUNDRY, IT FEATURES A DANCE AXIS THAT MAKES THE LETTERS
                bop and BOUNCE and bloop AROUND.
              </span>
            </Frame>
            {/* SMALL SCROLLING TEXT 1 */}
            <Pill className="bg-lime hover:bg-orange h-6 bg-clip-padding overflow-hidden">
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
                <span className="text-4 text-blue uppercase">
                  &#xE006;&nbsp;&#xE006;&nbsp;&#xE006;&nbsp;&#xE006;&nbsp;&#xE006;&nbsp;&#xE006;&nbsp;&#xE006;&nbsp;&#xE006;&nbsp;
                </span>
              </ScrollingText>
            </Pill>
            {/* SLIDER FRAME */}
            <Carousel
              className={`bg-orange border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
              items={doc.data.carousel}
            />
            {/* TYPE SCALES */}
            <Pill className="bg-yellow h-24 overflow-hidden">
              <Pattern
                className="grid place-items-center"
                bgImage="/images/bg/yellow-circles.svg"
              >
                <span
                  className="text-18 w-full block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word"
                  contentEditable="true"
                  spellCheck="false"
                  suppressContentEditableWarning={true}
                >
                  A Font 4
                </span>
              </Pattern>
            </Pill>
            <Pill className="bg-orange h-16 overflow-hidden">
              <Pattern
                className="grid place-items-center"
                bgImage="/images/bg/orange-worms.svg"
              >
                <span
                  className="text-10 w-full block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word"
                  contentEditable="true"
                  spellCheck="false"
                  suppressContentEditableWarning={true}
                >
                  Huge Headlines
                </span>
              </Pattern>
            </Pill>
            <Pill className="bg-pink h-12 overflow-hidden">
              <Pattern
                className="grid place-items-center"
                bgImage="/images/bg/pink-pattern.svg"
              >
                <span
                  className="text-6 w-full block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word"
                  contentEditable="true"
                  spellCheck="false"
                  suppressContentEditableWarning={true}
                >
                  Out Of This World Ideas
                </span>
              </Pattern>
            </Pill>
            <Pill className="bg-purple h-6 overflow-hidden">
              <Pattern
                className="grid place-items-center"
                bgImage="/images/bg/purple-squiggly.svg"
              >
                <span
                  className="text-3 w-full block leading-none text-center text-black whitespace-nowrap focus:outline-none overflow-hidden self-center break-word"
                  contentEditable="true"
                  spellCheck="false"
                  suppressContentEditableWarning={true}
                >
                  And Feelings Words Just Cannot Describe
                </span>
              </Pattern>
            </Pill>
            {/* CHARACTER SET */}
            <div
              className={`bg-green border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden`}
            >
              <h3 className="text-center text-yellow">Character Set</h3>
            </div>
            <CharacterSetNoSSR />
            {/* SLOT MACHINE */}
            <Frame
              className={`bg-black border-2 border-solid border-black bg-clip-padding overflow-hidden h-100vh flex justify-between flex-col`}
            >
              <Pill className="bg-pink hover:bg-orange h-6 bg-clip-padding overflow-hidden">
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
              <Pill className="bg-purple hover:bg-orange h-6 bg-clip-padding overflow-hidden">
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
                  <span className="text-4 text-green uppercase">
                    &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
                  </span>
                </ScrollingText>
              </Pill>
            </Frame>
            {/* SMALL SCROLLING TEXT PILL 2 */}
            {/* BIG SROLLING TEXT 1 */}
            <Pill className="bg-gray hover:bg-orange h-6 bg-clip-padding overflow-hidden">
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
                  👁 A 🌐 Dancing ☀ typeface ☮ BROUGHT ☼ TO 👁 YOU 🌐 BY ☀ VEkTOR
                  ☮ Type ☼ Foundry &nbsp;
                </span>
              </ScrollingText>
            </Pill>
            <Pill className="bg-lime hover:bg-orange h-30 bg-clip-padding overflow-hidden">
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
            <Pill className="bg-pink hover:bg-orange h-30 bg-clip-padding overflow-hidden">
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
              className={`bg-gray border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh grid grid-cols-2`}
            >
              <div className="">
                <span>
                  Nicolette Gray wrote about the Caslon Italian (above) in her
                  book Nineteenth Century. Maelstrom & Maelstrom Sans are
                  reversed-stress typefaces. They’re “perverse”, to be sure, but
                  that’s exactly their charm. They belong to a genre destined to
                  be a perpetual typographic outsider — never fashionable yet
                  never abandoned. Maelstrom & Maelstrom Sans are
                  reversed-stress typefaces. They’re “perverse”, to be sure, but
                  that’s exactly their charm. They belong to a genre destined to
                  be a perpetual typographic outsider — never fashionable yet
                  never abandoned. Nicolette Gray wrote about the Caslon Italian
                  (above) in her book Nineteenth Century. Ornamented Types and
                  Title Pages The only semi-ornamental type of this decade
                  [1821] is the much, and quite rightly, abused Italian. The
                  Italian is an Egyptian with a horizontal stress and extra
                  serifs reversed and joined to the letter by the point; a crude
                  expression of the idea of perversity. It is scarcely just,
                  however, to regard it as a typical monstrosity of the time.
                  The only semi-ornamental type of this decade [1821] is the
                  much, and quite rightly, abused Italian. The Italian is an
                  Egyptian with a horizontal stress and extra serifs reversed
                  and joined to the letter by the point; a crude expression of
                  the idea of perversity. It is scarcely just, however, to
                  regard it as a typical monstrosity of the time.
                </span>
              </div>
              <div className=""></div>
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
            {/* VEKTOR TYPE FOUNDRY CREDIT */}
            <Pill className="bg-blue h-12">
              <span className="text-6 uppercase">
                Font by Vektor Type Foundry
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
