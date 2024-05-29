import styles from "./AppLayoutNav.module.css";
import { NavLink } from "react-router-dom";

// to switch between different nested Routes => diffrent URLs, we use the following NavLinks:
export const AppLayoutNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};
