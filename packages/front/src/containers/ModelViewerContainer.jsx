import React from "react";
import { ModelViewer } from "../components/ModelViewer";
import { Cartesian3, createWorldTerrain, Ion } from "cesium";

Ion.defaultAccessToken = process.env.REACT_APP_ACCESS_TOKEN;

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 400);

const ModelViewerContainer = () => {
  const name = "Ligne 12 (Porte de Versailles)";
  const pixelSize = 10;
  const description = "Auscultation des ouvrages souterrains";

  return (
    <ModelViewer
      terrainProvider={terrainProvider}
      position={position}
      name={name}
      pixelSize={pixelSize}
      description={description}
    />
  );
};

export default ModelViewerContainer;
