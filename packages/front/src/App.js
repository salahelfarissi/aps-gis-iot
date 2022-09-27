import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Components
import About from './components/About';
import ImportDataContainer from './containers/ImportDataContainer';
import ScatterPlotContainer from './containers/ScatterPlotContainer';
import Header from './components/Header';
import ModelViewerContainer from './containers/ModelViewerContainer';
import Forge from './components/Forge';

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={4}>
            <Route path="/" exact component={ScatterPlotContainer} />
          </Col>
          <Col xs={8}>
            <Route path="/" exact component={ModelViewerContainer} />
          </Col>
          <Route path="/about" component={About} />
          <Route path="/import" component={ImportDataContainer} />
        </Row>
      </Container>
      <Route path="/forge/oauth" component={Forge} />
    </Router>
  );
}

export default App;