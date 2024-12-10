import dayjs from "dayjs";

export function toWon(price) {
  return Number(price).toLocaleString() + "원";
}

export function toDate(date) {
  return dayjs(date).format("YYYY.MM.DD");
}
