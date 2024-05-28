import { NavLink } from "react-router-dom";
// using NavLink instead of Link to give us the active class in CSS => class='active' which we can use it later to determine which class we have already selected!!

export const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};
