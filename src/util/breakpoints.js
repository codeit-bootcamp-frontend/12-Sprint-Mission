export const BREAKPOINT_TABLET = 1024;
export const BREAKPOINT_MOBILE = 768;

export function getDeviceType() {
  const browserWidth = window.innerWidth;
  if (browserWidth < BREAKPOINT_MOBILE) return "mobile";
  if (browserWidth < BREAKPOINT_TABLET) return "tablet";
  return "pc";
}
