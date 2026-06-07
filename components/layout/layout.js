import Link from "next/link";

//Styles
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          Bon Appétit
        </Link>
        <div className={styles.navLinks}>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/categories"}>Categories</Link>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <p>Designed & Developed by Atena Dabagh</p>
      </footer>
    </div>
  );
};
export default Layout;
