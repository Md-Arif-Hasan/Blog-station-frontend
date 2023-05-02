import "../Styles/homepage.css";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <img
                className="logo"
                src="src\assets\blogging.png"
                onClick={(e)=> navigate('../')}
              />

          <Button color="inherit"> <b> <a href="./dashboard" className="navSign"> Dashboard </a> </b></Button>

          <Button color="inherit"> <b> <a href="./register" className="navSign"> Signup </a> </b></Button>
          <Button color="inherit"><b>  <a href="./login" className="navSign"> Login</a></b></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default function Home() {
  
  return (
    <>
      <ButtonAppBar/>

      <div className="container">
        <h1 className="title">Blog Station</h1>
        <p>
        A blog, short for weblog, is a frequently updated web page used for personal commentary or business content.
        </p>
        <a href="./login">
        Login & Start your journey with us!
        </a>
      </div>

      <div className="blank-1">
        <div className="left-line">
          <h2 style={{ fontSize: '2.5rem', marginTop: '0rem' }}> Happy Blogging...</h2>
        
        </div>
      
      </div>
      </>
  );
}