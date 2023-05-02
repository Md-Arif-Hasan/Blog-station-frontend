import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { TextField, Button } from "@mui/material";
import "../Styles/profile.css"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getUserByUsername, updateUserByUsername } from "../../services/user";
import NavbarDashboard from "../../components/Jsx/NavbarDashboard";


function UserInfo() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userdetails, setUserDetails] = useState("");


  useEffect(() => {
    let cookie = Cookies.get("jwt");

    let { username } = jwt_decode(cookie);
    async function getUserDetails() {
      let details = await getUserByUsername(username);
      setUserDetails(details.data);
      setUsername(details.data.username);
      setEmail(details.data.email);
    }
    getUserDetails();
  }, []);


  
  return (

    <div className="userInfoWrapper">
      <div className="profilePicWrap">
        <img
          src="src\assets\man.png"
          alt="profile"
          className="profilePic"
        />
      </div>
      <div className="info">
        <div className="infoForm">
          <form>
          
            <div className="individual">
              <h4>Username</h4>
              <TextField
                id="username"
                label={username === "" ? "Username" : ""}
                variant="standard"
                InputProps={{ readOnly: true }}
                InputLabelProps={{ shrink: false }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div className="individual">
              <h4>Email</h4>
              <TextField
                id="email"
                label={email === "" ? "Email" : ""}
                variant="standard"
                InputProps={{ readOnly: true }}
                InputLabelProps={{ shrink: false }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
          </form>
        </div>
        <hr style={{border: '1px solid #e0d8c3'}} />

      </div>
    
    </div>
  );
}

export default function Profile() {

  const [selectedOption, setSelectedOption] = useState("userInfo");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  return (

    <>
    <NavbarDashboard/>  

    <Box sx={{ display: "flex" }}>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#EBE4D2", p: 3, margin: "auto" }}
      >
        <Toolbar />
        {selectedOption === "userInfo" ? (<UserInfo />) : null}
      </Box>
    </Box>
</>
  );
}