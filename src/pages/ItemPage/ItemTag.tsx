import React from "react";
import styled from "styled-components";

const TagSection = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 6px 16px;
  border-radius: 26px;
  font-size: 16px;
`;

interface ItemTagProps {
  tags: string[];
}

const ItemTag: React.FC<ItemTagProps> = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <TagSection>
      {tags.map((tag, index) => (
        <Tag key={`tag-display-${index}`}>#{tag}</Tag>
      ))}
    </TagSection>
  );
};

export default ItemTag;
