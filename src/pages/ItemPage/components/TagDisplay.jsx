import styled from "styled-components";

const TagsDisplaySection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: var(--secondary-100);
  color: var(--secondary-800);
  padding: 0.6rem 1.6rem;
  border-radius: 2.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
`;

function TagDisplay({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <TagsDisplaySection>
      {tags.map((tag) => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
    </TagsDisplaySection>
  );
}

export default TagDisplay;
