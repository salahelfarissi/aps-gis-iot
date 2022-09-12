import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain, Ion } from 'cesium';
import React from 'react';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNWM3NTk1Mi1hMTc5LTQ2NGUtODU4Ny1jODcwNmNmMjYzOTgiLCJpZCI6ODM0OTUsImlhdCI6MTY2Mjk4NjQzNn0.Pt87ii8UUSPnrgp2ngk1f1ELd2eHVWnE1rRhJ7PU4e0';

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 100);

function App() {
  return (
  <Viewer full terrainProvider={terrainProvider}>
    <Entity position={position} name='Ligne 12 (Porte de Versailles)'>
      <PointGraphics pixelSize={10} />
      <EntityDescription>
        <h1>Auscultation des ouvrages souterrains</h1>
      </EntityDescription>
    </Entity>
  </Viewer>
  );
}

export default App;