import LeftArrow from "../../asset/arrow_left.png";
import RightArrow from "../../asset/arrow_right.png";
import styles from "./PageButton.module.css";

function PageButton({
  handlePage,
  page,
  maxPage,
}: {
  handlePage: (value: number) => void;
  page: number;
  maxPage: number;
}) {
  const ClickNumber = (e: React.MouseEvent<HTMLElement>) => {
    handlePage(Number(e.currentTarget.dataset.value));
  };

  const ClickIconLeft = () => {
    if (page > 1) {
      handlePage(page - 1);
    }
  };

  const ClickIconRight = () => {
    if (page < maxPage) {
      handlePage(page + 1);
    }
  };

  let pageIine;
  pageIine = Math.floor((page - 1) / 5);
  let PageGroup = [];
  if (pageIine === Math.floor(maxPage / 5)) {
    for (let i = 1; i <= maxPage % 5; i++) {
      PageGroup.push(i + 5 * pageIine);
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      PageGroup.push(i + 5 * pageIine);
    }
  }

  let background = "";
  let color = "";
  function PageButtonNumber({ value }: { value: number }) {
    if (page === value) {
      background = "#2f80ed";
      color = "white";
    } else {
      background = "";
      color = "";
    }

    return (
      <li
        className={styles.pagebutton_number}
        style={{ background: background, color: color }}
        data-value={value}
        onClick={ClickNumber}
      >
        {value}
      </li>
    );
  }

  return (
    <ul className={styles.pagebutton_container}>
      <li className={styles.pagebutton_number} onClick={ClickIconLeft}>
        <img
          className={styles.pagebutton_icon}
          src={LeftArrow}
          alt="왼쪽아이콘"
        />
      </li>
      {PageGroup.map((value) => (
        <PageButtonNumber value={value} key={value} />
      ))}
      <li className={styles.pagebutton_number} onClick={ClickIconRight}>
        <img
          className={styles.pagebutton_icon}
          src={RightArrow}
          alt="오른쪽아이콘"
        />
      </li>
    </ul>
  );
}

export default PageButton;
