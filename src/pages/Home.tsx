// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageNav } from "../components/PageNav";

export const Home = () => {
  return (
    <>
      <PageNav />
      <h1>WorldWise</h1>
      {/* the below a href will reload the whole page and therefore, this is not what we want as SPA => Single Page Application! that's why i comment it out and i use the Link from react-router-dom instead! */}
      {/* <a href="/pricing">go to Pricing Page!</a> */}

      {/* Using Link to go to the Pricing page without loading the whole page! => making this as SPA => Single Page Application*/}
      <Link to="/appLayout">Go to the App Layout</Link>
    </>
  );
};
