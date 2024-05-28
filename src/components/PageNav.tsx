import { NavLink } from "react-router-dom";
// using NavLink instead of Link to give us the active class in CSS => class='active' which we can use it later to determine which class we have already selected!!
import styles from "./PageNav.module.css";
import { Logo } from "./Logo";

export const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo></Logo>
      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
