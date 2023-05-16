import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { TextField, Button } from "@mui/material";
import "../profilePage/profile.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Contexts";
import { editBlog } from "../../services/blogList";
import NavbarDashboard from "../../components/navbarDashBoard/NavbarDashboard";

function BLogInfo() {
  const [details, setBlogDetails] = useState("");
  const [blogId, setBlogid] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { loggedInUsername } = useContext(AuthContext);
  const [username, setUsername] = useState(loggedInUsername);
  const [errorOrSuccessLine, setErrorOrSuccessLine] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorLineTitle, setErrorLineTitle] = useState("");
  const [errorLineDescription, setErrorLineDescription] = useState("");

  useEffect(() => {
    const data = location.state;
    setTitle(data.title);
    setDescription(data.description);
    setBlogid(data.id);
  }, []);

  async function getBlogDetails() {
    const newBlog = {
      title: title,
      description: description,
    };

    if (validateTitle(title) && validateDescription(description)) {
      try {
        let details = await editBlog(blogId, newBlog);
        if (details.status === 200) {
          setBlogDetails(details.data);
          navigate(`/blogs/users/${username}`);
        } else {
          setErrorOrSuccessLine(response.data.message);
        }
      } catch (err) {
        setErrorOrSuccessLine("An error occured");
      }
    }
  }

  const validateTitle = (value) => {
    if (value === "") {
      setErrorTitle(true);
      setErrorLineTitle("\u{26A0} Title is required");
      return false;
    }
    setErrorTitle(false);
    setErrorLineTitle("");
    return true;
  };

  const validateDescription = (value) => {
    if (value === "") {
      setErrorDescription(true);
      setErrorLineDescription("\u{26A0} Description is required");
      return false;
    }
    setErrorDescription(false);
    setErrorLineDescription("");
    return true;
  };

  return (
    <div className="userInfoWrapper">
      <div className="info">
        <div className="infoForm">
          <form>
            <div className="individual">
              <h4>Title</h4>
              <TextField
                id="title"
                label={title === "" ? "Title" : ""}
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "70%" }}
                error={errorTitle}
                helperText={errorLineTitle}
              />
            </div>
            <div className="individual">
              <h4>Description</h4>
              <TextField
                id="description"
                label={description === "" ? "Description" : ""}
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                value={description}
                multiline
                maxRows={20}
                minRows={20}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "70%" }}
                error={errorDescription}
                helperText={errorLineDescription}
              />
            </div>
          </form>
        </div>
        <hr style={{ border: "1px solid #e0d8c3" }} />

        <Button
          variant="contained"
          className="save"
          onClick={(e) => getBlogDetails()}
        >
          Update Blog
        </Button>
      </div>
    </div>
  );
}

export default function EditBlog() {
  const [selectedOption, setSelectedOption] = useState("BLogInfo");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <NavbarDashboard />
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "#EBE4D2", p: 3, margin: "auto" }}
        >
          <Toolbar />
          {selectedOption === "BLogInfo" ? <BLogInfo /> : null}
        </Box>
      </Box>
    </>
  );
}
