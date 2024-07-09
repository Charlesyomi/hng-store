// components/FeatureIcons.tsx

import React from "react";
import styles from "../styles/FeatureIcons.module.css";
import modernTech from "/public/icons/modern-tech.svg";
import guarantee from "/public/icons/guarantee.svg";
import shipping from "/public/icons/shipping.svg";
import activeSupport from "/public/icons/active-support.svg";
import Image from "next/image";

const FeatureIcons: React.FC = () => {
  const features = [
    { icon: modernTech, text: "Latest and Greatest Tech" },
    { icon: guarantee, text: "Guarantee" },
    { icon: shipping, text: "Free Shipping over 1000$" },
    { icon: activeSupport, text: "24/7 Support" },
  ];

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <span className={styles.icon}>
            <Image alt="" src={feature.icon} />
          </span>
          <span className={styles.text}>{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureIcons;
