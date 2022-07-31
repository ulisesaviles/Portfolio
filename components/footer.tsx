// Styles
import styles from "../styles/components/Footer.module.css";

// Icons
import { IoArrowUp } from "react-icons/io5";

// React componentn
const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>Copyright © 2022 Ulises Aviles</p>
      <button
        className={styles.goToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll to top <IoArrowUp className={styles.arrow} />
      </button>
    </footer>
  );
};

export default Footer;
