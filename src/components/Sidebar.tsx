import { Outlet } from "react-router-dom";
import { AppLayoutNav } from "./AppLayoutNav";
import { Logo } from "./Logo";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppLayoutNav />

      {/* we use outlet to show all the nested Routes here: http://localhost:5173/app/countries  */}
      {/* we use outlet to show all the nested Routes here: http://localhost:5173/app/cities  */}
      {/* we use outlet to show all the nested Routes here: http://localhost:5173/app/form  */}
      {/* Outlet is something like children but with a difference: children is a prop and Outlet is a Route */}
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Maximilian Karimi
        </p>
      </footer>
    </div>
  );
};
