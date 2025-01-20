// 날짜 포맷 함수 (예: '2024-09-24 08:40:06' -> '2024-09-24 08:40')
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}
