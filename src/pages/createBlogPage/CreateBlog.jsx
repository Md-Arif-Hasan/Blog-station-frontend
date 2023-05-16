import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { createBlog } from "../../services/blogList";
import "./createBlog.css";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../../components/navbarDashBoard/NavbarDashboard";
import { AuthContext } from "../../contexts/Contexts";
import { useContext } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorOrSuccessLine, setErrorOrSuccessLine] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorLineTitle, setErrorLineTitle] = useState("");
  const [errorLineDescription, setErrorLineDescription] = useState("");
  const { checkLoggedIn, loggedInUsername } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!checkLoggedIn()) {
      navigate("/dashboard");
    }
  }, []);

  const submit = async (e) => {
    if (!checkLoggedIn()) {
      navigate("/dashboard");
    }
    e.preventDefault();
    if (validateTitle(title) && validateDescription(description)) {
      const newBlog = {
        title: title,
        description: description,
      };

      try {
        const response = await createBlog(newBlog);
        if (response.status === 201) {
          setErrorOrSuccessLine("Blog successfully creted! ");
          navigate("/dashboard");
        } else {
          setErrorOrSuccessLine(response.data.message);
        }
      } catch (err) {
        setErrorOrSuccessLine("An error occured");
      }
    } else {
      setErrorOrSuccessLine("Please enter all the fields correctly!");
    }
  };

  const validateTitle = (value) => {
    if (value === "") {
      setErrorTitle(true);
      setErrorLineTitle("\u{26A0} TItle is required");
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
    <>
      <NavbarDashboard />
      <div className="page">
        <div className="image">
          <img
            className="logo"
            style={{ width: "120px", height: "auto" }}
            src="/src/assets/blogging.png"
          />
        </div>

        <div className="form">
          <form>
            <TextField
              id="title"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
              error={errorTitle}
              helperText={errorLineTitle}
            />
            <TextField
              id="description"
              className="input"
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              maxRows={7}
              minRows={7}
              multiline
              fullWidth
              variant="outlined"
              error={errorDescription}
              helperText={errorLineDescription}
            />

            <div className="profileButtons">
              <Button variant="contained" className="goBack" onClick={submit}>
                Create
              </Button>
              <Button
                variant="outlined"
                className="save"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
