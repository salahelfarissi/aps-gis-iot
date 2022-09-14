import React from "react";
import { Container } from "reactstrap";

export default function About() {
  return (
    <Container>
      <h1>About</h1>
      <p>
        This is a React app that uses the{" "}
        <a href="https://cesium.com/">CesiumJS</a> library to render a 3D geospatial models
        on web-enabled devices.
      </p>
    </Container>
  );
}
