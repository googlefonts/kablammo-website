import React, { useState } from "react";
import Media from "react-media";
import { useInView } from 'react-intersection-observer'

const ScrollingText = (props) => {
  const [child, setChild] = useState(props.children);
  const [scrollingText, inView
  ] = useInView({
    threshold: 0.01,
  })
  return (
    <Media
      defaultMatches={{ mobile: false, desktop: false }}
      queries={{
        mobile: "(max-width: 1199px)",
        desktop: "(min-width: 1120px",
      }}
    >
      {(matches) => (
        <div
          className={`scrolling-text ${
            props.className ? props.className : ""
          } ${matches.mobile ? "mobile" : matches.tablet ? "tablet" : ""}`}
          inView={inView}
        >
          <div className={`${ inView ? `` : `scrollanimate`} scrolling-text-inner`}>
            <a
              className={props.specialLeft ? `small-text` : ``}
              href={props.href && props.href}
              target={props.blank ? "_blank" : "_self"}
              ref={scrollingText}
            >
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
              {child}
            </a>
          </div>
          <style jsx>{`
            .scrolling-text {
              width: 100%;
              overflow: hidden;
              position: relative;
              height: 100%;
            }

            .scrolling-text-inner {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              width: 200%;
              height: 100%;
            }
            .scrollanimate {
              ${props.right ? "right" : "left"}: 0;
              animation: scrollDesktop 300s linear infinite;
            }
            a {
              margin-top: 2px;
              white-space: nowrap;
              color: black;
              text-decoration: none;
              text-transform: uppercase;
              transition: display 1s;
            }
            .scrolling-text a {
              margin-top: -5px;
            }
            .mobile .scrolling-text-inner .scrollanimate {
              animation: scrollMobile 150s linear infinite;
            }
            .back-to-shop {
              position: fixed;
              height: 36px;
              top: 0;
              right: 0;
              border-left: 1px solid black;
              z-index: 999999;
              padding: 0 10px;
            }
            .back-to-shop img {
              max-height: 100%;
            }
            .hover {
            }
            .pink {
              z-index: 4;
            }
            .green {
              z-index: 3;
            }
            .blue {
              z-index: 2;
            }
            .red {
              z-index: 1;
            }

            @keyframes scrollMobile {
              0% {
                ${props.right ? "right" : "left"}: 0;
              }
              100% {
                ${props.right ? "right" : "left"}: -2000%;
              }
            }

            @keyframes scrollDesktop {
              0% {
                ${props.right ? "right" : "left"}: 0;
              }
              100% {
                ${props.right ? "right" : "left"}: -800%;
              }
            }

            @keyframes backgroundAnimation {
              0% {
                background-position: 0% 0%;
              }
              50% {
                background-position: 100% 100%;
              }
              100% {
                background-position: 0% 0%;
              }
            }
            .fixed {
              position: fixed;
              z-index: 99999;
            }

            .mt-65 {
              margin-top: 65px !important;
            }
            @media (max-width: 1199px) {
              // display: ${props.hideMobile ? "none" : "block"};
              .scrolling-text a {
                margin-top: 0;
              }
            }
          `}</style>
        </div>
      )}
    </Media>
  );
};

export default ScrollingText;
