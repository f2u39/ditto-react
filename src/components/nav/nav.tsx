import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import History from '@mui/icons-material/History';
import Bookmarks from '@mui/icons-material/Bookmarks';
import VideoGameAsset from '@mui/icons-material/VideogameAsset';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          {/* <Themes /> */}

          <Typography sx={{ flexGrow: 1 }} />

          <Link to="/game">
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <VideoGameAsset  sx={{ fontSize: 30, color: "slateblue" }} />
            </IconButton>
          </Link>

          <Link to="/word">
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Bookmarks  sx={{ fontSize: 30, color: "cadetblue" }} />
            </IconButton>
          </Link>

          <Link to="/act">
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <History  sx={{ fontSize: 30, color: "darkorange" }} />
            </IconButton>
          </Link>
          
          {/* <Button color="inherit"><VideoGameAsset style={{ color: "slateblue" }} /></Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
