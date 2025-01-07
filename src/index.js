import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this points to the correct App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);