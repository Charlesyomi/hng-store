import Link from "next/link";
import styles from "../styles/ShippingInfo.module.css";

interface ShippingMethod {
  id: string;
  name: string;
  duration: string;
  price: number;
}

interface ShippingInfoProps {
  userName: string;
  shippingAddress: string;
  selectedMethod: string;
  onMethodChange: (methodId: string) => void;
  onReturnToCart: () => void;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({
  userName,
  shippingAddress,
  selectedMethod,
  onMethodChange,
  onReturnToCart,
}) => {
  const shippingMethods: ShippingMethod[] = [
    {
      id: "free",
      name: "Free Shipping",
      duration: "7-30 business days",
      price: 0,
    },
    {
      id: "regular",
      name: "Regular Shipping",
      duration: "3-14 business days",
      price: 7.5,
    },
    {
      id: "express",
      name: "Express Shipping",
      duration: "1-3 business days",
      price: 22.5,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>User</h2>
        <div className={styles.sectionContent}>{userName}</div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Ship to</h2>
        <div className={styles.sectionContent}>
          {shippingAddress}
          <button
            className={styles.editButton}
            aria-label="Edit shipping address"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                fill="#007BFF"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Shipping Method</h2>
        <div className={styles.shippingMethods}>
          {shippingMethods.map((method) => (
            <label key={method.id} className={styles.methodLabel}>
              <input
                type="radio"
                name="shippingMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => onMethodChange(method.id)}
                className={styles.methodInput}
              />
              <span className={styles.methodDetails}>
                <span className={styles.methodName}>{method.name}</span>
                <span className={styles.methodDuration}>{method.duration}</span>
              </span>
              <span className={styles.methodPrice}>
                ${method.price.toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button onClick={onReturnToCart} className={styles.returnButton}>
        <Link href="/cart">Return to cart</Link>
      </button>
    </div>
  );
};

export default ShippingInfo;
