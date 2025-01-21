declare module "*.svg" {
  import * as React from "react";

  // SVG를 React 컴포넌트로 사용하기 위한 타입
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // SVG를 string 경로로 사용하기 위한 타입
  const src: string;
  export default src;
}
