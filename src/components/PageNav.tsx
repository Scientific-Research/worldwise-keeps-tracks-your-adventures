import { Link } from "react-router-dom";

export const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="*">Page Not Found</Link>
        </li>
      </ul>
    </nav>
  );
};
