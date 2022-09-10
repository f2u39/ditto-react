import React, { useState } from 'react';
import logo from './logo.svg';
import Grid from '@mui/material/Grid';
import Themes from './components/Themes/Themes';
import Nav from './components/Nav/Nav';
import Login from './components/login/login';
import SignIn from './components/SignIn/SignIn';

import './App.css';

function App() {
  // Login
  const [userToken, setUserToken] = useState("");
  if (!userToken) {
    return <SignIn setUserToken={ setUserToken } />
  } else {
    return (
      <div className="App">
        {/* <Nav /> */}
      </div>
    );
  }
}

export default App;
