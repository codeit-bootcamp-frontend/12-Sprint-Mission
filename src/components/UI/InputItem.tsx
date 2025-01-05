import styled from "styled-components";

interface InputItemProps {
  id: string;
  label?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean;
}

const InputLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--secondary-800);
  margin: 3.2rem 0 1.6rem;

  @media (max-width: 1199px) {
    margin-top: 2.4rem;
  }
`;

const InputField = styled.input`
  background-color: var(--secondary-100);
  border: none;
  border-radius: 1.2rem;
  padding: 1.6rem 2.4rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  width: 100%;

  &::placeholder {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--secondary-400);
  }

  &:focus {
    outline-color: var(--primary-100);
  }
`;

const TextArea = styled.textarea`
  background-color: var(--secondary-100);
  border: none;
  border-radius: 1.2rem;
  padding: 1.6rem 2.4rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  width: 100%;
  height: 28.2rem;
  resize: none;

  &::placeholder {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--secondary-400);
  }

  &:focus {
    outline-color: var(--primary-100);
  }
`;

const InputItem: React.FC<InputItemProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  onKeyDown,
  isTextArea = false,
}) => {
  return (
    <div>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      {isTextArea ? (
        <TextArea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
      ) : (
        <InputField
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputItem;
