// components/ProductDetails.tsx
import React from "react";
import styles from "../styles/ProductDetails.module.css";
import PriceDetails from "./PriceDetails";
import ProductGallery from "./ProductGallery";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductDetailsProps {
  images: ProductImage[];
  name: string;
  price: number;
  lastPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  colors: string[];
  brand: string;
  modelName: string;
  screenSize: string;
  hardDiskSize: string;
  cpuModel: string;
  technicalDetails: {
    display: string;
    graphics: string;
    processor: string;
    inTheBox: string;
    height: string;
    width: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  images,
  name,
  price,
  lastPrice,
  discount,
  rating,
  reviews,
  colors,
  brand,
  modelName,
  screenSize,
  hardDiskSize,
  cpuModel,
  technicalDetails,
}) => {
  const priceData = {
    price: price,
    lastPrice: lastPrice,
    discount: discount,
  };
  return (
    <div className={styles.container}>
      <ProductGallery images={images} />
      {/* Product Info */}

      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{name}</h1>
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(rating) ? styles.starFilled : styles.starEmpty
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className={styles.reviews}>({reviews})</span>
        </div>
        <div className={styles.colorSection}>
          <span className={styles.colorLabel}>Select color</span>
          <div className={styles.colorOptions}>
            {colors.map((color, index) => (
              <button
                key={index}
                className={styles.colorButton}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div className={styles.specsList}>
          {/* {Object.entries(specs).map(([key, value]) => (
          <div key={key} className={styles.specItem}>
            <span className={styles.specKey}>{key}</span>
            <span className={styles.specValue}>{value}</span>
          </div>
        ))} */}
          <div className={styles.specItem}>
            <span className={styles.specKey}>Brand:</span>
            <span className={styles.specValue}>{brand}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specKey}>Model Name:</span>
            <span className={styles.specValue}>{modelName}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specKey}>Screen Size:</span>
            <span className={styles.specValue}>{screenSize}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specKey}>Hard Disk Size:</span>
            <span className={styles.specValue}>{hardDiskSize}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specKey}>CPU Model</span>
            <span className={styles.specValue}>{cpuModel}</span>
          </div>
        </div>
      </div>

      {/* price details */}
      <div className={styles.priceDetailsContainer}>
        <PriceDetails {...priceData} />
      </div>
      {/* technical details */}
      <div className={styles.technicalDetails}>
        <h2 className="font-bold">Technical Details</h2>
        <table className={styles.technicalTable}>
          <tbody>
            {Object.entries(technicalDetails).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
