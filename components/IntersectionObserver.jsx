import { useRef, useEffect, Fragment } from "react";

const IntersectionObserver = (props) => {
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(function (entries, observer) {
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
  }, []);

  return <div>hey</div>;
};

export default IntersectionObserver;
