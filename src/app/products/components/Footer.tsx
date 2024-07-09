"use client";

import styles from "../styles/Footer.module.css";
import paypalIcon from "/public/icons/paypal.svg";
import americanExpress from "/public/icons/american-express.svg";
import visaIcon from "/public/icons/visa.svg";
import masterCardIcon from "/public/icons/master-card.svg";
import Image from "next/image";

// components/Footer.tsx
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Signing up with email:", email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.topSectionContainer}>
            <div className={styles.column}>
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>blog</li>
                <li>returns</li>
                <li>order status</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Info</h3>
              <ul>
                <li>How it works?</li>
                <li>our promises</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Contact us</h3>
              <p className="flex gap-2">
                <span>
                  <Image
                    src="/icons/location.svg"
                    alt=""
                    width={20}
                    height={20}
                  />{" "}
                </span>
                123 Field Street Lagos
              </p>
              <p className="flex gap-2">
                <span>
                  <Image
                    src="/icons/call-calling.svg"
                    alt=""
                    width={20}
                    height={20}
                  />{" "}
                </span>
                <a href="tel:+234 70458577+++" className="block">
                  +234 70458577+++
                </a>
              </p>
              <p className="flex gap-2">
                <span>
                  <Image
                    src="/icons/sms-edit.svg"
                    alt=""
                    width={20}
                    height={20}
                  />{" "}
                </span>
                <a href="mailto:hngstore@gmail.com" className="block">
                  hngstore@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.column}>
              <h3>Sign up for News and updates</h3>
              <form onSubmit={handleSubmit} className={styles.signupForm}>
                <div className={styles.inputWrapper}>
                  <Image
                    src="/icons/user-footer.svg"
                    alt="User"
                    width={20}
                    height={20}
                  />
                  <input
                    type="email"
                    placeholder="E-mail Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  →
                </button>
              </form>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="Facebook">
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="Twitter">
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="YouTube">
                  <Image
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
            <div className={styles.columnLast}>
              <button className="p-3 rounded-full bg-blue-400">
                <Image
                  src="/icons/message-question.svg"
                  alt="Send us a Question"
                  width={20}
                  height={20}
                />
              </button>
              <button className="p-3 rounded-full bg-blue-400">
                <Image
                  src="/icons/arrow-up.svg"
                  alt="Send us a Question"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          <div className={styles.paymentMethods}>
            <Image src={visaIcon} alt="Visa" width={40} height={24} />
            <Image
              src={masterCardIcon}
              alt="Mastercard"
              width={40}
              height={24}
            />
            <Image
              src={americanExpress}
              alt="American Express"
              width={40}
              height={24}
            />
            <Image src={paypalIcon} alt="PayPal" width={40} height={24} />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomSectionContainer}>
            <p>© 2024 HNG Store</p>
            <div className={styles.legalLinks}>
              <a href="#">Cookie settings</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Imprint</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
