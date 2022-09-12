import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import SignIn from './Components/SignIn/SignIn';
import Act from './Components/Act/Act';
import Word from './Components/Word/Word';
import Game from './Components/Game/Game';
import useToken from './useToken';

import './App.css';

function App() {
  const { token, setToken } = useToken();

  console.log(token);
  if (!token) {
    return <SignIn setToken={setToken} />
  }

  return (
    <div className="App">
      <Nav />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/act" element={<Act />} />
          <Route path="/word" element={<Word />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
