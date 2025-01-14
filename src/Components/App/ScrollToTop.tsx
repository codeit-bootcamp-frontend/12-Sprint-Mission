import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Props } from "./types";

export default function ScrollToTop(props: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
}
