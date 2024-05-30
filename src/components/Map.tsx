// import { Outlet } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export const Map = () => {
  // another hook provided by react-router-dom => we can use navigate to move to any URL.
  // for example, when i click on any point in the right side of the page(on the map section) => it doesn't matter, what is the current URL => it will change immediately to the following URL path without clicking on any link: http://localhost:5173/app/form
  const navigate = useNavigate();

  // using useSearchParams() to get the lat and lng from URL:
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    // after clicking on any point on the right side of the page(Map section) => the URL path will change immediately to this path without clicking on any link: http://localhost:5173/app/form => this is the navigate function. Something similar to the NavLink but without any declaration!
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position:{lat},{lng}
      </h1>
      <button
        onClick={() => {
          // after clicking on the button, lat and lng coordinates will be updated everywhere in the program and not only here in the map and also in URL.

          // One of the most powerful feature of storing params and query string in URL is that: we can share the URL link in Whatsup or every platforms with other people: http://localhost:5173/app/cities/17806951?lat=23&lng=25 and as a result, they can get the same result in the browser like us when they click on this link!
          setSearchParams({ lat: "23", lng: "25" });
        }}
      >
        Change Position
      </button>
    </div>
  );
};
