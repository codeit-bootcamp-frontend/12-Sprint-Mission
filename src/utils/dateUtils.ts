import {
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMonths,
} from "date-fns";

function formatUpdateAt(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const diffInDays = differenceInDays(now, date);
  const diffInHours = differenceInHours(now, date);
  const diffInMinutes = differenceInMinutes(now, date);
  const diffInSeconds = differenceInSeconds(now, date);
  const diffInMonths = differenceInMonths(now, date);

  if (diffInSeconds < 60) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  } else if (diffInDays < 30) {
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}주 전`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  } else {
    return format(date, "yyyy.MM.dd hh:mm");
  }
}

export default formatUpdateAt;
