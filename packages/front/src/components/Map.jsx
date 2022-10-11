import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

const Map = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/FROST-Server/v1.1/Things(3)/Locations")
      .then((res) => {
        setData(res.data.value);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <MapContainer
        center={[48.8305753, 2.2851128]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.8305753, 2.2851128]}>
          <Popup>Ligne 12 (Porte de Versailles).</Popup>
        </Marker>
      </MapContainer>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.properties.localId}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Map;
