import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Components
import About from './components/About';
import Plot from './components/Plot';
import Header from './components/Header';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={4}>
            <Route path="/" exact component={Plot} />
          </Col>
          <Col xs={8}>
            <Route path="/" exact component={ModelViewer} />
          </Col>
          <Route path="/about" component={About} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;