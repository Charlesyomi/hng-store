"use client";

import { useState } from "react";
import styles from "../styles/PriceDetails.module.css";
import Link from "next/link";

interface PriceDetailsProps {
  price: number;
  lastPrice: number;
  discount: number;
}

const PriceDetails: React.FC<PriceDetailsProps> = ({
  price,
  lastPrice,
  discount,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<"now" | "installments">(
    "installments"
  );
  const [installmentPeriod, setInstallmentPeriod] = useState(3);

  const monthlyPayment = (price / installmentPeriod).toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.priceContainer}>
        <span className={styles.currentPrice}>${price.toFixed(2)}</span>
        <span className={styles.discount}>-{discount}%</span>
      </div>
      <div className={styles.lastPrice}>last price ${lastPrice.toFixed(2)}</div>

      <div className={styles.paymentOptions}>
        <label className={styles.paymentOption}>
          <input
            type="radio"
            name="paymentMethod"
            value="now"
            checked={paymentMethod === "now"}
            onChange={() => setPaymentMethod("now")}
          />
          <span>Pay Now</span>
        </label>
        <label className={styles.paymentOption}>
          <input
            type="radio"
            name="paymentMethod"
            value="installments"
            checked={paymentMethod === "installments"}
            onChange={() => setPaymentMethod("installments")}
          />
          <span>Buy in installments</span>
        </label>
      </div>

      {paymentMethod === "installments" && (
        <>
          <div className={styles.installmentLabel}>
            choose your installments period
          </div>
          <div className={styles.installmentOptions}>
            {[3, 6, 12, 18].map((months) => (
              <button
                key={months}
                className={`${styles.installmentButton} ${
                  installmentPeriod === months ? styles.selected : ""
                }`}
                onClick={() => setInstallmentPeriod(months)}
              >
                {months} Months
              </button>
            ))}
          </div>
          <div className={styles.monthlyPayment}>${monthlyPayment}/Month</div>
        </>
      )}

      <button className={styles.buyNowButton}>
        <Link href="/cart">Buy Now</Link>
      </button>
      <button className={styles.addToCartButton}>
        <Link href="/cart">Add to cart</Link>
      </button>
    </div>
  );
};

export default PriceDetails;
