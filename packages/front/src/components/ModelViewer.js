import React from 'react';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrain, Ion } from 'cesium';
import { Container, Row, Col } from 'reactstrap';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-strict-dist-min';

Ion.defaultAccessToken = process.env.REACT_APP_ACCESS_TOKEN;

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(2.2851128, 48.8305753, 100);

const Plot = createPlotlyComponent(Plotly);

const ModelViewer = () => (
  <Container className='mt-3'>
    <Row>
      <Col className='col-4 d-flex align-items-center'>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        />
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