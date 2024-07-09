// components/ProductGallery.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/ProductGallery.module.css";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.productGallery}>
      <div className={styles.mainImage}>
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${
              index === selectedImage ? styles.selected : ""
            }`}
            onClick={() => setSelectedImage(index)}
            aria-label={`Select image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={100}
              height={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
