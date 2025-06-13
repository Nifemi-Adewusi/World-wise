/* eslint-disable no-unused-vars */
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { useCities } from "../contexts/Context";
import Button from "./Button";

function Map() {
  const navigate = useNavigate();
  const { cities, currentPosition } = useCities();

  const [position, setPosition] = useState([40, 0] || currentPosition);
  const {
    isLoading: isLoadingPosition,
    getPosition,
    position: geolocationPosition,
  } = useGeolocation();

  useEffect(() => {
    if (geolocationPosition) {
      // console.log(geolocationPosition);
      setPosition(geolocationPosition);
    }
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button
          type="position"
          onClick={() => {
            console.log("Getting current position...");
            getPosition();
          }}
        >
          {isLoadingPosition ? "Loading..." : "Get Current Position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={position}
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
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={position} />
        <DetectClick />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

// Must be outside the Map component
// eslint-disable-next-line react/prop-types
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?${e.latlng.lat},${e.latlng.lng}`);
    },
  });

  return null;
}

export default Map;
