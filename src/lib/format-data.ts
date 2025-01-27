import dayjs from "dayjs";

export default function formatDate(dateString: string) {
  const isoDate = new Date(dateString);
  const formattedDate = dayjs(isoDate).format("YYYY. MM. DD");

  return formattedDate;

}
