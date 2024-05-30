import CountryItem from "./CountryItem";
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

  // get countries but as unique countries: we take the cities as array with empty initial value, and then loop through this array, when country in this array is not still included, this will be included and when this country is already included in this array, it will not be added in this array anymore and we will have the last array with the unique countries inside it at the end!
  const countries = cities.reduce((arr: any, city: any) => {
    if (!arr.map((el: any) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  // console.log("countries " + countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country: any, i: any) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
};
