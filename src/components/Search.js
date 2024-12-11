import styled from "styled-components";
import IcSearchImg from "../assets/ic_search.svg";

const SearchForm = styled.form`
  position: relative;
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  grid-area: search;
  width: 325px;
  height: 42px;
  padding: 0 16px 0 46px;
  border-radius: 12px;
  background: var(--gray-scale-100) url("${IcSearchImg}") no-repeat left 16px
    center;
  border: none;
  color: var(--gray-scale-800);
  font-size: 16px;
  line-height: 26px;
  font-weight: var(--font-weight-regular);
  @media (max-width: 767px) {
    width: 100%;
  }
  &::placeholder {
    color: var(--gray-scale-400);
  }
`;

function Search({ handleKeywordSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleKeywordSubmit(e);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="search"
        name="keyword"
        className="input-search"
        placeholder="검색할 상품을 입력해주세요"
        autoComplete="off"
      />
    </SearchForm>
  );
}

export default Search;
