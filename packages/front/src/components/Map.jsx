import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
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
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((item) => (
          <Marker
            key={item.properties.localId}
            position={[
              item.location.coordinates[1],
              item.location.coordinates[0],
            ]}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
