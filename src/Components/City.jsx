/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./City.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/Context";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { BackButton } from "./BackButton";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  // const { id } = X;
  const { getCity, currentCity, isLoading } = useCities();
  console.log(currentCity);
  // const [searchParam, setSearchParam] = useSearchParams();
  // const lat = searchParam.get("lat");
  // const lng = searchParam.get("lng");

  // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  // useEffect(
  //   function () {
  //     getCity(id);
  //   },
  //   [id]
  // );

  const { cityName, emoji, date, notes } = currentCity;
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
    // <>

    // <h1>City {id}</h1>
    // <h2>{lat}:{lng}</h2>
    // </>
  );
}

export default City;
