import { useState } from "react";
import styled from "styled-components";
import InputItem from "@/components/UI/InputItem";
import DeleteButton from "@/components/UI/DeleteButton";

interface InputTagProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagList = styled.div`
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const Tag = styled.span`
  background-color: var(--secondary-100);
  padding: 0.5rem 1.6rem;
  border-radius: 2.6rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--secondary-800);
`;

const InputTag: React.FC<InputTagProps> = ({ tags, onAddTag, onRemoveTag }) => {
  const [input, setInput] = useState<string>("");

  const handleEnterKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputTagString = input.trim();
    if (e.key === "Enter" && inputTagString) {
      e.preventDefault();
      onAddTag(inputTagString);
      setInput("");
    }
  };

  return (
    <div>
      <InputItem
        id="tags"
        label="태그"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnterKeyDown}
        placeholder="태그를 입력해 주세요"
      />
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>
            #{tag}
            <DeleteButton onClick={() => onRemoveTag(tag)} />
          </Tag>
        ))}
      </TagList>
    </div>
  );
};

export default InputTag;
