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
import DefaultPage from "../../components/DefaultPage";

const About = props => {
  const homePageData = props.homePageData ? props.homePageData.data : null;
  const pageData = props.pageData ? props.pageData.data : null;
  const pageReady = homePageData && pageData;
  return pageReady ? (
    <DefaultPage homePageData={homePageData} pageData={pageData} />
  ) : (
    <div>Loading</div>
  );
};

const getHomePage = async (API, req) => {
  return await API.getSingle("home_page");
};

const getPage = async (API, req) => {
  return await API.getSingle("about_page");
};

About.getInitialProps = async ({ req }) => {
  const API = await Prismic.getApi(apiEndpoint, {
    accessToken,
    req
  });

  const homePageData = await getHomePage(API, req);
  const pageData = await getPage(API, req);
  return {
    homePageData,
    pageData
  };
};

export default About;
