"use client";
import { useState } from "react";
import styles from "../styles/ProductCheckoutCard.module.css";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice: number;
  isBlack?: boolean;
  freeDelivery?: boolean;
  guaranteed?: boolean;
}

const ProductCheckoutCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  isBlack = true,
  freeDelivery = true,
  guaranteed = true,
}) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <Image
          src="/productImages/image.png"
          alt="MacBook Pro"
          width={250}
          height={250}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productContent}>
        <h2 className={styles.productTitle}>{title}</h2>
        <div className={styles.productDetails}>
          <ul className={styles.productFeatures}>
            {isBlack && <li className={styles.featureBlack}>Black</li>}
            {freeDelivery && (
              <li className={styles.featureDelivery}>Free Delivery</li>
            )}
            {guaranteed && (
              <li className={styles.featureGuaranteed}>Guaranteed</li>
            )}
          </ul>
          <div className={styles.productPrice}>
            <span className={styles.originalPrice}>
              ${originalPrice.toFixed(2)}
            </span>
            <span className={styles.discountedPrice}>$ {price.toFixed(2)}</span>
          </div>
          <div className={styles.quantityControl}>
            <button
              className={styles.quantityButton}
              onClick={decrementQuantity}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className={styles.quantityInput}
            />
            <button
              className={styles.quantityButton}
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
