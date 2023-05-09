import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../components/Jsx/NavbarDashboard";

function BLogInfo() {
  const [details, setBlogDetails] = useState("");
  const [blogId, setBlogid] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = location.state;

    if (data) {
      console.log(data);

      setTitle(data.title);
      setDescription(data.description);
      setBlogid(data.id);
    }
  }, []);

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
                style={{ width: "70%" }}
              />
            </div>
            <div className="individual">
              <h4>Description</h4>
              <TextField
                id="description"
                label={description === "" ? "Description" : ""}
                variant="outlined"
                value={description}
                multiline
                maxRows={15}
                minRows={15}
                style={{ width: "70%" }}
              />
            </div>
          </form>
        </div>
        <hr style={{ border: "1px solid #e0d8c3" }} />

        {/* <Button
                className="button"
                onClick={() => navigate("/myblogs")}
                variant="outlined"
              >
                Cancel
              </Button>     */}

        <h4>
          <a
            href="/dashboard"
            style={{
              fontSize: "16px",
              color: "#863812",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Go back to Dashboard
          </a>
        </h4>

        <h4>
          <a
            href="/myblogs"
            style={{
              fontSize: "16px",
              color: "#863812",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Go back to my blogs
          </a>
        </h4>
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
