import { useState, useEffect } from "react";

const useDevice = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let mode = "desktop";

  if (windowWidth < 1200 && windowWidth >= 768) mode = "tablet";
  else if (windowWidth < 768) mode = "mobile";

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
