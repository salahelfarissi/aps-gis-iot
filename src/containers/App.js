import React from 'react';
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from 'cesium';
import 'cesium/Widgets/widgets.css';

function App() {
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNWM5MTIwMS04M2I2LTQ0MDktYTdiYS1lOTU5OTVhN2QwYWQiLCJpZCI6OTk4OTAsImlhdCI6MTY1Njg3NjYxM30.qE_VIA2pTcJRNilSTTV4C3jZ4REYyutxVObRTr6ov_8';

  const viewer = new Viewer('cesiumContainer', {
    terrainProvider: createWorldTerrain(),
  })

  viewer.scene.primitives.add(createOsmBuildings());
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400.0),
    orientation: {
      heading: Math.toRadians(0.0),
      pitch: Math.toRadians(-15.0),
    }
  })

  return viewer
}

// Assign the prototype on the function
App.prototype = Viewer.prototype;

export default App;
