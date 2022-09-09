import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Temp from './components/temp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/act" element={ <Temp /> } />
        <Route path="/word" element={ <Temp /> } />
        <Route path="/game" element={ <Temp /> } />
      </Routes>
    </BrowserRouter>

    <App />
  </React.StrictMode>
);

reportWebVitals();
