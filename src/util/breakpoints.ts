export const BREAKPOINT_TABLET = 1200;
export const BREAKPOINT_MOBILE = 768;

export function getDeviceType() {
  if (typeof window === "undefined") return "pc";

  const browserWidth = window.innerWidth;
  if (browserWidth < BREAKPOINT_MOBILE) return "mobile";
  if (browserWidth < BREAKPOINT_TABLET) return "tablet";
  return "pc";
}
