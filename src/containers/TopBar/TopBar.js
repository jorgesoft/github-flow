import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            GitHub Flow Demo 
          </Typography>
          <GitHubIcon edge="end"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
