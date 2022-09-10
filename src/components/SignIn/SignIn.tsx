import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';

// export default function SignIn(setUserToken: React.Dispatch<React.SetStateAction<string>>) {
export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userToken = await login({
        username, password
    });

    if (userToken == null) {
        alert("(ノ｀Д)ノ");
    } else {
        // setUserToken(userToken);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={3}>
              <UsernameTextField
                required
                fullWidth
                id="username"
                name="username"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon 
                        fontSize="large"
                        sx={{ color: '#b9a3db' }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <PasswordTextField
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon 
                        fontSize="large"
                        sx={{ color: '#b9a3db' }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                size="large"
                sx={{ mt: 1.2 }}
                style={{ 
                  textTransform: "none",
                  padding: "14px 0px",
                  color: '#b9a3db',
                  borderColor: '#b9a3db'
                }}
              >
                <LoginIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

async function login(credentials: { username: string; password: string; }) {
  return fetch('/api/user/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  }).then(response => {
      if (response.ok) {
          return response.json();
      } else {
          return null;
      }
  })
}

// SignIn.propTypes = {
//   setUserToken: PropTypes.func.isRequired
// }

const UsernameTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
      color: '#b9a3db'
  },
  '& fieldset': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b9a3db',
    },
    '&:hover fieldset': {
      borderColor: '#b9a3db',
    },
    // '&.Mui-focused fieldset': {
    //   borderColor: '#3c005a',
    // },
  },
}));

const PasswordTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    color: '#b9a3db'
  },
  '& fieldset': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b9a3db',
    },
    '&:hover fieldset': {
      borderColor: '#b9a3db',
    },
    // '&.Mui-focused fieldset': {
    //   borderColor: '#3c005a',
    // },
  },
}));