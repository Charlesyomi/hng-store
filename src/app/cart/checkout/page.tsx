"use client";

import { useState } from "react";
import ShippingInfo from "./components/ShippingInfo";
import OrderSummary from "./components/OrderSummary";
import styles from "./styles/CheckOutPage.module.css";
import CartProgressIndicator from "../components/CartProgressIndicator";

const steps = [
  { key: "cart", label: "Cart", icon: "🛒" },
  { key: "checkout", label: "Checkout", icon: "📦" },
  { key: "payment", label: "Payment", icon: "💳" },
];
const Checkoutpage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("express");

  const handleMethodChange = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleReturnToCart = () => {
    console.log("Returning to cart");
    // Implement return to cart logic
  };

  return (
    <div className={styles.container}>
      {/* <h1>Checkout</h1> */}
      <CartProgressIndicator steps={steps} currentStep="checkout" />
      <div className={styles.checkoutContent}>
        <ShippingInfo
          userName="Michael Lakers"
          shippingAddress="Ikeja, 25 First Street, Lagos State."
          selectedMethod={selectedMethod}
          onMethodChange={handleMethodChange}
          onReturnToCart={handleReturnToCart}
        />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkoutpage;
