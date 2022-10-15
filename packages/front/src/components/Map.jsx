import React, { useEffect, useRef } from "react";
import L from "leaflet";

const Map = () => {
  // Create the map ref:
  const mapRef = useRef(null);
  // Create the tile ref:
  const tileRef = useRef(null);

  // Create our map tile layer:
  tileRef.current = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  // Define the styles that are to be passed to the map instance:
  const mapStyles = {
    overflow: "hidden",
    width: "100%",
    height: "52vh",
  };

  // Define an object literal with params that will be passed to the map:
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [37.0902, -95.7129],
      zoom: 3,
      zoomControl: false,
      maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
      layers: [tileRef.current],
    });
  }, []);

  // Add controls:
  useEffect(() => {
    // Create the zoom control:
    L.control
      .zoom({
        position: "topright",
      })
      .addTo(mapRef.current); // Add the control to our map instance
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/sta-map@latest/dist/stam.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Use mapRef.current to add map event listeners to
    // our map instance:
    mapRef.current.on("zoomstart", () => {
      console.log("ZOOM STARTED");
      console.log(window);
    });
  }, []);

  L.stam({
    baseUrl:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  });

  return (
    <>
      <div id="map" style={mapStyles}></div>
    </>
  );
};

export default Map;
