"use client";

import { useRouter } from "next/navigation";
import { Button } from "@components/ui";
import styles from "./Temporary.module.scss";

interface TemporaryProps {
  title?: string;
  description?: string;
}

export function Temporary({
  title = "임시페이지",
  description = "페이지를 준비중입니다. 처음으로 돌아가주세요",
}: TemporaryProps) {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }
  return (
    <div className={styles["temp-wrapper"]}>
      <div className={styles["page-content"]}>
        <h2 className={styles["page-title"]}>{title}</h2>
        <div className={styles["page-description"]}>{description}</div>
      </div>
      <div className={styles["page-actions"]}>
        <Button size="md" onClick={handleGoBack}>
          돌아가기
        </Button>
      </div>
    </div>
  );
}
