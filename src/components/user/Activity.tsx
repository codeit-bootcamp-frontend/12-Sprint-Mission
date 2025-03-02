"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import styles from "./Activity.module.scss";
import { getUserActivityOptions } from "@/service/user.queries";

export default function Activity() {
  const {
    data: { products, favorites },
  } = useSuspenseQuery(getUserActivityOptions);

  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <div className={styles.label}>등록한 상품</div>
        <div className={styles.count}>{products}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>좋아요</div>
        <div className={styles.count}>{favorites}</div>
      </div>
    </div>
  );
}
