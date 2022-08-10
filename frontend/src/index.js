import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Nav from "./components/Nav/Nav"
import Act from "./components/Act";
import Word from "./components/Word";
import Game from "./components/Game";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/act" element={ <Act /> } />
          <Route path="/word" element={ <Word /> } />
          <Route path="/game" element={ <Game /> } />
        </Routes>
      </BrowserRouter>
    </div>
);