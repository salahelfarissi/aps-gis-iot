import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Components
import About from './components/About';
import ImportDataContainer from './containers/ImportDataContainer';
import ScatterPlotContainer from './containers/ScatterPlotContainer';
import Header from './components/Header';
// import ModelViewerContainer from './containers/ModelViewerContainer';
import Forge from './components/Forge';
import Map from './components/Map';
import SceneViewer from './components/SceneViewer';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/about" component={About} />
      <Route path="/import" component={ImportDataContainer} />
      <Route path="/map" component={Map} />
      <Container fluid>
        <Row>
          <Col>
            <Route path="/" exact component={Forge} />
          </Col>
          <Col>
            {/* <Route path="/" exact component={ModelViewerContainer} /> */}
            <Route path="/" exact component={SceneViewer} />
          </Col>
        </Row>
        <Row style={{ height: '40vh' }}>
          <Route path="/" exact component={ScatterPlotContainer} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;