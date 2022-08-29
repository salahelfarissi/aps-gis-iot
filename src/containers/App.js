import React from 'react';
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from 'cesium';
import 'cesium/Widgets/widgets.css';

export default class App extends React.Component {
  render() {
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWM5MTIwMS04M2I2LTQ0MDktYTdiYS1lOTU5OTVhN2QwYWQiLCJpZCI6OTk4OTAsImlhdCI6MTY1Njg3NjYxM30.qE_VIA2pTcJRNilSTTV4C3jZ4REYyutxVObRTr6ov_8';
    const viewer = new Viewer('cesiumContainer', {
      terrainProvider: createWorldTerrain(),
    })

    return (
      <h1>Hello world!</h1>
    )
  }
}