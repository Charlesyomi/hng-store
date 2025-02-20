// components/ProductGrid.tsx
import React from "react";
import styles from "../styles/ProductGrid.module.css";
import star from "/public/icons/star.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  discount: number;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductCard: React.FC<Product> = ({
  name,
  imageUrl,
  price,
  rating,
  discount,
}) => {
  const discountedPrice = price * (1 - discount / 100);

  return (
    // <Link href={`/products/laptop/${name}`}>
    <div className={styles.card}>
      {discount > 0 && <div className={styles.discountBadge}>-{discount}%</div>}
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={150}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <div className="flex items-center justify-between">
          <div className={styles.priceContainer}>
            <span className={styles.price}>${discountedPrice.toFixed(2)}</span>
            {discount > 0 && (
              <span className={styles.originalPrice}>${price.toFixed(2)}</span>
            )}
          </div>
          <div className={styles.rating}>
            <span className={styles.stars}>
              <Image alt="" src={star} />
            </span>
            <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className={styles.hoverContent}>
        <button className={styles.addToCart}>
          <Link href={`/products/laptop/${name}`}>Add to cart</Link>
        </button>
        <button className={styles.favoriteButton}>♡</button>
      </div>
    </div>
    // </Link>
  );
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        // <div key={product.id} className={styles.productCard}>
        //   <Image
        //     src={product.image}
        //     alt={product.name}
        //     className={styles.productImage}
        //   />
        //   <h3 className={styles.productName}>{product.name}</h3>
        //   <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        //   <p className={styles.productRating}>Rating: {product.rating}/5</p>
        //   <button className={styles.addToCartButton}>Add to Cart</button>
        // </div>
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
