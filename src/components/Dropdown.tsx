import dropdownToggle from "@/assets/icons/dropdown-toggle.svg";
import Image from "next/image";
import style from "./Dropdown.module.css";

interface DropdownProps {
  isOpen: boolean;
  selectedLabel: string;
  onToggle: () => void;
  onSelect: (label: "최신순" | "인기순", value: "recent" | "like") => void;
}

export default function Dropdown({ isOpen, selectedLabel, onToggle, onSelect }: DropdownProps) {
  return (
    <div className={style.dropdownContainer}>
      <button className={style.dropdownBtn} onClick={onToggle}>
        {selectedLabel}
        <Image src={dropdownToggle} alt="더보기" />
      </button>
      {isOpen && (
        <ul className={style.dropdownMenu}>
          <li className={style.dropdownItem} onClick={() => onSelect("최신순", "recent")}>
            최신순
          </li>
          <li className={style.dropdownItem} onClick={() => onSelect("인기순", "like")}>
            인기순
          </li>
        </ul>
      )}
    </div>
  );
}
