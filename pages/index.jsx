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
import isBrowser from "../util/isBrowser";
import useVariableFont from "react-variable-fonts";

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
              {/* NAV */}
              <Nav />
              {/* LANDING */}
              <Frame
                className={`flex justify-center h-landing bg-purple border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden`}
              >
                <TwoTest />
                <img className="w-full" src={doc.data.landing_image.url} />
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
            <Frame
              className={`bg-lime border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh grid grid-rows-6`}
            >
              <div className="flex justify-between row-span-1">
                <div class="pt-10 pl-20">
                  <span className="uppercase font-mono text-2">Alternates</span>
                </div>
                <div class="pt-10 pr-20">
                  <span className="uppercase font-mono text-2">Background</span>
                </div>
              </div>
              <div className="row-span-4 flex justify-center">
                <div class="flex justify-center align-middle h-100% w-3/4">
                  <span
                    className="text-12 w-full block leading-none text-center text-pink focus:outline-none overflow-hidden self-center break-word"
                    contenteditable="true"
                    spellcheck="false"
                  >
                    ⚠ VARIABLE FONT 🌼 BY VECTOR 😵
                  </span>
                </div>
              </div>
              <div className="flex justify-between row-span-1">
                <div className=""></div>
                <div className=""></div>
              </div>
            </Frame>
            {/* TYPE PARTICLES */}
            <Frame
              className={`bg-gray border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
            />
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
            <Frame
              className={`bg-orange border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
            />
            {/* TYPE SCALES */}
            <Pill className="bg-yellow h-12"></Pill>
            <Pill className="bg-orange h-10"></Pill>
            <Pill className="bg-pink h-8"></Pill>
            <Pill className="bg-purple h-6"></Pill>
            {/* CHARACTER SET */}
            <div
              className={`bg-green border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden`}
            >
              <h3 className="text-center text-yellow">Character Set</h3>
              <CharacterSetNoSSR />
            </div>
            {/* SLOT MACHINE */}
            <Frame
              className={`bg-black border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
            >
              <Pill className="bg-pink h-6"></Pill>
              <Pill className="bg-purple h-6"></Pill>
            </Frame>
            {/* SMALL SCROLLING TEXT PILL 2 */}
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
            <Pill className="bg-lime hover:bg-orange h-32 bg-clip-padding overflow-hidden">
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
            <Pill className="bg-pink hover:bg-orange h-32 bg-clip-padding overflow-hidden">
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
            <Frame
              className={`bg-gray border-2 border-solid border-black rounded-lg bg-clip-padding overflow-hidden h-100vh`}
            />
            <Pill className="bg-purple h-32"></Pill>
            <Nav />
            <Pill className="bg-gray h-6"></Pill>
            <Pill className="bg-gray h-6"></Pill>
            <Pill className="bg-gray h-6"></Pill>
            <Pill className="bg-gray h-6"></Pill>
            <Pill className="bg-blue h-6"></Pill>
          </Layout>
        </div>
      )}
    </Media>
  ) : (
    <Loading initial />
  );
}

export default Index;
