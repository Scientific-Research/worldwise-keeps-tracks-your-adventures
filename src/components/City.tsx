import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date: string | number | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // useParams as custom react hook gives us the id of every city! when we don't destrcut it, it would be in string format, otherwise it would be in integer format!
  const { id } = useParams();
  // console.log(id);

  // using useSearchParams() to get the lat and lng from URL: we can use it everywhere in the program to get the lat and lng from URL, without defining an extra piece of state and pass it to other components as props! searchParams is like a state variable but it is not, it is just a built-in element in react-router-dom and we can not pass it as props to other components, rather we have to repeat it anywhere when we need it. It is something like Context API...
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <>
      <h1>CITY ID: {id}, </h1>
      <h3>
        position:{lat},{lng}
      </h3>
    </>
  );

  // return (
  //   <div className={styles.city}>
  //     <div className={styles.row}>
  //       <h6>City name</h6>
  //       <h3>
  //         <span>{emoji}</span> {cityName}
  //       </h3>
  //     </div>

  //     <div className={styles.row}>
  //       <h6>You went to {cityName} on</h6>
  //       <p>{formatDate(date)}</p>
  //     </div>

  //     {notes && (
  //       <div className={styles.row}>
  //         <h6>Your notes</h6>
  //         <p>{notes}</p>
  //       </div>
  //     )}

  //     <div className={styles.row}>
  //       <h6>Learn more</h6>
  //       <a
  //         href={`https://en.wikipedia.org/wiki/${cityName}`}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Check out {cityName} on Wikipedia &rarr;
  //       </a>
  //     </div>

  //     <div>{/* <ButtonBack /> */}</div>
  //   </div>
  // );
}

export default City;
