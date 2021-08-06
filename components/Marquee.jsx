import React, { useState } from "react";
import Media from "react-media";
import { useInView } from 'react-intersection-observer'
import Marquee from "react-fast-marquee";

const MarqueeScroller = (props) => {
    const [child, setChild] = useState(props.children);
    const [marqueeWrapper, inView
    ] = useInView({
      threshold: 0,
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
        <div ref={marqueeWrapper}>
            <Marquee 
            gradient={false} 
            play={inView} 
            pauseOnHover={false} 
            speed={matches.mobile ? 10 : 40} 
            direction={props.direction ? props.direction : "left"} 
            className={` ${props.className ? `${props.className}` : ``} rounded-sm lg:rounded-lg overflow-hidden `}
            >{child}{child}
            </Marquee>
          <style jsx>{`
            .marquee {
              font: serif;
            }
          `}</style>
        </div>
      )}
    </Media>
    );
};

export default MarqueeScroller;