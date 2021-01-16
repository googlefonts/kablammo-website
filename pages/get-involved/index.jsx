import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect
} from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Media from "react-media";
import Moment from "react-moment";
import { useRouter } from "next/router";
import {
  client,
  linkResolver,
  apiEndpoint,
  accessToken
} from "../../prismic-configuration";
import ScrollingText from "../../components/ScrollingText";
import Row from "../../components/Row";
import Box from "../../components/Box";
import BoxGrid from "../../components/BoxGrid";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import PostListPage from "../../components/PostListPage";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

const GetInvolved = props => {
  const homePageData = props.homePageData ? props.homePageData.data : null;
  const postsData = props.postsData ? props.postsData.results : null;
  const pageData = props.pageData ? props.pageData.data : null;
  const pageReady = homePageData && postsData && pageData;
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
  return pageReady ? (
    <PostListPage
      homePageData={homePageData}
      postsData={postsData}
      pageData={pageData}
    />
  ) : (
    <div>Loading</div>
  );
};

const getHomePage = async (API, req) => {
  return await API.getSingle("home_page");
};

const getPage = async (API, req) => {
  return await API.getSingle("get_involved_page");
};

const getPosts = async (API, req) => {
  return await API.query(
    Prismic.Predicates.any("document.type", ["get_involved"])
  );
};

GetInvolved.getInitialProps = async ({ req }) => {
  const API = await Prismic.getApi(apiEndpoint, {
    accessToken,
    req
  });

  const homePageData = await getHomePage(API, req);
  const postsData = await getPosts(API, req);
  const pageData = await getPage(API, req);
  return {
    homePageData,
    pageData,
    postsData
  };
};

export default GetInvolved;
