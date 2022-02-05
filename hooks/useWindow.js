import { useEffect, useState } from "react";

function useWindow(props) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const toggleInnerWidth = (width) => setInnerWidth(width);

  const getProp = (mobileProp, tabletProp, desktopProp) =>
    innerWidth <= 480
      ? mobileProp
      : innerWidth <= 768
      ? tabletProp
      : desktopProp;

  useEffect(() => {
    window.addEventListener("resize", () =>
      toggleInnerWidth(window.innerWidth)
    );
    return window.removeEventListener("resize", toggleInnerWidth);
  }, []);
  return {
    getProp,
    width: innerWidth,
    height: window.innerHeight,
    heightPercentage: (pertange) => window.innerHeight * pertange,
    widthPercentage: (pertange) => innerWidth * pertange,
    subTractWidth: (amount) => innerWidth - amount,
    subTractHeight: (amount) => window.innerHeight - amount,
  };
}

export default useWindow;
