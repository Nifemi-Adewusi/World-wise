import styles from "./CountryItem.module.css";
/* eslint-disable react/prop-types */
function CountryItem({ country }) {
  console.log(country)
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
