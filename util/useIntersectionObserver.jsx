import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import "intersection-observer";

const useIntersectionObserver = (props) => {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      // Pause/Play the animation
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        console.log(entry.target, "running");
      } else {
        entry.target.style.animationPlayState = "paused";
        console.log(entry.target, "paused");
      }
    });
  });
  var variableTexts = document.querySelectorAll(
    ".animate-it, .animate-it-slow, .animate-it-fast"
  );
  variableTexts.forEach(function (el) {
    observer.observe(el);
  });
  console.log("variableTexts", variableTexts);
};

export default useIntersectionObserver;
