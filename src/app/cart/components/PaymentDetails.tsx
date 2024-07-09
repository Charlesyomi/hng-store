import Link from "next/link";
import styles from "../styles/PaymentDetails.module.css";

interface PaymentDetailsProps {
  subtotal: number;
  discount: number;
  shipmentCost: number;
  onCheckout: () => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  subtotal,
  discount,
  shipmentCost,
  onCheckout,
}) => {
  const grandTotal = subtotal - discount + shipmentCost;

  return (
    <div className={styles.paymentDetails}>
      <h2 className={styles.title}>Payment Details</h2>
      <dl className={styles.details}>
        <div className={styles.row}>
          <dt>Subtotal</dt>
          <dd>${subtotal.toFixed(2)}</dd>
        </div>
        <div className={styles.row}>
          <dt>Discount</dt>
          <dd>-${discount.toFixed(2)}</dd>
        </div>
        <div className={styles.row}>
          <dt>Shipment cost</dt>
          <dd>${shipmentCost.toFixed(2)}</dd>
        </div>
      </dl>
      <div className={styles.total}>
        <dt>Grand Total</dt>
        <dd>${grandTotal.toFixed(2)}</dd>
      </div>
      <button
        className={styles.checkoutButton}
        onClick={onCheckout}
        aria-label="Proceed to checkout"
      >
        <Link href="/cart/checkout">Proceed to checkout</Link>
      </button>
    </div>
  );
};

export default PaymentDetails;
