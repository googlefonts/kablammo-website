import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
  useRef,
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
} from "../../../prismic-configuration";
import ScrollingText from "../../../components/ScrollingText";
import Row from "../../../components/Row";
import Box from "../../../components/Box";
import BoxGrid from "../../../components/BoxGrid";
import CategoryList from "../../../components/CategoryList";
import Footer from "../../../components/Footer";
import Carousel from "../../../components/Carousel";
import Header from "../../../components/Header";
import SliceZone from "../../../components/SliceZone";
import Layout from "../../../components/Layout";
import Loading from "../../../components/Loading";
import PostListPage from "../../../components/PostListPage";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const Culture = (props) => {
  const router = useRouter();
  // const filter = router.query.filter ? router.query.filter : "";
  const [doc, setDocData] = React.useState(null);
  const [searchPosts, setSearchPosts] = React.useState(null);
  const [filter, setFilter] = React.useState(null);
  const postsSet = useRef(false);
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

  React.useEffect(() => {
    setFilter(router.query.filter);
  });

  React.useEffect(() => {
    if (filter) {
      postsSet.current = true;
      fetchSearchData(filter);
    } else if (postsSet.current === false) {
      fetchSearchDataNoFilter();
    }
  }, [filter]);

  const fetchSearchData = async (filter) => {
    await client
      .query(
        [
          Prismic.Predicates.any("document.type", ["culture"]),
          Prismic.Predicates.at("my.culture.category", filter),
        ],
        {
          orderings: "[my.culture.date desc]",
          pageSize: 100,
        }
      )
      .then((response) => {
        setSearchPosts(response.results);
      });
  };

  const fetchSearchDataNoFilter = async () => {
    await client
      .query([Prismic.Predicates.any("document.type", ["culture"])], {
        orderings: "[my.culture.date desc]",
        pageSize: 100,
      })
      .then((response) => {
        if (postsSet.current === false) {
          setSearchPosts(response.results);
        }
      });
  };
  const homePageData = doc ? doc.data : null;
  let pageReadyWithFilter = homePageData && searchPosts;

  return pageReadyWithFilter ? (
    <PostListPage homePageData={homePageData} postsData={searchPosts} />
  ) : (
    <Loading />
  );
};

export default Culture;
