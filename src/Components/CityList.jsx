/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
// import { useContext } from "react";
import { useCities } from "../contexts/Context";

function CityList() {
  const { cities, isLoading, deleteCity } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) {
    return <Message message="No Cities Yet" />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
