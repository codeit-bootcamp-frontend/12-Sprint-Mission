import dayjs from "dayjs";

export function toWon(price: string | number | undefined) {
  return Number(price).toLocaleString() + "원";
}

export function toDate(date: string) {
  return dayjs(date).format("YYYY.MM.DD");
}
