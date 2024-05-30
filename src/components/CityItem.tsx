import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date: string | number | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
  }).format(new Date(date));

export const CityItem = ({ city }: any) => {
  const { cityName, emoji, date, id, position } = city;

  // Add the position of a city(Latitude and Longitude) as a query string to URL: after bring the lat and lng to the URL, you can access them everywhere in the Program as global query variables using fetch method.

  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
