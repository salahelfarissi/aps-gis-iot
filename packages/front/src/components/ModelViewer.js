import React from 'react';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain, Ion } from 'cesium';

Ion.defaultAccessToken = process.env.REACT_APP_ACCESS_TOKEN;

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 100);

const ModelViewer = () => {
  return (
    <Viewer
      terrainProvider={terrainProvider}
      style={{
        position: "absolute",
        top: 95,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      <Entity position={position} name='Ligne 12 (Porte de Versailles)'>
        <PointGraphics pixelSize={10} />
        <EntityDescription>
          <h1>Auscultation des ouvrages souterrains</h1>
        </EntityDescription>
      </Entity>
    </Viewer>
  )
}

export default ModelViewer;