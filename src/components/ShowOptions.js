import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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

function ShowOptions({ handleEditClick, comment }) {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);

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
            <ShowOption onClick={() => handleEditClick(comment)}>
              수정하기
            </ShowOption>
            <ShowOption>삭제하기</ShowOption>
          </ShowOptionBox>
        )}
      </div>
    </>
  );
}

export default ShowOptions;
