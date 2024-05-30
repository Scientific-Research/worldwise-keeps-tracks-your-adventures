// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from "react";

import styles from "./Form.module.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode: any) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char: { charCodeAt: () => number }) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate(); // it was called as useHistory() in previous version of react!

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toUTCString());
  // const [date, setDate] = useState(new Date().toISOString());
  // const [date, setDate] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        {/* we don't use the regular HTML button, rather, we use the self-defined button which is already definded in Button.tsx - using Button, we dynamically assign the type of the button using type prop string like primary, back */}
        <Button type="primary">Add</Button>
        {/* we have to define the number of steps we want to go back to the browser history:      -1 means we navigate back in the Browser history
        +1 or 1 means navigate forward in the Browser hsitory 
        or we can set the step as 2 or more but it used normally for back Navigation*/}
        <Button
          type="back"
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault(); // to prevent the form from relaoding when i click on the Back Button!
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
        {/* <button>Add</button>
        <button>&larr; Back</button> */}
      </div>
    </form>
  );
}

export default Form;
