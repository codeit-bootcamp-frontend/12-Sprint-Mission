import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    let pages = [];
    const maxPages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(startPage + maxPages - 1, totalPages);

    if (endPage - startPage + 1 < maxPages) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        이전
      </button>

      {getPageNumbers().map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`pagination-button ${
            currentPage === pageNum ? "active" : ""
          }`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;
