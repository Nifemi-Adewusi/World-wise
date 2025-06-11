/* eslint-disable no-unused-vars */
import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup,useMap } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/Context";
function Map() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const mapLat = searchParams.get("lat");
  // const mapLng = searchParams.get("lng");
  // console.log(mapLat, mapLng);
  const [position, setPosition] = useState([40, 0]);
  const { cities, currentPosition } = useCities();
  console.log(currentPosition);
  console.log(cities);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        className={styles.map}
        center={currentPosition}
        // center={currentPosition}
        zoom={10}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position = {currentPosition}/>
      </MapContainer>
    </div>
  );
}
/* eslint-disable react/prop-types */
function ChangeCenter({position}){
  const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick(){
  const navigate = useNavigate();

  useMapEvents({
    click:(e)=>navigate("form")
  })
}
export default Map;
