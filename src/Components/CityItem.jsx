/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCities } from "../contexts/Context";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
// import emojiFlags from 'emoji-flags';

// function getFlagEmoji(countryCode) {
//   const country = emojiFlags.countryCode(countryCode.toUpperCase());
//   return country ? country.emoji : '🏳️'; // fallback flag
// }
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
  }).format(new Date(date));

// function getFlagEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split('')
//     .map(char => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

const mimicStyles = {
  display: "flex",
  // borderLeftColor:"2px solid green"
  // borderColor:"2px solid green"
  marginBottom: "3px",
  borderLeft: "5px solid green",
  textDecoration: "none",
  backgroundColor: "#2C2D2D",
  padding: "5px",
};

const emojiStyle = {
  marginLeft: "4px",
  color: "white",
};

const countryName = {
  marginLeft: "15px",
  marginTop: "3px",
  textDecoration: "none",
  color: "white",
};
const deleteBtn = {
  marginTop: "2px",
  marginLeft: "2px",
};

const dateStyles = {
  color: "white",
};

function CityItem({ city }) {
  const { deleteCity, setCurrentCity, currentCity, setCurrentPosition } =
    useCities();
  // console.log(city)
  const { cityName, country, date, emoji, position, id } = city;
  console.log(city);
  const { lat, lng } = position;
  console.log(lat, lng);
  return (
    <li
      onClick={() => {
        setCurrentCity(city);
        setCurrentPosition([lat, lng]);
      }}
    >
      <Link
        to={`${id}?lat=${lat}&lng=${lng}`}
        style={mimicStyles}
        className={`${styles.CityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
      >
        <span style={emojiStyle} className={styles.emoji}>
          {emoji}
        </span>
        <h3 style={countryName} className={styles.name}>
          {cityName}
        </h3>
        <time style={dateStyles} className={styles.date}>
          {formatDate(date)}{" "}
        </time>
        <button
          style={deleteBtn}
          onClick={(e) => {
             e.preventDefault();
             deleteCity(id);
          }}
          className={styles.deleteBtn}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}
export default CityItem;
