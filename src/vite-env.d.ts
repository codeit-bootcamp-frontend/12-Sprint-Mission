/// <reference types="vite/client" />
declare module '*.svg?react' {
  import { SVGProps } from 'react';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}
