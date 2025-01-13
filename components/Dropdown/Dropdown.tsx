import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import down from "@/public/down.svg";
import Image from "next/image";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("최신순"); // 선택된 항목 저장

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option); // 선택된 항목 저장
        setIsOpen(false); // 드롭다운 닫기
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
