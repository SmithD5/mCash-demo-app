import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { withStyles } from "@material-ui/core/styles";


export default function NavBar() {
  const PurpleTextTypography = withStyles({
    root: {
      color: "#6100ad"
    }
  })(Typography);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"white"}} position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#6100ad"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
          
          
          <PurpleTextTypography variant="h6" component="div" style={{fontSize:"3vw"}} sx={{ flexGrow: 1 }} >
            mCash
          </PurpleTextTypography>
          <PurpleTextTypography>

          </PurpleTextTypography>

          <Button style={{color:"#6100ad", fontSize:"1.2vw",border:"0.1vw solid #6100ad"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}