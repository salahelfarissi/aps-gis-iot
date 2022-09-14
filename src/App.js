import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <ModelViewer />
      </main>
    </Router>
  );
}

export default App;