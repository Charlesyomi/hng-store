// "use client";
// import { useState } from "react";
// import styles from "../styles/ProductCard.module.css";
// import Image from "next/image";

// interface ProductCardProps {
//   name: string;
//   price: number;
//   imageUrl: string;
//   rating: number;
//   discount: number;
// }

// export const ProductCard: React.FC<ProductCardProps> = ({
//   name,
//   price,
//   imageUrl,
//   rating,
//   discount,
// }) => {
//   const discountedPrice = price * (1 - discount / 100);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={styles.card}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image
//         src={imageUrl}
//         alt={name}
//         className={styles.image}
//         width={200}
//         height={150}
//       />

//       {!isHovered ? (
//         <>
//           <div className={styles.content}>
//             <h3 className={styles.name}>{name}</h3>
//             <div className="flex items-center justify-between">
//               <div className={styles.priceContainer}>
//                 <span className={styles.price}>
//                   ${discountedPrice.toFixed(2)}
//                 </span>
//                 {discount > 0 && (
//                   <span className={styles.originalPrice}>
//                     ${price.toFixed(2)}
//                   </span>
//                 )}
//               </div>
//               <div className={styles.rating}>
//                 <span className={styles.stars}>
//                   <Image
//                     alt=""
//                     src="/icons/star.svg"
//                     width={20}
//                     height={20}
//                     className={styles.image}
//                   />
//                 </span>
//                 <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className={styles.hoverContent}>
//           <button className={styles.addToCart}>Add to cart</button>
//           <button className={styles.favoriteButton}>♡</button>
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  discount: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  rating,
  discount,
}) => {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={name}
        className={styles.image}
        width={200}
        height={150}
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
              <Image
                alt=""
                src="/icons/star.svg"
                width={20}
                height={20}
                className={styles.image}
              />
            </span>
            <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className={styles.hoverContent}>
        <button className={styles.addToCart}>Add to cart</button>
        <button className={styles.favoriteButton}>♡</button>
      </div>
    </div>
  );
};
