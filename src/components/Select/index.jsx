import arrowIcon from "@assets/img/icon/icon_arrow_down.svg";
import sortIcon from "@assets/img/icon/icon_sort.svg";
import styles from "./styles.module.scss";
import Dropdown from "@components/Dropdown";

export default function Select({ value, options, onChange }) {
  const selectedLabel = options.find((option) => option.value === value).label;
  return (
    <Dropdown onChange={onChange}>
      <Dropdown.Toggle>
        {/* TODO: (재사용을 높여야한다면) select 컴포넌트가 trigger프롭으로 버튼 컴포넌트를 받기 */}
        <button type="button" className={styles.button}>
          <span className={styles.label}>{selectedLabel}</span>
          <img className={styles.arrow} src={arrowIcon} alt="선택하기" />
          <img className={styles.sort} src={sortIcon} alt="선택하기" />
        </button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option.value} value={option.value}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
