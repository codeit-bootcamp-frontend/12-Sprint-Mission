import arrowIcon from "../../assets/img/icon/icon_arrow_down.svg";
import sortIcon from "../../assets/img/icon/icon_sort.svg";
import styles from "./styles.module.scss";
import Dropdown from "../Dropdown";

export default function Filter({ value, options, onChange }) {
  const selectedLabel = options.find((option) => option.value === value).label;

  function handleClick(value) {
    onChange(value);
  }

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className={styles.button}>
          <span className={styles.label}>{selectedLabel}</span>
          <img className={styles.arrow} src={arrowIcon} alt="선택하기" />
          <img className={styles.sort} src={sortIcon} alt="선택하기" />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
