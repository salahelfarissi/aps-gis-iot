import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Components
import About from './components/About';
import Import from './components/Import';
import ScatterPlotContainer from './containers/ScatterPlotContainer';
import Header from './components/Header';
import ModelViewerContainer from './containers/ModelViewerContainer';

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
          <Route path="/import" component={Import} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;