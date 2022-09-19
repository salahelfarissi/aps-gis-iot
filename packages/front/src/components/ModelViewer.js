import React from 'react';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain, Ion } from 'cesium';
import { Container, Row, Col } from 'reactstrap';

Ion.defaultAccessToken = process.env.REACT_APP_ACCESS_TOKEN;

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 100);

const ModelViewer = () => (
  <Container className='mt-3'>
    <Row>
      <Col className='col-4 d-flex align-items-center'>
        <h1 className='text-center mt-1'>Ligne 12 (Porte de Versailles)</h1>
      </Col>
      <Col className='col-8'>
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
      </Col>
    </Row>
  </Container>
)

export default ModelViewer;