import React from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/icons/ic-x.svg";

const Button = styled.button`
  background-color: #9ca3af;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--blue);
  }
`;

interface DeleteButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, label }) => {
  return (
    <Button aria-label={`${label} 삭제`} onClick={onClick}>
      <img src={deleteIcon} alt="이미지 삭제" />
    </Button>
  );
};

export default DeleteButton;
