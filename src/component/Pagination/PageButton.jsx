import LeftArrow from "../../asset/arrow_left.png";
import RightArrow from "../../asset/arrow_right.png";
import styles from "./PageButton.module.css";

function PageButton({ handlePage, page, maxPage }) {
  const ClickNumber = (e) => {
    handlePage(e.target.value);
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

  function PageButtonNumber({ value }) {
    const className =
      page === value
        ? "styles.pagebutton_number styles.active"
        : "styles.pagebutton_number";
    return (
      <li className={className} value={value} onClick={ClickNumber}>
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
