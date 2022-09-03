import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('cesiumContainer'));

root.render(<App />);

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept()                    // eslint-disable-line no-undef  
}