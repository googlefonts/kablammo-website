import Frame from "../components/Frame";
import Pill from "../components/Pill";
import ScrollingText from "../components/ScrollingText";

const SlotMachine = (props) => {
  return (
    <Frame
      className={`relative bg-black border-2 border-solid border-black bg-clip-padding overflow-hidden h-100vh flex justify-between flex-col`}
    >
      <Pill className="bg-pink hover:bg-orange h-6 bg-clip-padding overflow-hidden">
        <ScrollingText
          className=""
          href={`#`}
          blank
          specialRight
          hideMobile
          borderTop
          large
        >
          <span className="text-4 text-lime uppercase">
            &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
          </span>
        </ScrollingText>
      </Pill>
      <Frame
        className={`relative bg-black border-2 border-solid border-black bg-clip-padding overflow-hidden h-100% grid grid-cols-2 grid-rows-2`}
      >
        <Pill className="bg-green hover:bg-pink h-100% bg-clip-padding overflow-hidden">
          <span className="text-24 -mt-10 text-orange uppercase">👀</span>
        </Pill>
        <Pill className="bg-lime hover:bg-pink h-100% bg-clip-padding overflow-hidden">
          <span className="text-24 -mt-10 text-blue  uppercase">👁</span>
        </Pill>
        <Pill className="bg-yellow hover:bg-gray h-100% bg-clip-padding overflow-hidden">
          <span className="text-24 -mt-10 text-purple uppercase"></span>
        </Pill>
        <Pill className="bg-blue hover:bg-orange h-100% bg-clip-padding overflow-hidden">
          <span className="text-24 -mt-10 text-yellow uppercase">👄</span>
        </Pill>
      </Frame>
      <Pill className="bg-purple hover:bg-orange h-6 bg-clip-padding overflow-hidden">
        <ScrollingText
          className=""
          href={`#`}
          blank
          specialRight
          hideMobile
          borderTop
          large
          right
        >
          <span className="text-4 text-green uppercase">
            &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
          </span>
        </ScrollingText>
      </Pill>
      {/* <Pill className="right-vertical absolute right-6 bottom-0 bg-blue hover:bg-yellow h-6 bg-clip-padding overflow-hidden">
                <ScrollingText
                  className=""
                  href={`#`}
                  blank
                  specialRight
                  hideMobile
                  borderTop
                  large
                  right
                >
                  <span className="text-4 text-yellow uppercase">
                    &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
                  </span>
                </ScrollingText>
              </Pill>
              <Pill className="left-vertical absolute left-0 bg-orange hover:bg-purple h-6 bg-clip-padding overflow-hidden">
                <ScrollingText
                  className=""
                  href={`#`}
                  blank
                  specialRight
                  hideMobile
                  borderTop
                  large
                  right
                >
                  <span className="text-4 text-purple uppercase">
                    &#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;&#xE000;
                  </span>
                </ScrollingText>
              </Pill> */}
    </Frame>
  );
};
export default SlotMachine;
