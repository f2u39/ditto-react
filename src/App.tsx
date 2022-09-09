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
  // if (!userToken) {
  //   return <Login setUserToken={ setUserToken } />
  // }
  return (
    // <SignIn />
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <SignIn />
      </Grid>   
    </Grid> 
  );

  return (
    <div className="App">
      {/* <Nav /> */}
    </div>
  );
}

export default App;
