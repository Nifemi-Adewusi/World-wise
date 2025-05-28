/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './CityItem.module.css'
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
    display:"flex",
    // borderLeftColor:"2px solid green"
    // borderColor:"2px solid green"
    marginBottom:"3px",
    borderLeft: "5px solid green"
  }

  const emojiStyle = {
    marginLeft:"4px"
  }

  const countryName = {
    marginLeft: "15px",
    marginTop: "3px",
  }
const deleteBtn = {
  marginTop:"2px",
  marginLeft:"2px"
}


function CityItem({ city, deleteCity }) {
  // console.log(city)
  const {cityName, country, date, emoji, position, id} = city;
 console.log(city)
  const {lat, lng} = position;
  // console.log(lat, lng)
  return <li style = {mimicStyles} className = {styles.CityItem}>
    <span style = {emojiStyle}   className={styles.emoji}>{emoji}</span>
    <h3 style = {countryName} className = {styles.name}>{cityName}</h3>
    <time className = {styles.date}>{formatDate(date)} </time>
    <button style = {deleteBtn} onClick = {()=> deleteCity(id)} className = {styles.deleteBtn}>&times;</button>
  </li>;
}
export default CityItem;