import { Link } from "react-router-dom";
import searchImage from "../../assets/images/search.png";
import "./SearchForm.css";
import useDevice from "../../hooks/useDevice";
import { OrderByType } from "../../api";

interface SearchFormProps {
  selectedOption: OrderByType;
  setSelectedOption: (option: OrderByType) => void;
}

function SearchForm({ selectedOption, setSelectedOption }: SearchFormProps) {
  const { mode } = useDevice();
  return (
    <form className="search-form">
      <div className={`search-container ${mode}`}>
        <img src={searchImage} alt="검색" />
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          className="search-input"
        />
      </div>
      <Link to="./pages/additem">
        <button type="submit" className="search-button">
          상품 등록하기
        </button>
      </Link>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value as OrderByType)}
        className="search-select"
      >
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </form>
  );
}

export default SearchForm;
