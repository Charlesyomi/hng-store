"use client";

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
import { usePathname } from "next/navigation";

const categories = [
  { name: "Mobile", icon: mobilePhoneIcon, href: "/products/mobile" },
  { name: "Laptop", icon: pcIcon, href: "/products/laptop" },
  { name: "Accessories", icon: accessoriesIcon, href: "/products/accessories" },
  { name: "Tablet", icon: mobilePhoneIcon, href: "/products/tablet" },
  { name: "Camera", icon: cameraIcon, href: "/products/camera" },
];

interface NavLinkProps {
  href: string;
  name: string;
  icon: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, name, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link key={name} href={href} className={styles.categoryLink}>
      <span>
        <Image alt="" src={icon} className={styles.categoryIcon} />
      </span>
      <span className={styles.categoryName}>{name}</span>
    </Link>
  );
};

const CategoryNav = () => {
  return (
    <div>
      <nav className={styles.categoryNav}>
        {categories.map((category) => (
          <NavLink key={category.name} {...category} />
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
