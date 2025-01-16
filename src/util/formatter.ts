import dayjs from "dayjs";

export function toWon(price: string | number | undefined) {
  const value = Number(price);

  if (isNaN(value)) {
    return "-원";
  }

  return Number(price).toLocaleString() + "원";
}

export function toDate(date: string) {
  const day = dayjs(date);

  if (!day.isValid()) {
    return "----.--.--";
  }

  return dayjs(date).format("YYYY.MM.DD");
}

export function maxNumber(number: number, max: number) {
  return number <= max ? number : `${max}+`;
}
