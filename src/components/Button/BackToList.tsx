import Image from "next/image";
import { Button } from "@components/ui";
import iconBack from "@assets/img/icon/icon_back.svg";
import styles from "./BackToList.module.scss";

export function BackToList({ href }: { href: string }) {
  return (
    <div className={styles.controls}>
      <Button href={href} size="md">
        목록으로 돌아가기 <Image src={iconBack} alt="목록으로 돌아가기" />
      </Button>
    </div>
  );
}
