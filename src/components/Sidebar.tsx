import { AppLayoutNav } from "./AppLayoutNav";
import { Logo } from "./Logo";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppLayoutNav />

      <p>List of cities</p>
    </div>
  );
};
