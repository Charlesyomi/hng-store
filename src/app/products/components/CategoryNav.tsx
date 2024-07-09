import styles from "../styles/CategoryNav.module.css";
import Link from "next/link";

import mobilePhoneIcon from "/public/icons/prod-cat-mobile.svg";
import pcIcon from "/public/icons/prod-cat-pc.svg";

import wearablesIcon from "/public/icons/prod-cat-wearables.svg";
import audioIcon from "/public/icons/prod-cat-audio.svg";
import cameraIcon from "/public/icons/prod-cat-camera.svg";
import gameIcon from "/public/icons/prod-cat-game.svg";
import networkingIcon from "/public/icons/prod-cat-networking.svg";
import accessoriesIcon from "/public/icons/prod-cat-access.svg";
import Image from "next/image";

const categories = [
  { name: "Mobile", icon: mobilePhoneIcon, href: "/products/mobile" },
  { name: "Laptop", icon: pcIcon, href: "/products/laptop" },
  { name: "Accessories", icon: accessoriesIcon, href: "/products/accessories" },
  { name: "Tablet", icon: mobilePhoneIcon, href: "/products/tablet" },
  { name: "Camera", icon: cameraIcon, href: "/products/camera" },
];

const CategoryNav = () => {
  return (
    <div>
      <nav className={styles.categoryNav}>
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className={styles.categoryLink}
          >
            <span>
              <Image
                alt=""
                src={category.icon}
                className={styles.categoryIcon}
              />
            </span>
            <span className={styles.categoryName}>{category.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
