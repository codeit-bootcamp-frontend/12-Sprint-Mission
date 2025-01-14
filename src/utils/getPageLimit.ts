export function getPageLimit(width: number, type: "best" | "all"): number {
  if (type === "best") {
    if (width > 1199) return 4;
    if (width > 768) return 2;
    return 1;
  } else {
    // type === "all"
    if (width > 1199) return 10;
    if (width > 768) return 6;
    return 4;
  }
}
