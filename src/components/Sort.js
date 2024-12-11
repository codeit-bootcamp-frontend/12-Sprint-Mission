import sortIcon from "../assets/ic_sort.svg";
import styled, { css } from "styled-components";
import { useState, useRef, useEffect } from "react";
import IconDown from "../assets/ic_arrow_down.svg";

const SortWrap = styled.div`
  grid-area: sort;
  display: flex;
  position: relative;
  justify-content: flex-end;
  cursor: pointer;
`;

const SortLabelCommon = css`
  border: 1px solid var(--gray-scale-200);
  border-radius: 12px;
  appearance: none;
  align-content: center;
`;

const SortLabel = styled.label`
  ${SortLabelCommon}
  width: 130px;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  text-align: left;
  color: var(--gray-scale-800);
  background: url("${IconDown}") no-repeat right 12px center;
`;

const SortLabelImg = styled.img`
  ${SortLabelCommon}
  width: 42px;
  padding: 9px;
  background-image: none;
`;

const SortListUl = styled.ul`
  position: absolute;
  right: 0;
  top: 50px;
  width: 130px;
  background-color: var(--gray-scale-0);
  padding: 12px 0;
  border: 1px solid var(--gray-scale-200);
  border-radius: 12px;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--gray-scale-800);
`;

const SortListLi = styled.li`
  padding: 0 20px;
  &:first-child {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--gray-scale-200);
  }
  &:last-child {
    padding-top: 12px;
  }
`;

function Sort({ setOrder, width }) {
  const selectRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("최신순");
  const [showOptions, setShowOptions] = useState(false);

  const handleClickSelectValue = (e) => {
    const sortValue = e.target.getAttribute("value");
    const sortName = e.target.getAttribute("name");
    setCurrentValue(sortName);
    setOrder(sortValue);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <SortWrap
      onClick={() => {
        setShowOptions(!showOptions);
      }}
      ref={selectRef}
    >
      {width >= 768 && <SortLabel>{currentValue}</SortLabel>}
      {width < 768 && <SortLabelImg src={sortIcon} alt="정렬하기" />}
      {showOptions && (
        <SortListUl>
          <SortListLi
            value="recent"
            name="최신순"
            onClick={handleClickSelectValue}
          >
            최신순
          </SortListLi>
          <SortListLi
            value="favorite"
            name="좋아요순"
            onClick={handleClickSelectValue}
          >
            좋아요순
          </SortListLi>
        </SortListUl>
      )}
    </SortWrap>
  );
}

export default Sort;
