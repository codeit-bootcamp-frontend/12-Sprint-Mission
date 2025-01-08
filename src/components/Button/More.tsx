import { Dropdown } from "@components/ui";
import dotsIcon from "@assets/img/icon/icon_dots.svg";
import styles from "./More.module.scss";

interface MoreProps {
  options: {
    label: string;
    action: () => void;
  }[];
}

export function More({ options }: MoreProps) {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className={styles.icon}>
          <img src={dotsIcon} alt="더보기" />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option.label} onClick={option.action}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
