import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Item, CommentsList } from "../api/api";
import keBabImg from "../assets/ic_kebab.svg";

const ShowOptionsBtn = styled.img`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
const ShowOptionBox = styled.ul`
  position: absolute;
  z-index: 2;
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
const ShowOption = styled.li`
  padding: 0 20px;
  cursor: pointer;
  &:first-child {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--gray-scale-200);
  }
  &:last-child {
    padding-top: 12px;
  }
`;

// 타입 설정
interface ShowOptionsProps {
  handleEditClick: (item: CommentsList | Item) => void;
  handleDeleteClick: (item: CommentsList | Item) => void;
  item: CommentsList | Item;
}

function ShowOptions({
  handleEditClick,
  handleDeleteClick,
  item,
}: ShowOptionsProps) {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

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
    <>
      <div ref={selectRef}>
        <ShowOptionsBtn
          src={keBabImg}
          onClick={(e) => {
            setShowOptions(!showOptions);
          }}
          alt="수정 삭제 버튼"
        />
        {showOptions && (
          <ShowOptionBox>
            <ShowOption onClick={() => handleEditClick(item)}>
              수정하기
            </ShowOption>
            <ShowOption onClick={() => handleDeleteClick(item)}>
              삭제하기
            </ShowOption>
          </ShowOptionBox>
        )}
      </div>
    </>
  );
}

export default ShowOptions;
