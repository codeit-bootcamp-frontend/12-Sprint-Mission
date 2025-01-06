import Image from "next/image";
import arrowIcon from "@assets/img/icon/icon_arrow_down.svg";
import sortIcon from "@assets/img/icon/icon_sort.svg";
import { Dropdown } from "@components/ui";
import styles from "./Select.module.scss";

interface SelectProps {
  value: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
}

export function Select({ value, options = [], onChange }: SelectProps) {
  const selectedLabel = options.find((option) => option.value === value)?.label;
  return (
    <Dropdown>
      <Dropdown.Toggle asChild>
        <button type="button" className={styles.button}>
          <span className={styles.label}>{selectedLabel}</span>
          <Image className={styles.arrow} src={arrowIcon} alt="선택하기" />
          <Image className={styles.sort} src={sortIcon} alt="선택하기" />
        </button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
