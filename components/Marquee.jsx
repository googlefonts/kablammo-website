import React, { useState } from "react";
import Media from "react-media";
import { useInView } from 'react-intersection-observer'
import Marquee from "react-fast-marquee";

const MarqueeScroller = (props) => {
    const [child, setChild] = useState(props.children);
    const [marqueeWrapper, inView
    ] = useInView({
      threshold: 0.5,
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
            <Marquee gradient={false} play={inView} pauseOnHover={true} speed={matches.mobile ? 20 : 40} className="bg-gray rounded-sm lg:rounded-lg h-10 lg:h-4 hvr-wobble-top hvr-shutter-in-horizontal hover:bg-yellow">{child}{child}</Marquee>
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