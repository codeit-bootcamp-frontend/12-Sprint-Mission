export function formatRelativeTime(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

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

  for (let interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count}${interval.label} 전`;
    }
  }

  return "방금 전";
}
