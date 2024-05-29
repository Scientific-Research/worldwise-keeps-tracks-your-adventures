import { CityItem } from "./CityItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export const CountryList = ({ cities, isLoading }: any) => {
  if (isLoading) return <Spinner />;
  // if (!cities.length) throw new Error("There is no city to disiplay!"); // only display on console!
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map!" />
    );

  return (
    <ul className={styles.countryList}>
      {cities.map((city: any) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
