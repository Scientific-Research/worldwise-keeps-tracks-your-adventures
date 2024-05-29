import { CityItem } from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

export const CityList = ({ cities, isLoading }: any) => {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city: any) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
