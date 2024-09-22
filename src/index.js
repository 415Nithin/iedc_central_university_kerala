import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing the App component
import './components/styles.css'; // Importing the global styles

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);
