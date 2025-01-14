declare module "*.module.css" {
  // module.css 로 끝나는 모든 파일을 module 로 인식
  const content: { [key: string]: string }; // 해당 모듈파일의 타입 객체 생성
  export = content; // 해당 타입 객체를 전역에 export
}

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
