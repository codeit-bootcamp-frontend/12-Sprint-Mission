import dayjs from "dayjs";

export function toWon(price: number) {
  return Number(price).toLocaleString() + "원";
}

export function toDate(date: string) {
  return dayjs(date).format("YYYY.MM.DD");
}
