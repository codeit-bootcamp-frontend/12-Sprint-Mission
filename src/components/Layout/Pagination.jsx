import './Pagination.css';
import '../../style/global.css';

function makePageArr(currentPage, totalPage) {
  const pageGrop = Math.ceil(currentPage / 5);
  const lastPage = pageGrop * 5;
  const firstPage = lastPage - 4;
  const pageArr = [];

  if (lastPage > totalPage) {
    for (let i = 0; firstPage + i <= totalPage; i++) {
      pageArr.push(firstPage + i);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      pageArr.push(firstPage + i);
    }
  }

  return pageArr;
}

function Pagination({ currentPage, onPageChange, totalPage }) {
  const pageArr = makePageArr(currentPage, totalPage);

  return (
    <div className="paginationBar">
      <button
        className="paginationBtn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      {pageArr.map((pageNum) => (
        <button
          className={`paginationBtn ${
            currentPage === pageNum ? 'activeBtn' : ''
          }`}
          onClick={() => onPageChange(pageNum)}
          key={pageNum}
        >
          {pageNum}
        </button>
      ))}
      <button
        className="paginationBtn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
