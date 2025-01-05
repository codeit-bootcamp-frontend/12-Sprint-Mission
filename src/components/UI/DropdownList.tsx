import styled from "styled-components";

interface DropdownListProps {
  onSortSelection: (sortType: string) => void;
}

const DropdownListStyled = styled.div`
  position: absolute;
  top: 120%;
  width: 13rem;
  height: 8.4rem;
  background-color: var(--color-white);
  border: 0.1rem solid var(--secondary-200);
  border-radius: 1.2rem;
  z-index: 99;
`;

const DropdownItemStyled = styled.div`
  padding: 1.2rem;
  text-align: center;
  border-bottom: 0.1rem solid var(--secondary-200);
  font-size: 1.6rem;
  color: var(--secondary-800);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

function DropdownList({ onSortSelection }: DropdownListProps) {
  return (
    <DropdownListStyled>
      <DropdownItemStyled onClick={() => onSortSelection("recent")}>
        최신순
      </DropdownItemStyled>
      <DropdownItemStyled onClick={() => onSortSelection("favorite")}>
        좋아요순
      </DropdownItemStyled>
    </DropdownListStyled>
  );
}

export default DropdownList;
