import styles from "./Footer.module.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; Copyright {year} by TheRealChio</p>
    </footer>
  );
}

export default Footer;
