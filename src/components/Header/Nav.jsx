import { NavLink, useLocation } from "react-router-dom";
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

function isInclude(path, list = []) {
  return list.filter((item) => path.startsWith(item)).length > 0;
}

export function Nav() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.gnb}>
      {MENU.map((item) => {
        return (
          <li key={item.path}>
            <NavLink
              to={item.path}
              reloadDocument={item.reload}
              className={({ isActive }) =>
                clsx(
                  styles["gnb-item"],
                  isActive && styles.active,
                  isInclude(pathname, item.activePathList) && styles.active
                )
              }
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
