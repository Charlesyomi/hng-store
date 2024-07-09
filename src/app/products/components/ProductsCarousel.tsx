// components/SimilarProductsCarousel.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/ProductsCarousel.module.css";
import { ProductCard } from "./ProductGrid";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  discount: number;
}

interface ProductsCarouselProps {
  title: string;
  products: Product[];
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  products,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      const maxIndex = products.length - getVisibleSlides();
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      if (window.innerWidth >= 480) return 2;
    }
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex, products.length - getVisibleSlides())
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products.length]);

  return (
    <section className={styles.similarProducts}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.carouselContainer}>
        <button
          onClick={prevSlide}
          className={`${styles.carouselButton} ${styles.prevButton}`}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          <div
            className={styles.carouselInner}
            style={{
              transform: `translateX(-${
                currentIndex * (100 / getVisibleSlides())
              }%)`,
            }}
          >
            {products.map((product) => (
              // <div key={product.id} className={styles.productCard}>
              //   <div className={styles.imageContainer}>
              //     <Image
              //       src={product.image}
              //       alt={product.name}
              //       layout="fill"
              //       objectFit="contain"
              //     />
              //   </div>
              //   <h3 className={styles.productName}>{product.name}</h3>
              //   <p className={styles.productPrice}>
              //     ${product.price.toFixed(2)}
              //   </p>
              //   <div className={styles.productRating}>
              //     <span className={styles.stars}>
              //       {"★".repeat(Math.round(product.rating))}
              //     </span>
              //     <span className={styles.ratingValue}>
              //       {product.rating.toFixed(1)}
              //     </span>
              //   </div>
              //   <button className={styles.addToCart}>Add to cart</button>
              //   <button
              //     className={styles.wishlist}
              //     aria-label="Add to wishlist"
              //   >
              //     ♡
              //   </button>
              //   <button
              //     className={styles.moreOptions}
              //     aria-label="More options"
              //   >
              //     ⋮
              //   </button>
              // </div>
              <div key={product.id} className={styles.productCard}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className={`${styles.carouselButton} ${styles.nextButton}`}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default ProductsCarousel;
