"use client";

// components/SortDropdown.tsx

import { useState } from "react";
import styles from "../styles/SortDropdown.module.css";

const SortDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("featured");

  const options = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: ascending" },
    { value: "price-desc", label: "Price: descending" },
    { value: "new-arrivals", label: "New Arrivals" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        Sort by: {options.find((opt) => opt.value === selectedOption)?.label}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={selectedOption === option.value ? styles.selected : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
