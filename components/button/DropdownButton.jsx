import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: auto;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.li`
  display: block;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// DropdownButton.jsx
const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const toggleDropdown = () => setIsOpen(!isOpen);

  // 선택된 값에 따라 상태 업데이트
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false); // 드롭다운 닫기
    onSelect(value); // 선택된 값 부모로 전달
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{selected} ㅤㅤ▼</DropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleSelect("최신순")}>
            최신순
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect("인기순")}>
            인기순
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
