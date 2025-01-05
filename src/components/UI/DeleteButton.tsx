import { MouseEventHandler } from "react";
import styled from "styled-components";
import DeleteIcon from "@/assets/images/icons/ic_x.svg?react";

interface DeleteButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const DeleteButtonStyled = styled.button`
  background-color: var(--secondary-400);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--primary-100);
  }
`;

const DeleteIconStyled = styled(DeleteIcon)`
  width: 0.8rem;
  height: 0.8rem;
`;

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <DeleteButtonStyled type="button" onClick={onClick}>
      <DeleteIconStyled />
    </DeleteButtonStyled>
  );
}

export default DeleteButton;
