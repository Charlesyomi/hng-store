import type { Metadata } from "next";
import styles from "./styles/Layout.module.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
