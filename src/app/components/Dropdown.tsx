"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Dropdown.module.css";

interface ProductType {
  image: string;
  name: string;
}

interface DropdownProps {
  title: string;
  products: ProductType[];
}

const Product: React.FC<ProductType> = ({ image, name }) => {
  return (
    <div className={styles.product}>
      <span>
        <Image alt="" src={image} width={20} height={20} />
      </span>
      <span>{name}</span>
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ title, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownToggle}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu} role="menu">
          {products.map((product, index) => (
            <li key={index} role="menuitem">
              <a href="#" className={styles.dropdownItem}>
                <Product {...product} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
