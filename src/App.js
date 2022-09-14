import React from 'react';
import About from './components/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" exact component={ModelViewer} />
        <Route path="/about" component={About} />
      </main>
    </Router>
  );
}

export default App;