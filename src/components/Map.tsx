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
      {/* <Outlet /> */}
    </div>
  );
};
