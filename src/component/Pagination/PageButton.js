import LeftArrow from "../../asset/arrow_left.png";
import RightArrow from "../../asset/arrow_right.png";
import "./PageButton.css";

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
      page === value ? "pagebutton-number active" : "pagebutton-number";
    return (
      <li className={className} value={value} onClick={ClickNumber}>
        {value}
      </li>
    );
  }

  return (
    <ul className="pagebutton-container">
      <li className="pagebutton-number" onClick={ClickIconLeft}>
        <img className="pagebutton-icon" src={LeftArrow} alt="왼쪽아이콘" />
      </li>
      {PageGroup.map((value) => (
        <PageButtonNumber value={value} key={value} />
      ))}
      <li className="pagebutton-number" onClick={ClickIconRight}>
        <img className="pagebutton-icon" src={RightArrow} alt="오른쪽아이콘" />
      </li>
    </ul>
  );
}

export default PageButton;
