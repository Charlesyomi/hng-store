// components/CartProgressIndicator.tsx

import { Fragment } from "react";
import styles from "../styles/CartProgressIndicator.module.css";

interface Step {
  key: string;
  label: string;
  icon: string;
}

interface CartProgressIndicatorProps {
  steps: Step[];
  currentStep: string;
}

const CartProgressIndicator: React.FC<CartProgressIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className={styles.progressIndicator}>
      {steps.map((step, index) => (
        <Fragment key={step.key}>
          <div
            className={`${styles.step} ${
              step.key === currentStep ? styles.active : ""
            }`}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{step.icon}</span>
            </div>
            <span className={styles.label}>{step.label}</span>
          </div>
          {index < steps.length - 1 && <div className={styles.connector} />}
        </Fragment>
      ))}
    </div>
  );
};

export default CartProgressIndicator;
