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

function Index(props) {
  const [doc, setDocData] = React.useState(null);

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
            <Nav />
            <Frame
              className={`bg-purple border-2 border-solid border-black rounded-lg`}
              bg={doc.data.landing_image.url}
            />
            <Pill className="bg-gray h-32"></Pill>
            <Frame
              className={`bg-lime border-2 border-solid border-black rounded-lg`}
            />
            <Frame
              className={`bg-gray border-2 border-solid border-black rounded-lg`}
            />
            <Pill className="bg-lime h-32"></Pill>
            <Frame
              className={`bg-orange border-2 border-solid border-black rounded-lg`}
            />{" "}
            <Pill className="bg-yellow h-96"></Pill>
            <Pill className="bg-orange h-72"></Pill>
            <Pill className="bg-pink h-48"></Pill>
            <Pill className="bg-purple h-32"></Pill>
            <div
              className={`bg-green border-2 border-solid border-black rounded-lg`}
            >
              <h3 className="text-center">Character Set</h3>
              <CharacterSetNoSSR />
            </div>{" "}
            <Pill className="bg-pink h-32"></Pill>
            <Pill className="bg-black h-screen"></Pill>
            <Pill className="bg-purple h-32"></Pill>
            <Pill className="bg-gray h-32"></Pill>
            <Pill className="bg-lime h-96"></Pill>
            <Pill className="bg-pink h-96"></Pill>
            <Frame
              className={`bg-gray border-2 border-solid border-black rounded-lg`}
            />
            <Pill className="bg-purple h-96"></Pill>
            <Nav />
            <Pill className="bg-gray h-32"></Pill>
            <Pill className="bg-gray h-32"></Pill>
            <Pill className="bg-gray h-32"></Pill>
            <Pill className="bg-gray h-32"></Pill>
            <Pill className="bg-blue h-32"></Pill>
          </Layout>
        </div>
      )}
    </Media>
  ) : (
    <Loading initial />
  );
}

export default Index;
