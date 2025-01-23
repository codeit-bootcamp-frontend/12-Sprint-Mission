import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function formatDateNow(isoDate: string) {
  return dayjs(isoDate).fromNow();
}
