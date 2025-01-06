"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Nav.module.scss";

const MENU = [
  {
    path: "/boards",
    title: "자유게시판",
  },
  {
    path: "/items",
    reload: true,
    title: "중고마켓",
    activePathList: ["/items", "/addItem", "/modifyItem"],
  },
];

function isInclude(path: string, list: string[] = []) {
  return list.filter((item) => path.startsWith(item)).length > 0;
}

export function Nav() {
  const pathname = usePathname();

  return (
    <ul className={styles.gnb}>
      {MENU.map((item) => {
        return (
          <li key={item.path}>
            <Link
              href={item.path}
              replace={item.reload}
              className={clsx(
                styles["gnb-item"],
                isInclude(pathname, item.activePathList) && styles.active
              )}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
