import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { TextField, Button } from "@mui/material";
import "../Styles/profile.css"
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { editBlog} from "../../services/blogList";
import NavbarDashboard from "../../components/Jsx/NavbarDashboard";


function BLogInfo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setBlogDetails] = useState("");



  useEffect(() => {
 
    async function getBlogDetails() {
      let details = await editBlog(blogId);
      setBlogDetails(details.data);
      setTitle(details.data.title);
      setDescription(details.data.description);
    }
    getBlogDetails();
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
              <h4>Title</h4>
              <TextField
                id="title"
                label={title === "" ? "Username" : ""}
                variant="standard"
                InputProps={{ readOnly: true }}
                InputLabelProps={{ shrink: false }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div className="individual">
              <h4>Description</h4>
              <TextField
                id="description"
                label={description === "" ? "Email" : ""}
                variant="standard"
                InputProps={{ readOnly: true }}
                InputLabelProps={{ shrink: false }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default function EditBlog() {

  const [selectedOption, setSelectedOption] = useState("BLogInfo");

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
        {selectedOption === "BLogInfo" ? (<BLogInfo />) : null}
      </Box>
    </Box>
</>
  );
}