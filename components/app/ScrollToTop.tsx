import { useEffect } from "react";
import { Props } from "@/components/app/types";
import { useRouter } from "next/router";

export default function ScrollToTop(props: Props) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
}
