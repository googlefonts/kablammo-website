import React, { Component, Fragment, useState, useContext } from "react";
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
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Media from "react-media";
import Moment from "react-moment";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import dynamic from "next/dynamic";

const CharacterSetNoSSR = dynamic(() => import("../components/CharacterSet"), {
  ssr: false,
});

const Index = (props) => {
  const [doc, setDocData] = React.useState(null);

  const pageReady = true;
  return pageReady ? (
    <Media
      defaultMatches={{ mobile: false, desktop: false }}
      queries={{
        mobile: "(max-width: 1199px)",
        desktop: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <div
          className={`index ${
            matches.mobile ? "mobile" : matches.desktop ? "desktop" : ""
          }`}
        >
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
          <Layout padding={101}>
            <Nav />
            <CharacterSetNoSSR />
          </Layout>
          {/* <Loading /> */}
        </div>
      )}
    </Media>
  ) : (
    {
      /* <Loading initial /> */
    }
  );
};

export default Index;
