import React from 'react';
import ReactDOM from 'react-dom';  // Use 'react-dom' from React 16
import './index.css';
import App from './App.jsx';

// Use ReactDOM.render instead of createRoot for React 16.x
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
