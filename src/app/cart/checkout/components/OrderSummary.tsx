import React from "react";
import Image from "next/image";
import styles from "../styles/OrderSummary.module.css";

interface OrderItem {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageURL: string;
}

const OrderSummary: React.FC = () => {
  const orderItems: OrderItem[] = [
    {
      name: "MacBook Pro M2 MNE13 2022 LLA 13.3 inch",
      description: "Black",
      price: 433.0,
      originalPrice: 1299.0,
      imageURL: "/productImages/image.png",
    },
    {
      name: "Inateck 12.3-13 inch Laptop Case Sleeve 38...",
      description: "Blue",
      price: 63.26,
      imageURL: "/productImages/image.png",
    },
    {
      name: "Laptop Privacy Screen for 13 inch MacBook...",
      description: "Black",
      price: 23.26,
      imageURL: "/productImages/image.png",
    },
  ];

  const subtotal = 519.52;
  const discount = 111.87;
  const shippingCost = 22.5;
  const grandTotal = 543.02;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Order</h2>
      {orderItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.itemImageContainer}>
            <Image
              src={item.imageURL}
              alt={item.name}
              width={100}
              height={100}
              className={styles.itemImage}
            />
          </div>
          <div>
            <div>
              <div className={styles.itemDetails}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemDescription}>{item.description}</div>
                <div className={styles.itemQuantity}>x1</div>
              </div>
            </div>
            <div className={styles.itemPrice}>
              ${item.price.toFixed(2)}
              {item.originalPrice && (
                <span className={styles.originalPrice}>
                  from ${item.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className={styles.discountCode}>
        <input
          type="text"
          placeholder="discount code"
          className={styles.discountInput}
        />
        <button className={styles.applyButton}>Apply</button>
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Shipment cost</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className={`${styles.summaryItem} ${styles.grandTotal}`}>
          <span>Grand Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>
      <button className={styles.payButton}>Continue to pay</button>
    </div>
  );
};

export default OrderSummary;
