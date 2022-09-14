import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain, Ion } from 'cesium';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';

Ion.defaultAccessToken = process.env.ACCESS_TOKEN;

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 100);

function App() {
  return (
    <Router>
      <Header />
      <Viewer full terrainProvider={terrainProvider}>
        <Entity position={position} name='Ligne 12 (Porte de Versailles)'>
          <PointGraphics pixelSize={10} />
          <EntityDescription>
            <h1>Auscultation des ouvrages souterrains</h1>
          </EntityDescription>
        </Entity>
      </Viewer>
    </Router>
  );
}

export default App;