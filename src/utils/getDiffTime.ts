import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export default function getDiffTime(dateStr: string) {
  const now = dayjs();
  const date = dayjs(dateStr);

  const diffInSeconds = now.diff(date, 'second');
  const diffInMinutes = now.diff(date, 'minute');
  const diffInHours = now.diff(date, 'hour');
  const diffInDays = now.diff(date, 'day');
  const diffInMonths = now.diff(date, 'month');

  if (diffInSeconds < 60) {
    return `${diffInSeconds}초 전`;
  }
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }
  if (diffInDays < 30) {
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}주 전`;
  }
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }
  return date.format('YYYY.MM.DD HH:mm');
}
