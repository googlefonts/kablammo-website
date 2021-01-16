import React, { Component, Fragment, useState, useContext } from "react";
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
} from "../../../prismic-configuration";
import ScrollingText from "../../../components/ScrollingText";
import Row from "../../../components/Row";
import Box from "../../../components/Box";
import BoxGrid from "../../../components/BoxGrid";
import Footer from "../../../components/Footer";
import Carousel from "../../../components/Carousel";
import Header from "../../../components/Header";
import PostListPage from "../../../components/PostListPage";

const Stories = props => {
  const homePageData = props.homePageData ? props.homePageData.data : null;
  const postsData = props.postsData ? props.postsData.results : null;
  const pageReady = homePageData && postsData;

  return pageReady ? (
    <PostListPage homePageData={homePageData} postsData={postsData} />
  ) : (
    <div>Loading</div>
  );
};

const getHomePage = async (API, req) => {
  return await API.getSingle("home_page");
};

const getPosts = async (API, req) => {
  return await API.query(Prismic.Predicates.any("document.type", ["stories"]), {
    orderings: "[my.stories.date desc]",
    pageSize: 100
  });
};

Stories.getInitialProps = async ({ req }) => {
  const API = await Prismic.getApi(apiEndpoint, {
    accessToken,
    req
  });

  const homePageData = await getHomePage(API, req);
  const postsData = await getPosts(API, req);
  return {
    homePageData,
    postsData
  };
};

export default Stories;
