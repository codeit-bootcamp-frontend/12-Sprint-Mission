import { useState, useEffect } from "react";

const useDevice = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("window width", windowWidth);

  let mode = "desktop";
  if (windowWidth < 1200 && windowWidth >= 768) {
    mode = "tablet";
  } else if (windowWidth >= 375 && windowWidth < 768) {
    mode = "mobile";
  }

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWindowWidth(event.target.innerWidth);
    });
  }, []);

  return {
    mode,
  };
};

export default useDevice;
