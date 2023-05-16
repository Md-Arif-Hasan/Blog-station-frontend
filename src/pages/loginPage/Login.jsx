import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../contexts/Contexts";
import { useContext } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const { checkLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      const loginUser = {
        username: username,
        password: password,
      };
      try {
        const response = await login(loginUser);
        console.log(response);
        if (response.status === 200) {
          navigate("/dashboard");
          console.log(response.data.message);
        } else {
          setError(true);
          setStatus(response.data.message);
        }
      } catch (err) {
        setStatus("An error occured");
      }
    } else {
      setError(true);
      setStatus("Please enter your username and password");
    }
  };
  useEffect(() => {
    if (checkLoggedIn()) {
      navigate("/dashboard");
    }
  }, []);

  const loginStatus = () => {
    return (
      <div
        className="loginStatus"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        <h4>{status}</h4>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="image">
          <img
            className="logo"
            style={{ width: "120px", height: "auto", marginTop: "3rem" }}
            src="src\assets\account.png"
          />
        </div>
        <div className="messages">{loginStatus()}</div>
        <div className="loginForm">
          <form>
            <TextField
              id="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              variant="outlined"
            />
            <TextField
              id="password"
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Password"
              variant="outlined"
            />
            <Button className="button" onClick={submit} variant="contained">
              Login
            </Button>
            <h4 className="loginLine">
              {" "}
              Don't have an account?
              <span>
                <a href="/register" className="signIn">
                  {" "}
                  Sign Up
                </a>
              </span>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}
