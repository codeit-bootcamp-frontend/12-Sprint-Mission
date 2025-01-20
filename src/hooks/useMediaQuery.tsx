/* isMount 안쓰고 하는방법.. 근데 안됨
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useIsMo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 744px)" });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};

export const useIsTa = () => {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({ query: "(max-width: 1200px)" });

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return isTablet;
};
*/

import { useMediaQuery } from "react-responsive";

export const useIsMo = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 744px)" });
  return isMobile;
};

export const useIsTa = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1200px)" });
  return isTablet;
};
