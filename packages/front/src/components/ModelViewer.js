import React from 'react';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain, Ion } from 'cesium';
import { Container, Row } from 'reactstrap';

Ion.defaultAccessToken = process.env.REACT_APP_ACCESS_TOKEN;

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 100);

const ModelViewer = () => (
  <Container>
    <Row>
      <h1>Model Viewer</h1>
    </Row>
    <Row>
    <Viewer
      terrainProvider={terrainProvider}
      className='cesium-container'>
      <Entity position={position} name='Ligne 12 (Porte de Versailles)'>
        <PointGraphics pixelSize={10} />
        <EntityDescription>
          <h1>Auscultation des ouvrages souterrains</h1>
        </EntityDescription>
      </Entity>
    </Viewer>
    </Row>
  </Container>
  )

export default ModelViewer;