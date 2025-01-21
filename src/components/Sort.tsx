import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import sortIcon from "../assets/ic_sort.svg";
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

// 타입 설정
type SortOrder = "recent" | "favorite";
type SortProps = {
  setOrder: Dispatch<SetStateAction<SortOrder>>;
  width: number;
};

function Sort({ setOrder, width }: SortProps) {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [currentValue, setCurrentValue] = useState<"최신순" | "좋아요순">(
    "최신순"
  );
  const [showOptions, setShowOptions] = useState(false);

  const handleClickSelectValue = (e: React.MouseEvent<HTMLElement>) => {
    const sortValue = e.currentTarget.getAttribute("value") as SortOrder;
    const sortName = e.currentTarget.textContent || "최신순";
    setCurrentValue(sortName === "최신순" ? "최신순" : "좋아요순");
    setOrder(sortValue);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
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
          <SortListLi value="recent" onClick={handleClickSelectValue}>
            최신순
          </SortListLi>
          <SortListLi value="favorite" onClick={handleClickSelectValue}>
            좋아요순
          </SortListLi>
        </SortListUl>
      )}
    </SortWrap>
  );
}

export default Sort;
