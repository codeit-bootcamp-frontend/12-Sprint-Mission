import "./PaginationBar.css";

function PaginationBar({ onChangePage, totalPageNum, activePageNum }) {
  let startPageNum;
  const pageNumArr = [];

  // 페이지 넘버를 알맞게 pageNumArr에 넣어주는 문.
  if (activePageNum <= 5) {
    startPageNum = 1;
    for (let i = 0; i < 5; i++) {
      pageNumArr[i] = startPageNum;
      startPageNum++;
    }
  } else {
    startPageNum = Math.floor(activePageNum / 5) * 5 + 1;
    if (activePageNum % 5 === 0) startPageNum = Math.floor((activePageNum - 1) / 5) * 5 + 1;
    for (let i = 0; i < 5; i++) {
      pageNumArr[i] = startPageNum;
      startPageNum++;
      // totalPageNum까지만 만들고 break;
      if (startPageNum === totalPageNum + 1) break;
    }
  }

  return (
    <div className="pageBtnContainer">
      <button className="pageBtn" disabled={activePageNum === 1} onClick={() => onChangePage(activePageNum - 1)}>
        {"<"}
      </button>
      {pageNumArr.map((num) => (
        <button
          key={num}
          className={`pageBtn ${activePageNum === num ? "active" : ""}`}
          onClick={() => onChangePage(num)}
        >
          {num}
        </button>
      ))}
      <button
        className="pageBtn"
        disabled={activePageNum === totalPageNum}
        onClick={() => onChangePage(activePageNum + 1)}
      >
        {">"}
      </button>
    </div>
  );
}

export default PaginationBar;
