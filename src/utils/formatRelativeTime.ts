import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export function formatRelativeTime(dateInput: string | number | Date): string {
  const date = dayjs(dateInput);

  if (!date.isValid()) {
    throw new Error("유효하지 않은 날짜 형식입니다.");
  }

  return date.fromNow();
}
