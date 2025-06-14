/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation";
// import {useUrlPosition} from '../hooks/usePosition'
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
// import {useSearchParams} from 'react-router-dom';
function Map() {
  const navigate = useNavigate();
  // const [lat, lng] = useUrlPosition();
  // console.log(lat)
  const { cities, currentPosition } = useCities();
//  const [searchParams] = useSearchParams();
//  const lat = searchParams.get("lat");
//  const lng = searchParams.get("lng");

// const [newLat, newLng]

const [pos, setPos] = useState([]);

console.log(pos);




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
    // if(lat !==null && lng !==null){
    //   setPosition(coords);
    // }

    if(pos.length){
      setPosition(pos);
    }
  }, [geolocationPosition, pos]);

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
        <DetectClick setPos = {setPos} />
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

function DetectClick({setPos}) {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      console.log(e);
      setPos([e.latlng.lat, e.latlng.lng])
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);

    },
  });

  return null;
}

export default Map;
