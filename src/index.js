import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('cesiumContainer'));

root.render(<App />);
