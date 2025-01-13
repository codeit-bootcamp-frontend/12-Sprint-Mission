import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import down from "@/public/down.svg";
import Image from "next/image";

// 부모 컴포넌트로 선택된 값 전달을 위한 onChange prop 추가
type DropdownProps = {
    onChange: (option: string) => void; // 부모 컴포넌트로 전달할 핸들러
};

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("최신순"); // 선택된 항목 저장

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option); // 선택된 항목 저장
        setIsOpen(false); // 드롭다운 닫기
        // "최신순" -> "recent", "좋아요순" -> "like"로 매핑
        const mappedOption = option === "최신순" ? "recent" : "like";
        onChange(mappedOption); // 부모 컴포넌트에 mappedOption 값 전달
    };

    return (
        <div className={styles.dropdownContainer}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
                <p className={styles.text}>{selectedOption}</p>
                <Image src={down} alt="down" width={24} height={24} />
            </button>
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <ul>
                        <li
                            className={styles.dropdownItem}
                            onClick={() => handleSelectOption("최신순")}
                        >
                            최신순
                        </li>
                        <li
                            className={styles.dropdownItem}
                            onClick={() => handleSelectOption("좋아요순")}
                        >
                            좋아요순
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
