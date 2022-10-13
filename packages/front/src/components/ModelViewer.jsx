import React from "react";
import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import PropTypes from "prop-types";

export const ModelViewer = ({
  terrainProvider,
  position,
  name,
  pixelSize,
  description,
}) => (
  <Viewer
    baseLayerPicker={false}
    homeButton={false}
    animation={false}
    scene3DOnly={true}
    shadows={true}
    fullscreenButton={false}
    selectionIndicator={false}
    // ! App crashes if infoBox is set
    // infoBox={false}
    terrainProvider={terrainProvider}
    timeline={false}
    className="cesium-container"
  >
    <Entity position={position} name={name}>
      <PointGraphics pixelSize={pixelSize} />
      <EntityDescription>
        <h1>{description}</h1>
      </EntityDescription>
    </Entity>
  </Viewer>
);

ModelViewer.propTypes = {
  terrainProvider: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  pixelSize: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
