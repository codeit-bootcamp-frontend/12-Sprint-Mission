export function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const past = new Date(dateString);

  if (isNaN(past.getTime())) {
    throw new Error("유효하지 않은 날짜 형식입니다.");
  }

  const diffInSeconds: number = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 0) {
    return "방금 전";
  }

  const intervals = [
    { label: "년", seconds: 365 * 24 * 60 * 60 },
    { label: "개월", seconds: 30 * 24 * 60 * 60 },
    { label: "일", seconds: 24 * 60 * 60 },
    { label: "시간", seconds: 60 * 60 },
    { label: "분", seconds: 60 },
    { label: "초", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count: number = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count}${interval.label} 전`;
    }
  }

  return "방금 전";
}
