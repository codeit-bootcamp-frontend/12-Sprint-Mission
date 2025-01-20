import "./Paging.css";
import arrow from "./../assets/page_arrow.svg";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Paging = ({ totalItems, itemsPerPage, currentPage, onPageChange }: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5; // 최대 보여줄 페이지 수

  // 현재 페이지를 기준으로 동적 범위 계산
  const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  // 페이지 번호 배열 생성
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleNextGroup = () => {
    const nextGroupStart = startPage + maxVisiblePages;
    if (nextGroupStart <= totalPages) {
      onPageChange(nextGroupStart);
    }
  };

  const handlePrevGroup = () => {
    const prevGroupStart = startPage - maxVisiblePages;
    if (prevGroupStart >= 1) {
      onPageChange(prevGroupStart);
    }
  };

  return (
    <div className="paging_box">
      <ul className="paging_list">
        {/* 이전 그룹 버튼 */}
        <li className={`prev ${startPage === 1 ? "disabled" : ""}`} onClick={handlePrevGroup}>
          <img src={arrow} alt="Previous" />
        </li>

        {/* 동적 페이지 번호 */}
        {pageNumbers.map((page) => (
          <li key={page} className={page === currentPage ? "active" : ""} onClick={() => handlePageClick(page)}>
            {page}
          </li>
        ))}

        {/* 다음 그룹 버튼 */}
        <li className={`next ${endPage === totalPages ? "disabled" : ""}`} onClick={handleNextGroup}>
          <img src={arrow} alt="Next" />
        </li>
      </ul>
    </div>
  );
};

export default Paging;
