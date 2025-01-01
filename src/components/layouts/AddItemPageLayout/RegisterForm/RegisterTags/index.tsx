import styled from 'styled-components';
import closeImg from '@/assets/images/ic_X.svg';

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--gray100);
  border-radius: 26px;
  padding: 6px 12px;
  background-color: var(--gray100);
`;

const TagName = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const TagCloseImg = styled.img`
  cursor: pointer;
`;

interface Props {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const RegisterTags = ({ tags, setTags }: Props) => {
  const deleteTag = (index: number) => {
    setTags((prevTags) => {
      return prevTags.filter((_, prevIndex) => index !== prevIndex);
    });
  };

  return (
    <Tags>
      {tags.map((value, index) => (
        <Tag key={value}>
          <TagName>{`#${value}`}</TagName>
          <TagCloseImg src={closeImg} alt='닫기 이미지' onClick={() => deleteTag(index)} />
        </Tag>
      ))}
    </Tags>
  );
};

export default RegisterTags;
