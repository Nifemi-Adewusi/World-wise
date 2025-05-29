/* eslint-disable no-unused-vars */
import styles from './Map.module.css'
import {useSearchParams, useNavigate} from "react-router-dom"
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className = {styles.mapContainer} onClick = {()=> navigate("form")}>
      <h2>Map Component</h2>
      <h1>Position:{lat}:{lng}</h1>
    </div>
  );
}
export default Map;
