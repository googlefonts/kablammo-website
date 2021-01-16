import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
} from "react";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Media from "react-media";
import Moment from "react-moment";
import {
  client,
  linkResolver,
  apiEndpoint,
  accessToken,
} from "../../prismic-configuration";
import ScrollingText from "../../components/ScrollingText";
import Row from "../../components/Row";
import Box from "../../components/Box";
import BoxGrid from "../../components/BoxGrid";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import SliceZone from "../../components/SliceZone";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const Search = (props) => {
  const router = useRouter();
  const tag = router.query.tag ? router.query.tag : "";
  const [doc, setDocData] = React.useState(null);
  const [searchPosts, setSearchPostsData] = React.useState(null);
  React.useEffect(() => {
    process.env.NODE_ENV !== "development" &&
      ReactPixel.init("1074968789232506");
    process.env.NODE_ENV !== "development" && ReactPixel.pageView();
    process.env.NODE_ENV !== "development" &&
      ReactGA.initialize("UA-123981541-2");
    process.env.NODE_ENV !== "development" &&
      ReactGA.pageview(window.location.pathname + window.location.search);
    process.env.NODE_ENV !== "development" &&
      ReactPixel.init("2a3c957b-dec5-4c4b-b5f0-406ccda6cc34");
    process.env.NODE_ENV !== "development" && ReactPixel.pageView();
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await client
        .query(Prismic.Predicates.at("document.type", "home_page"))
        .then((response) => setDocData(response.results[0]));
    };
    fetchData();
  }, []);

  const fetchSearchPostsData = async (tag) => {
    await client
      .query([
        Prismic.Predicates.fulltext("document", tag),
        Prismic.Predicates.any("document.type", [
          "stories",
          "interviews",
          "toolkits",
          "podcasts_playlists",
          "madhappy",
          "get_involved",
          "culture",
        ]),
      ])
      .then((response) => setSearchPostsData(response.results));
  };

  React.useEffect(() => {
    tag && fetchSearchPostsData(tag);
  }, [tag]);

  const homePageData = doc ? doc.data : null;
  let searchPostsData = searchPosts ? searchPosts : null;
  let pageReady = homePageData && searchPostsData && tag;

  // if (tag) fetchSearchPostsData();

  return pageReady ? (
    <Media
      defaultMatches={{ mobile: false, tablet: false }}
      queries={{
        mobile: "(max-width: 599px)",
        tablet: "(min-width: 600px) and (max-width: 1199px)",
      }}
    >
      {(matches) => (
        <div
          className={`index ${
            matches.mobile ? "mobile" : matches.tablet ? "tablet" : ""
          }`}
        >
          <Head>
            <title>Search | The Local Optimist</title>
            <meta name="description" content="The Local Optimist" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/png" href="/images/favicon.png" />
            <meta
              property="og:url"
              content={process.env.siteUrl + router.asPath}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Search | The Local Optimist" />
            <meta
              property="og:description"
              content="Search | The Local Optimist"
            />
            <script
              async
              defer
              src="https://static.cdn.prismic.io/prismic.js?repo=the-local-optimist&new=true"
            ></script>
          </Head>
          <Header data={homePageData} nav />
          <Layout padding={120}>
            <Row className={`post bg-light-green fd-column`}>
              <h1 className={`post-title tt-uppercase m-none`}>Search</h1>
              <p className="tac m-none">
                {searchPosts.length} search&nbsp;
                {searchPosts.length === 1 ? `result` : `results`} for '{tag}'
              </p>
            </Row>
            <CategoryList key={searchPosts} data={searchPosts} />
            <Footer className={``} searchBorder />
          </Layout>
          <style global jsx>{``}</style>
        </div>
      )}
    </Media>
  ) : (
    <Loading />
  );
};

export default Search;
