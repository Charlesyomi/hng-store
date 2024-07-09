"use client";

// pages/cart.tsx

import CartProgressIndicator from "./components/CartProgressIndicator";
import PaymentDetails from "./components/PaymentDetails";
import ProductCheckoutCard from "./components/ProductCheckoutCard";
import styles from "./styles/CartPage.module.css";

const steps = [
  { key: "cart", label: "Cart", icon: "🛒" },
  { key: "checkout", label: "Checkout", icon: "📦" },
  { key: "payment", label: "Payment", icon: "💳" },
];

const page: React.FC = () => {
  const handleCheckout = () => {
    // Implement checkout logic
    console.log("Proceeding to checkout");
  };

  return (
    <div className={styles.container}>
      <CartProgressIndicator steps={steps} currentStep="cart" />

      <div className={styles.cartContent}>
        <div className={styles.checkoutContainer}>
          <ProductCheckoutCard
            title="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"
            price={433.0}
            originalPrice={1293.0}
          />
          <ProductCheckoutCard
            title="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"
            price={433.0}
            originalPrice={1293.0}
          />
          <ProductCheckoutCard
            title="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"
            price={433.0}
            originalPrice={1293.0}
          />
        </div>
        <PaymentDetails
          subtotal={519.52}
          discount={111.87}
          shipmentCost={22.5}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default page;
