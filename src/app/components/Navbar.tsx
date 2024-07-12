"use client";

import React, { useState } from "react";
import logo from "logo.svg";

import Image from "next/image";
import styles from "../styles/Navbar.module.css";

import mobileLogo from "/public/icons/mobile-logo.svg";
import menuIcon from "/public/icons/menu.svg";
import closeIcon from "/public/icons/close-circle.svg";
import searchIcon from "/public/icons/search.svg";
import cartIcon from "/public/icons/shopping-cart.svg";
import userIcon from "/public/icons/user.svg";

// product Icons
import mobilePhoneIcon from "/public/icons/prod-cat-mobile.svg";
import pcIcon from "/public/icons/prod-cat-pc.svg";

import wearablesIcon from "/public/icons/prod-cat-wearables.svg";
import audioIcon from "/public/icons/prod-cat-audio.svg";
import cameraIcon from "/public/icons/prod-cat-camera.svg";
import gameIcon from "/public/icons/prod-cat-game.svg";
import networkingIcon from "/public/icons/prod-cat-networking.svg";
import accessoriesIcon from "/public/icons/prod-cat-access.svg";
import dropDown from "/public/icons/dropdown.svg";
import Link from "next/link";

const products = [
  {
    image: mobilePhoneIcon,
    name: "Mobile Phones",
  },
  {
    image: pcIcon,
    name: "Laptops & Computers",
  },
  {
    image: mobilePhoneIcon,
    name: "Tablets & E-readers",
  },
  {
    image: wearablesIcon,
    name: "Wearables",
  },
  {
    image: audioIcon,
    name: "Audio",
  },
  {
    image: cameraIcon,
    name: "Cameras",
  },
  {
    image: gameIcon,
    name: "Gaming",
  },
  {
    image: networkingIcon,
    name: "Networking",
  },
  {
    image: accessoriesIcon,
    name: "Accessories",
  },
];

type ProductProps = {
  image: string;
  name: string;
};
const Product: React.FC<ProductProps> = ({ image, name }) => {
  return (
    <div className={styles.product}>
      <span>
        <Image alt="" src={image} width={25} height={25} />
      </span>
      <span>{name}</span>
    </div>
  );
};
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleProductsDrop = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <Image
            src={menuIcon}
            alt="open menu"
            className=""
            width={25}
            height={25}
            priority
          />
        </button>
        <Image
          src="/logo.svg"
          alt="HNG store Logo"
          className=""
          width={100}
          height={24}
          priority
        />
        <div className={styles.desktopNav}>
          <div className={styles.navItems}>
            <Link href="#" className={styles.navItem}>
              Home
            </Link>
            <Link href="/products" className={styles.navItem}>
              Products
            </Link>
            <Link href="#" className={styles.navItem}>
              Blog
            </Link>
            <Link href="#" className={styles.navItem}>
              FAQ
            </Link>
            <Link href="#" className={styles.navItem}>
              Contact Us
            </Link>
          </div>
        </div>

        <div className={styles.iconGroup}>
          <span className={styles.icon}>
            <Image
              alt="search-product"
              src={searchIcon}
              width={25}
              height={25}
            />
          </span>
          <span className={styles.icon}>
            <Link href="/cart">
              <Image alt="cart" src={cartIcon} width={25} height={25} />
            </Link>
          </span>
          <span className={styles.icon}>
            <Image alt="user profile" src={userIcon} width={25} height={25} />
          </span>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <Image
                src={mobileLogo}
                alt="HNG store Logo"
                className=""
                width={25}
                height={25}
                priority
              />
              <button className={styles.closeMenu} onClick={toggleMenu}>
                <Image
                  src={closeIcon}
                  alt="close menu"
                  className=""
                  width={20}
                  height={20}
                  priority
                />
              </button>
            </div>

            <ul>
              <li>
                <button
                  onClick={toggleProductsDrop}
                  aria-expanded={isProductsOpen}
                  aria-controls="products-dropdown"
                  className="flex justify-between items-center w-full rota"
                >
                  <span>Products</span>
                  <span>
                    <Image
                      alt=""
                      src={dropDown}
                      className={`${!isProductsOpen && "rotate-180"}`}
                    />
                  </span>
                </button>
              </li>
              {isProductsOpen && (
                <ul>
                  {products.map((product, index) => (
                    <li key={index}>
                      <a href="#">
                        <Product {...product} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <li>Blog</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
