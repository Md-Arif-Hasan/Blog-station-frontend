import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../components/navbarDashBoard/NavbarDashboard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function BLogInfo() {
  const [blogId, setBlogid] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = location.state;
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setBlogid(data.id);
    }
  }, []);

  return (
    <div className="userInfoWrapper">
      <div>
        <div className="infoForm">
          <Card className="blogCards">
            <CardContent style={{ overflowWrap: "break-word" }}>
              <hr style={{ border: "10px solid #e0d8c3" }} />
              <Typography
                variant="h5"
                component="div"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#863812",
                }}
              >
                {title}
              </Typography>
              <hr style={{ border: "10px solid #e0d8c3" }} />
              <Typography
                variant="h5"
                component="div"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "italic",
                  color: "#25383C",
                }}
              >
                {description}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <hr style={{ border: "3px solid #e0d8c3" }} />

        <h4>
          <a
            onClick={(e) => navigate(-1)}
            style={{
              fontSize: "27px",
              color: "#863812",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Go back 
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
