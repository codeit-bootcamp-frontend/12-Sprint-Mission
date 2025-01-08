import { toDate } from "@/util/formatter";
import styles from "./Date.module.scss";

export function Date({ date }: { date: string }) {
  return <time className={styles.date}>{toDate(date)}</time>;
}
