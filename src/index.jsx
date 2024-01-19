import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import Header from './Header';

const container = document.getElementById('root');

// root es la raiz de la aplicacion que se monta en el div#root
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
