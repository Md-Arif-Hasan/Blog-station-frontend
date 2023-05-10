import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react"
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/contexts";

 import Cookies from "js-cookie";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { loggedInUsername } = useContext(AuthContext);
  const [username, setUsername] = useState(loggedInUsername);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const logoutUser = async () => {
    try {
      Cookies.remove("jwt");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog Station
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="navbar navbar-dark bg-dark"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="left"
                  variant="body1"
                  sx={{ padding: 0, fontSize: "14px" }}
                  onClick={(e) => navigate("/dashboard")}
                >
                  {" "}
                  Blogs
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{ padding: 0 }}
                  onClick={(e) => navigate("/registeredusers")}
                >
                  Authors
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{ padding: 0 }}
                  onClick={(e) => navigate("/blogs/create")}
                >
                  Create Blog
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog Station
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={(e) => navigate("/registeredusers")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Authors
            </Button>

            <Button
              onClick={(e) => navigate("/dashboard")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Blogs
            </Button>

            <Button
              onClick={(e) => navigate("/blogs/create")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Create Blog
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/src/assets/man.png" />
              </IconButton>
            </Tooltip>

            <Typography
              textAlign="center"
              variant="body1"
              sx={{ padding: 0, fontSize: "14px" }}
              onClick={(e) => navigate("/profile")}
            >
              <b> {username}</b>
            </Typography>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="left"
                  variant="body1"
                  sx={{ padding: 0, fontSize: "14px" }}
                  onClick={(e) => navigate("/dashboard")}
                >
                  <b> Dashboard</b>
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  sx={{ padding: 0 }}
                  onClick={(e) => navigate("/profile")}
                >
                  Profile
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  sx={{ padding: 0 }}
                  onClick={(e) => navigate(`/blogs/users/${username}`)}
                >
                  My Blogs
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  sx={{ padding: 0 }}
                  onClick={(e) => logoutUser()}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
