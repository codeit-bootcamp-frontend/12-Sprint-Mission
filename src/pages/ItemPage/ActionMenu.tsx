import React, { useState } from "react";
import styled from "styled-components";
import LoadMoreIcon from "../../assets/icons/ic-kebab.svg";

const ActionButtonWrapper = styled.div`
  position: relative;
`;

const LoadMoreImage = styled.button`
  position: absolute;
  right: 0;
  cursor: pointer;
  margin-top: 16px;
  background: none;
  border: none;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
  }
`;

const ActionDropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  z-index: 99;
`;

const ActionOption = styled.div`
  padding: 12px 40px;
  border-bottom: 1px solid var(--gray-200);
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #d1d5db;
  border-radius: 8px 8px 0 0;
  border-bottom: none;
  color: #6b7280;
  cursor: pointer;
  white-space: nowrap;

  &:last-child {
    border-bottom: 1px solid #d1d5db;
    border-radius: 0 0 8px 8px;
  }

  &:hover {
    background-color: var(--gray-100);
  }
`;

function ActionMenu() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (option: string) => {
    console.log(`${option} 클릭됨`);
    setIsDropdownVisible(false); // 드롭다운 닫기
  };

  return (
    <ActionButtonWrapper>
      <LoadMoreImage onClick={toggleDropdown}>
        <img src={LoadMoreIcon} alt="더보기" />
      </LoadMoreImage>

      {isDropdownVisible && (
        <ActionDropdownMenu>
          <ActionOption onClick={() => handleOptionClick("수정")}>
            수정
          </ActionOption>
          <ActionOption onClick={() => handleOptionClick("삭제")}>
            삭제
          </ActionOption>
        </ActionDropdownMenu>
      )}
    </ActionButtonWrapper>
  );
}

export default ActionMenu;
