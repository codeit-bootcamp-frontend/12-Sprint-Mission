export default function formatDate(createdAt: string): string {
  const date = new Date(createdAt); // ISO 문자열을 Date 객체로 변환
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}. ${month}. ${day}`; // 원하는 형식으로 반환
}
