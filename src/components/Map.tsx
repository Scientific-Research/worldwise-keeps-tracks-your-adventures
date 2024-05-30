// import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export const Map = () => {
  // using useSearchParams() to get the lat and lng from URL:
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
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
