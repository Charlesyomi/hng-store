import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.mainHeader}>
      <Navbar />
    </header>
  );
};

export default Header;
