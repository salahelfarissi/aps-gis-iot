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
      <Header />
      <Route path="/about" component={About} />
      <Container fluid>
        <Row>
          <Col>
            <Route path="/" exact component={Forge} />
          </Col>
          <Col>
            <Route path="/" exact component={ModelViewerContainer} />
          </Col>
          <Route path="/import" component={ImportDataContainer} />
        </Row>
        <Row style={{ height: '40vh' }}>
          <Route path="/" exact component={ScatterPlotContainer} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;