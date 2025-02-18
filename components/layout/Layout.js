import styles from "./layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <header className={styles.header}>
        <Link href="/">
            <h2>Amir car store</h2>
            <p>choose and buy your car easy</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Amir carstore made with 💓 in <a href="https://admin.codegraphyteam.ir/">code graphy team</a></footer>
    </div>
  );
}

export default Layout;
