// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";
import Button from "./Button";
import { BackButton } from "./BackButton";
import { useUrlPosition } from "../hooks/usePosition";
import Message from "./Message";
import Spinner from "./Spinner";
import {useCities} from '../contexts/Context.jsx';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {}
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?";

function Form() {
  const [lat, lng] = useUrlPosition();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [error, setError] = useState("");
  const {createCity} = useCities();

  // function preventDefaultandNavigate(e){
  //   console.log("Working Ish")
  //   e.preventDefault();
  //   navigate(-1);
  // }

  function handleSubmit(e){
    e.preventDefault();
    if(!cityName || !date) return;
    const newCity = {
      cityName, 
      country,
      date,
      notes,
      position: {lat, lng}
    }
    // console.log(newCity)
    createCity(newCity)
  }
  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setIsLoadingGeoCoding(true);
          const res = await fetch(
            `${BASE_URL}latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);
          if (!data.countryCode) {
            throw new Error(
              "That Doesn't seem to be a city, please click somewhere else"
            );
          }
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        } finally {
          setIsLoadingGeoCoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (error) {
    return <Message message={error} />;
  }
  if (isLoadingGeoCoding) {
    return <Spinner />;
  }
  if (!lat && !lng) {
    return <Message message="Click on the map to add a new city" />;
  }

  return (
    <form className={styles.form} onSubmit = {handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker onChange= {date=> setDate(date)} selected = {date} dateFormat="dd/MM/yy" />
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
        {/* <button>Add</button> */}
        <Button type="primary">Add</Button>
        {/* <button>&larr; Back</button> */}
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
