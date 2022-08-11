import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="main">
      {/* <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/act" element={ <Act /> } />
          <Route path="/word" element={ <Word /> } />
          <Route path="/game" element={ <Game /> } />
        </Routes>
      </BrowserRouter> */}

      <App />
    </div>
);