import { AppLayoutNav } from "./AppLayoutNav";
import { Logo } from "./Logo";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppLayoutNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Maximilian Karimi
        </p>
      </footer>
    </div>
  );
};
